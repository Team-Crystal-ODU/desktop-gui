import React, {createContext, useEffect, useState} from "react";
import axios from "axios";
export const Newscontent = createContext();

export const NewsContentProvider = (props) => {
    const [data, setData] = useState([]);
    const apiKey = "8b3857ce9ec64963a71559484c640e1b";
    useEffect(() => {
     axios
        .get('https://newsapi.org/v2/everything?q=climatechange&from=2023-01-11&sortBy=publishedAt&apiKey=${apiKey}'
        )
        .then(response =>setData(response.data()))
        .catch(error =>console.log(error));
    },[]);
    return (
        <NewsContentProvider props={data}>{props.children}</NewsContentProvider>
    )
}

