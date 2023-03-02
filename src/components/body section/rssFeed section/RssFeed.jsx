import React from "react";
import './rssFeed.css';



const RssFeed = ({ title, date }) => {
    return (
        <div className="rssFeedSection">
            <div className="overviewSection">
                <a classname="title" href="/news">Eco News (click me)</a>
                <div className="leftOverview">
                    <div className="singleItem1">
                        <div className="title">
                            <h3 className="text-xl mb-1">{title}</h3>
                        </div>
                        <p className="date">{date}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RssFeed;
