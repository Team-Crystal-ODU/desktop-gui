import React from "react";
import './listing.css';

// Imported Images ============>
import img from '../../../Assets/globe(1).png';
import img2 from '../../../Assets/graph.png';

const Listing = () => {
    return (
        <div className="listingSection">
            
            <div className="rank">
                <div className="innerRank"></div>
            </div>

            <div className="overviewSection flex"> 
             
                <div className="leftOverview">
                    <div className="title">Consumption Overview</div>
                    <div className="singleItem">
                        <span className="score">50</span>
                        <h3>Readout</h3>
                    </div>

                    <div className="singleItem">
                        <span className="score">43</span>
                        <h3>Driven Equivalent</h3>
                    </div>

                    <div className="singleItem efficiency">
                        <span className="score">33</span>
                        <h3 className="efficiencyScore">Your Efficiency Score</h3>
                    </div>
                </div>

                <div className="middleOverview">
                    <div className="title">Ecosystem Health</div>
                    <img src={img} alt="Image Title" />
                    <p>355 PPM</p> 
                </div>

                <div className="rightOverview flex">
                    <img src={img2} alt="Image Title" />
                </div>

            </div>
        </div>
    );
}

export default Listing;
