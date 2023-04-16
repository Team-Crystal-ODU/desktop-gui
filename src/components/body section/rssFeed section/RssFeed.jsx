import React from "react";
import './rssFeed.css';

const RssFeed = ({ image, title, date, link }) => {
    return (
        <div className="rssFeedSection">
            <div className="singleItem" >
                <img className="image" src={image}></img>
                <p className="date">{date}</p>
                <a className="title" href ={link} target = "_blank"
                    rel= "noopener noreferrer">{title}... <span>Read More</span></a>
                
            </div>
        </div>  
    )
}

export default RssFeed;