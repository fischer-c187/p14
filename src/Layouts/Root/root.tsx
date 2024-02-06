import Header from "@layouts/Header/header";
import { Outlet } from "react-router-dom";

function Root() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Root;
