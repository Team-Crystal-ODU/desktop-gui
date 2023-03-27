import React from "react";
import './activity.css';
import Chart from '../../chart/Chart';

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
                    <div className="title">Energy Usage <span className="days">(Past 5 Days)</span></div>
                    <div className="chartContainer">
                        <Chart />
                    </div>
                </div>
                <div className="rightOverview">
                    <div className="title">Recent Usage</div>
                    <div className="singleItem">
                        <h3>CPU...</h3>
                    </div>

                    <div className="singleItem">
                        <h3>GPU...</h3>
                    </div>

                    <div className="singleItem">
                        <h3>...</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Activity;
