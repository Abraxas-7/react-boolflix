import { useState, useEffect } from "react";
import { useGlobalContext } from "../context/GlobalContext";

import axios from "axios";

const apiUrl = import.meta.env.VITE_API_URL;
const myKey = import.meta.env.VITE_API_KEY;

export default function SearchBar() {
  const { setSearch, setMovies, setSeries, toggleLoader } = useGlobalContext();
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

    axios
      .get(`${apiUrl}/search/movie?api_key=${myKey}&query=${query}`)
      .then((res) => {
        setMovies(res.data.results);
        console.log(res.data.results);
      })
      .catch((err) => {
        console.error("Errore durante la chiamata:", err);
      });

    axios
      .get(`${apiUrl}/search/tv?api_key=${myKey}&query=${query}`)
      .then((res) => {
        setMovies(res.data.results);
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
