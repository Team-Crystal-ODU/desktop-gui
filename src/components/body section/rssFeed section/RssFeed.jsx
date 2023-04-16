import React from "react";
import './rssFeed.css';

const RssFeed = ({ image, title, date }) => {
    return (
        <div className="rssFeedSection">
            <div className="singleItem">
                {/*<img src="https://i0.wp.com/yaleclimateconnections.org/wp-content/uploads/2023/04/423_treedamage_1600.jpg?fit=300%2C169&amp;ssl=1" alt="">{image}</img>*/}
                <img className="image" src={image}></img>
                <p className="date">{date}</p>
                <h3 className="title">{title}... <span>Read More</span></h3>
            </div>
        </div>  
    )
}

export default RssFeed;