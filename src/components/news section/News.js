import React, { createContext, useEffect, useState } from "react";
/* import axios from "axios";*/
import { NewsContextProvider } from "./NewsContext";
import Ns from "./components/Ns";
import "./news.css";

function News() {
  return (
    <NewsContextProvider>
      <Ns />
    </NewsContextProvider>
  );
}

export default News;