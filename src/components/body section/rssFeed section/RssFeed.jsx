import React from "react";
import './rssFeed.css';

const RssFeed = ({ image, title, date, link }) => {
    return (
        <div className="rssFeedSection">
            <div className="singleItem" >
                <img className="image" src={image}></img>
                <p className="date">{date}</p>
                <h3 className="title" >{title}... <a href ={link} target = "_blank"
                    rel= "noopener noreferrer">Read More</a></h3>
                
            </div>
        </div>  
    )
}

export default RssFeed;