import { useGlobalContext } from "../context/GlobalContext";
import { useEffect } from "react";
import axios from "axios";
import styles from "./DropDown.module.css";

export default function DropDown() {
  const {
    selectedGenre,
    setSelectedGenre,
    genresList,
    setMovies,
    setSeries,
    apiUrl,
    myKey,
    toggleLoader,
  } = useGlobalContext();

  const handleSelect = (genre, event) => {
    event.preventDefault();
    if (!genre) {
      setSelectedGenre(null);
      setMovies([]);
      setSeries([]);
      return;
    }
    setSelectedGenre(genre);
  };

  useEffect(() => {
    if (!selectedGenre) return;

    toggleLoader(true);

    axios
      .get(
        `${apiUrl}/discover/movie?api_key=${myKey}&with_genres=${selectedGenre.id}`
      )
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
      .get(
        `${apiUrl}/discover/tv?api_key=${myKey}&with_genres=${selectedGenre.id}`
      )
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
  }, [selectedGenre]);

  return (
    <div className="dropdown">
      <button
        className={`${"btn"} ${"dropdown-toggle"} ${styles.dropdownToggle}`}
        type="button"
        id="dropdownMenuButton"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {selectedGenre ? selectedGenre.name : "Seleziona un genere"}
      </button>

      <ul
        className={`${"dropdown-menu"} ${styles.myDropdownMenu}`}
        aria-labelledby="dropdownMenuButton"
      >
        <li>
          <a
            className="dropdown-item"
            href="#"
            onClick={(event) => handleSelect(null, event)}
          >
            Seleziona un genere
          </a>
        </li>

        {genresList.map((genre, index) => (
          <li key={index}>
            <a
              className="dropdown-item"
              href="#"
              onClick={(event) => handleSelect(genre, event)}
            >
              {genre.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
