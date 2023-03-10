import React from "react";
import './activity.css';

// Imported Images ============>
import img from '../../../Assets/eldenRing.png';
import img1 from '../../../Assets/callOfDuty.png';
import img2 from '../../../Assets/fortNite.png';
import img3 from '../../../Assets/valorant.png';

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
                            <img src={img} alt="" />
                            <img src={img1} alt="" />
                            <img src={img2} alt="" />
                            <img src={img3} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Activity;
