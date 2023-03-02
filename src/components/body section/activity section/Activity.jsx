import React from "react";
import './activity.css';

// Imported Images ============>
import img from '../../../Assets/logo.png';

const Activity = () => {
    return (
        <div className="activitySection">
            <div className="overviewSection flex">
                <div className="leftOverview">
                    <div className="title">Goals</div>
                    <div className="singleItem">
                        <h3>Goal 1</h3>
                    </div>

                    <div className="singleItem">
                        <h3>Goal 2</h3>
                    </div>

                    <div className="singleItem">
                        <h3>Goal 3</h3>
                    </div>
                </div>

                <div className="rightOverview">
                    <div className="title">Recently Played</div>
                    <div className="rightCard">
                        <div className="itemScroll">
                            <img src={img} alt="Image Title" />
                            <img src={img} alt="Image Title" />
                            <img src={img} alt="Image Title" />
                            <img src={img} alt="Image Title" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Activity;
