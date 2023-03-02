import React from "react";
import './body.css';
import Top from './top section/Top';
import Activity from './activity section/Activity';
import Achievement from './achievement section/Achievement';
import Listing from './listing section/Listing';
import RssFeed from './rssFeed section/RssFeed';

const Body = () => {
    return (
        <div className="mainContent">
            <Top />
            <div className="bottom">
                <Listing />
                <Activity />
                {/*<Achievement />*/}
                <RssFeed />
            </div>
        </div>
    );
}

export default Body;