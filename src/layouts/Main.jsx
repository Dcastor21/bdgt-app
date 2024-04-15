import { Outlet, useLoaderData } from "react-router-dom";
import { fetchData } from "../helpers";
import Nav from "../Components/Nav";
import wave from "../assets/wave.svg";

export function mainLoader() {
  const userName = fetchData("userName");
  return { userName };
}

const Main = () => {
  const { userName } = useLoaderData();
  return (
    <div className="layout">
      <Nav userName={userName} />
      <main>
        <Outlet />
      </main>
      <h1>Main</h1>
      <img src={wave} alt="" />
    </div>
  );
};

export default Main;
