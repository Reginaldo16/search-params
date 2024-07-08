import { Link } from "react-router-dom";
import { Header } from "../components/header";

export const Users = () => {
  return (
    <>
      <Header />
      <main className="">
        <h1 className="flex justify-center text-3xl font-bold py-5">
          Lista de usuario
        </h1>

        <ul className="px-4">
          <li>
            <Link to={"/user/:username"}>Isabel</Link>
          </li>

          <li>
            <Link to={"/user/:username"}>Shelton</Link>
          </li>
        </ul>
      </main>
    </>
  );
};
