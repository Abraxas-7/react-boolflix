import { createContext, useContext, useState } from "react";

import Loader from "../components/Loader";

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [series, setSeries] = useState([]);
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const [selectedGenre, setSelectedGenre] = useState(null);

  const toggleLoader = (state) => {
    setIsLoading(state);
  };

  return (
    <GlobalContext.Provider
      value={{
        movies,
        setMovies,
        series,
        setSeries,
        search,
        setSearch,
        isSearching,
        isLoading,
        setIsLoading,
        setIsSearching,
        selectedGenre,
        setSelectedGenre,
        toggleLoader,
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
