import { Outlet } from "react-router-dom";

import HeaderComponent from "../components/HeaderComponent";

export default function DefaultLayout() {
  return (
    <div>
      <HeaderComponent />
      <main className="container">
        <Outlet />
      </main>
    </div>
  );
}
