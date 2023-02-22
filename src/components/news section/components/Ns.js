import React, { useContext } from "react";
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
      <div className="all__news">
        {data
          ? data.articles.map((news) => (
              <Newsart data={news} key={news.url} />
            ))
          : "Loading"}
      </div>
    </div>
  );
}

export default Ns;