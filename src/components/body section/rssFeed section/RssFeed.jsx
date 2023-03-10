import React from "react";
import './rssFeed.css';
import App from "./rss/src/App"
const RssFeed = ({ title, date }) => {
    return (
        <div className="rssFeedSection">
            <App />
        </div>
             
    )
}

export default RssFeed;
