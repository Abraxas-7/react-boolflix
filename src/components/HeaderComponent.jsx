import "./HeaderComponent.module.css";

import SearchBar from "./SearchBar";
import DropDown from "./DropDown";
export default function HeaderComponent() {
  return (
    <header className="d-flex align-items-center justify-content-between px-4">
      <div>
        <h1>BOOLFLIX</h1>
      </div>

      <div className="d-flex align-items-center gap-3">
        <DropDown />
        <SearchBar />
      </div>
    </header>
  );
}
