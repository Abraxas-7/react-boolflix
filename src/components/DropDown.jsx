import { useGlobalContext } from "../context/GlobalContext";
import styles from "./DropDown.module.css";

export default function DropDown() {
  const { selectedGenre, setSelectedGenre, genresList } = useGlobalContext();

  const handleSelect = (genre, event) => {
    event.preventDefault();
    setSelectedGenre(genre);
  };

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
