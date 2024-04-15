import { useLoaderData } from "react-router-dom";
import { fetchData } from "../helpers";
import Intro from "../Components/Intro";
import { toast } from "react-toastify";

export function dashLoader() {
  const userName = fetchData("userName");
  return { userName };
}

export async function dashboardAction({ request }) {
  const data = await request.formData();
  const formData = Object.fromEntries(data);
  try {
    localStorage.setItem("userName", JSON.stringify(formData.userName));
    return toast.success("Welcome, ${formData.userName}!");
  } catch (e) {
    throw new Error("there was a problem.");
  }
}

const Dashboard = () => {
  const { userName } = useLoaderData();
  return <>{userName ? <p>{userName}</p> : <Intro />}</>;
};

export default Dashboard;
