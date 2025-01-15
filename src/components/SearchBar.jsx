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
    setSelectedGenre,
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
    if (selectedGenre) {
      setSelectedGenre(null);
    }

    toggleLoader(true);
    setSearch(query);

    axios
      .get(`${apiUrl}/search/movie?api_key=${myKey}&query=${query}`)
      .then((res) => {
        const updatedMovies = res.data.results.map((movie) => {
          movie.poster_url = movie.poster_path
            ? `https://image.tmdb.org/t/p/w342${movie.poster_path}`
            : "https://placehold.co/300x400/000000/FFFFFF.png?text=Immagine+non+disponibile";
          return movie;
        });
        setMovies(updatedMovies);
        console.log(updatedMovies);
      })
      .catch((err) => {
        console.error("Errore durante la chiamata:", err);
      });

    axios
      .get(`${apiUrl}/search/tv?api_key=${myKey}&query=${query}`)
      .then((res) => {
        const updatedSeries = res.data.results.map((serie) => {
          serie.poster_url = serie.poster_path
            ? `https://image.tmdb.org/t/p/w342${serie.poster_path}`
            : "https://placehold.co/300x400/000000/FFFFFF.png?text=Immagine+non+disponibile";
          return serie;
        });

        setSeries(updatedSeries);
        console.log(updatedSeries);
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
