import { useGlobalContext } from "../context/GlobalContext";
import { useState, useEffect } from "react";

import CardList from "./CardList";
import style from "./MainComponent.module.css";

export default function MainComponent() {
  const { movies, series, search } = useGlobalContext();
  const [hasSearched, setHasSearched] = useState(false);

  useEffect(() => {
    if (search.trim() !== "" || selectedGenre) {
      setHasSearched(true);
    }
  }, [search]);

  if (!hasSearched) {
    return (
      <div
        className={`${style.myContainer} d-flex align-items-center justify-content-center fs-1`}
      >
        Prova a cercare un film o una serie
      </div>
    );
  }

  return (
    <div className="container-fluid p-5">
      {hasSearched && movies.length === 0 && series.length === 0 && (
        <div
          className={`${style.myContainer} d-flex align-items-center justify-content-center fs-1`}
        >
          Nessun post trovato per Movies o Series
        </div>
      )}

      {movies.length > 0 && (
        <div className="py-3">
          <h2>Movies</h2>
          <CardList items={movies} />
        </div>
      )}

      {series.length > 0 && (
        <div className="py-5">
          <h2>Series</h2>
          <CardList items={series} />
        </div>
      )}
    </div>
  );
}
