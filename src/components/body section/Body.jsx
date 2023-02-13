import React from "react";
import './body.css';
import Top from './top section/Top';
import Listing from './listing section/Listing';
import Activity from './activity section/Activity';
import News from "../news section/News";

const Body = () => {
    return (
        <div className="mainContent">
            <Top />

            <div className="bottom flex">
                <Listing />
                <Activity />
                <News />
            </div>
        </div>
    );
}

export default Body;