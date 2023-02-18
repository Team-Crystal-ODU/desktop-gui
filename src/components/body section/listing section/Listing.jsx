import React from "react";
import './listing.css';

// Imported Images ============>
import img from '../../../Assets/globe(1).png';

const Listing = () => {
    return (
        <div className="listingSection">
            <div className="rankSection">
                <div className="innerRank"></div>
            </div>

            <div className="secContainer">
                <div className="secTitle">Consumption Overview</div>
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

            <div className="ecosystem flex">
                <img src={img} alt="Image Title" />
            </div>
        </div>
    );
}

export default Listing;
