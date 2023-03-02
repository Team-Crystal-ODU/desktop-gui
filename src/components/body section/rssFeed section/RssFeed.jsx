import React from "react";
import './rssFeed.css';


const RssFeed = () => {
    return (
        <div className="rssFeedSection">
            <div className="overviewSection">
                <a classname="title" href="/news">Eco News (click me)</a>
                <div className="leftOverview flex">
                    <div className="singleItem1">
                        <h3>Title</h3>
                    </div>

                    <div className="singleItem2">
                        <h3>Title</h3>
                    </div>

                    <div className="singleItem3">
                        <h3>Title</h3>
                    </div>

                    <div className="singleItem3">
                        <h3>Title</h3>
                    </div>

                    <div className="singleItem2">
                        <h3>Title</h3>
                    </div>
                    <div className="singleItem2">
                        <h3>Title</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RssFeed;