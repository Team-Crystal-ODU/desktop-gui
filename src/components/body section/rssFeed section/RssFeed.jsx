import React from "react";
import './rssFeed.css';
import App from "../../news page/News"


const RssFeed = ({ title, date }) => {
    return (
        <div className="rssFeedSection">
            <div className="overviewSection">
                <div className="leftOverview">
                    <div className="singleItem">
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

{/* <div className="rssFeedSection">
        <App />
</div> */}
