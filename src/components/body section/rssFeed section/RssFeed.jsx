import React from "react";
import './rssFeed.css';

const RssFeed = ({ title, date, content }) => {
    return (
        <div className="rssFeedSection">
            <div className="singleItem">
                <h3 className="title">{title}</h3>
                <p className="date">{date}</p>
                <h4 className="description">{content}</h4>
            </div>
        </div>  
    )
}

export default RssFeed;