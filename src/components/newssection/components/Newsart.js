import React from "react";

function Newsart({ data }) {
  return (
    <div className="news">
      <h1 className="news__title">{data.title}</h1>
      <h1 className="news__url">{data.url}</h1>
      <img className = "news__images" src={data.urlToImage} alt="world space"/>
      <p className="news__desc">{data.description}</p>
      <span className="news__author">{data.author}</span> <br />
      <span className="news__published">{data.publishedAt}</span>
      <span className="news__source">{data.source.name}</span>
    </div>
  );
}

export default Newsart;