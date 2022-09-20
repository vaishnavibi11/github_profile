import logo from "./logo.svg";
import "./App.css";
import User from "./components/User";
import Repo from "./components/Repo";
import { useEffect, useState } from "react";
import axios from "axios";
function App() {
  const [data, setData] = useState();
  useEffect(() => {
    const getUserData = async () => {
      const res = await axios.get("https://api.github.com/users/johnpapa");
      console.log(res.data);
      setData(res.data);
    };
    getUserData();
  }, []);
  return (
    <>
      {data && (
        <div className="App">
          <User data={data} />
          <Repo total={data.public_repos} />
        </div>
      )}
    </>
  );
}

export default App;
