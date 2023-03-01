import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const NewsContext = createContext();

export const NewsContextProvider = (props) => {
  const [data, setData] = useState();

  useEffect(() => {
    axios
      .get(
       'https://newsapi.org/v2/everything?q=climatechange&from=2023-02-03&sortBy=publishedAt&apiKey=8b3857ce9ec64963a71559484c640e1b' //f9b6d5aa96554959bc424f1f49eda0e0'
      )
      .then((response) => setData(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <NewsContext.Provider value={{ data }}>
      {props.children}
    </NewsContext.Provider>
  );
};