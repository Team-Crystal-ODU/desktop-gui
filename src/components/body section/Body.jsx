//Body.jsx

import React from "react";
import './body.css';
import Top from './top section/Top';
import Activity from './activity section/Activity';
import Achievement from './achievement section/Achievement';
import Hero from './hero section/Hero';
import RssFeed from './rssFeed section/RssFeed';


// ======================> RSS Feed imports
import axios from "axios";
import { useEffect, useState } from "react";

const Body = () => {
    const [articles, setArticles] = useState([]);

    console.log(articles);

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

    console.log(articles);

    return (
        <div className="mainContent">
            <Top />
            <div className="bottom">
                <Hero />
                <Activity />
                {/*<Achievement />*/}
                {articles.map((item, i) =>
                <RssFeed 
                    key={i}
                    title={item.item.title}
                    date={item.item.pubDate}
                />
        )} 
            </div>
        </div>
    );
}

export default Body;
