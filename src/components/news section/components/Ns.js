import React, { useContext } from "react";
import { NewsContext } from "../NewsContext";
import Newsart from "./Newsart";

function Ns(props) {
  const { data } = useContext(NewsContext);
  console.log(data);

  return (
    <div>
      <h1 className="head__text">Eco News</h1>
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