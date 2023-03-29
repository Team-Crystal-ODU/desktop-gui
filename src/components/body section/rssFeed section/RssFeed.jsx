import React from "react";
import './rssFeed.css';

const RssFeed = ({ title, date }) => {
    return (
        <div className="rssFeedSection">
            <div className="singleItem">
                <h3 className="title">{title}</h3>
                <p className="date">{date}</p>
            </div>
        </div>  
    )
}

export default RssFeed;