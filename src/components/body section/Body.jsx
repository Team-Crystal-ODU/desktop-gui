//Body.jsx

import React from "react";
import './body.css';
import Top from './top section/Top';
import Activity from './activity section/Activity';
import Hero from './hero section/Hero';
import RssFeed from './rssFeed section/RssFeed';


// ======================> RSS Feed imports
import axios from "axios";
import { useEffect, useState } from "react";

const Body = () => {
    const [articles, setArticles] = useState([]);

    const getArticles = async () => {
        try {
        const res = await axios.get("http://localhost:4000/")
        setArticles(res.data);
        } catch (error) {
        console.log(error);
        }
    }

    useEffect(() => {
        getArticles();
    }, [])

    return (
        <div className="mainContent">
            <Top />
            <div className="bottom">
                <Hero />
                <Activity />
                <a classname="newsTitle" href="/news">Eco News</a>
                <div className="newsBlock flex">
                </div> 
            </div>
        </div>
    );
}

export default Body;
