import { useState } from "react";
import { useGlobalContext } from "../context/GlobalContext";

import axios from "axios";

import "./SearchBar.module.css";

export default function SearchBar() {
  const {
    setSearch,
    setMovies,
    setSeries,
    toggleLoader,
    apiUrl,
    myKey,
    selectedGenre,
  } = useGlobalContext();
  const [query, setQuery] = useState("");

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && query.trim() !== "") {
      performSearch(query);
    }
  };

  const performSearch = (query) => {
    toggleLoader(true);
    setSearch(query);

    let genreFilter = "";
    if (selectedGenre) {
      genreFilter = `&with_genres=${selectedGenre.id}`;
    }

    axios
      .get(
        `${apiUrl}/search/movie?api_key=${myKey}&query=${query}${genreFilter}`
      )
      .then((res) => {
        setMovies(res.data.results);
        console.log(res.data.results);
      })
      .catch((err) => {
        console.error("Errore durante la chiamata:", err);
      });

    axios
      .get(`${apiUrl}/search/tv?api_key=${myKey}&query=${query}${genreFilter}`)
      .then((res) => {
        setSeries(res.data.results);
        console.log(res.data.results);
      })
      .catch((err) => {
        console.error("Errore durante la chiamata:", err);
      })
      .finally(() => {
        toggleLoader(false);
      });
  };

  return (
    <input
      type="search"
      placeholder="Search..."
      className="form-control"
      onChange={handleInputChange}
      onKeyDown={handleKeyDown}
    ></input>
  );
}
