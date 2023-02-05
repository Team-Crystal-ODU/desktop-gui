import React from "react";
import './body.css';
import Top from './top section/Top';
import Listing from './listing section/Listing';
import Activity from './activity section/Activity';

const Body = () => {
    return (
        <div className="mainContent">
            <Top />

            <div className="bottom flex">
                <Listing />
                <Activity />
            </div>
        </div>
    );
}

export default Body;