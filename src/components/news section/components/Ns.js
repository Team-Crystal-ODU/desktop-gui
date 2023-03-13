import React, { useContext } from "react";
import App from "../../body section/rssFeed section/rss/src/App";
import { NewsContext } from "../NewsContext";
import Newsart from "./Newsart";

function Ns(props) {
  const { data } = useContext(NewsContext);
  console.log(data);

  return (
    <div>
      <div className="head__text">
        <h1>Eco News</h1>
        <a href="/">Return to Home</a>
      </div>
      <div>
         <App />
      </div>
    </div>
  );
}

export default Ns;