import "./HeaderComponent.module.css";

import SearchBar from "./SearchBar";
export default function HeaderComponent() {
  return (
    <header className="d-flex align-items-center justify-content-between px-4">
      <div>
        <h1>BOOLFLIX</h1>
      </div>

      <div>
        <SearchBar />
      </div>
    </header>
  );
}
