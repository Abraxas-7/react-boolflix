import { createContext, useContext, useState, useEffect } from "react";

import Loader from "../components/Loader";
import axios from "axios";

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [series, setSeries] = useState([]);
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [selectedGenre, setSelectedGenre] = useState(null);
  const [genresList, setGenresList] = useState([]);
  const [roughGenreList, setRoughGenreList] = useState([]);

  const apiUrl = import.meta.env.VITE_API_URL;
  const myKey = import.meta.env.VITE_API_KEY;

  const toggleLoader = (state) => {
    setIsLoading(state);
  };

  const fetchGenres = () => {
    axios
      .get(`${apiUrl}/genre/movie/list?api_key=${myKey}`)
      .then((res) => {
        setRoughGenreList(res.data.genres);
        console.log(res.data.genres);
      })
      .catch((err) => {
        console.error("Errore durante la chiamata:", err);
      });

    axios
      .get(`${apiUrl}/genre/tv/list?api_key=${myKey}`)
      .then((res) => {
        setRoughGenreList((prevGenres) => [...prevGenres, ...res.data.genres]);
        console.log(res.data.genres);
      })
      .catch((err) => {
        console.error("Errore durante la chiamata:", err);
      });
  };

  useEffect(() => {
    fetchGenres();
  }, []);

  useEffect(() => {
    function removeDuplicates(genresArray) {
      let seenNames = [];
      let uniqueGenres = [];

      for (let i = 0; i < genresArray.length; i++) {
        let genre = genresArray[i];

        if (!seenNames.includes(genre.name)) {
          uniqueGenres.push(genre);
          seenNames.push(genre.name);
        }
      }

      return uniqueGenres;
    }
    console.log(roughGenreList);
    setGenresList(removeDuplicates(roughGenreList));
    console.log(genresList);
  }, [roughGenreList]);

  return (
    <GlobalContext.Provider
      value={{
        movies,
        setMovies,
        series,
        setSeries,
        search,
        setSearch,
        isLoading,
        setIsLoading,
        selectedGenre,
        setSelectedGenre,
        toggleLoader,
        apiUrl,
        myKey,
        genresList,
      }}
    >
      {isLoading && <Loader />}
      {children}
    </GlobalContext.Provider>
  );
};

function useGlobalContext() {
  const context = useContext(GlobalContext);
  return context;
}

export { GlobalProvider, useGlobalContext };
