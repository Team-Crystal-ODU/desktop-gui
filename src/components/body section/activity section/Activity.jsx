import React, { useState, useEffect } from "react";
import './activity.css';
import Chart from '../../chart/Chart';

// Imported Images ============>
import img from '../../../Assets/eldenRing.png';
import img1 from '../../../Assets/callOfDuty.png';
import img2 from '../../../Assets/fortNite.png';
import img3 from '../../../Assets/valorant.png';

const Activity = () => {
     // fetch world space api data
     const [watts, setWatts] = useState([]);
     useEffect(() => {
        fetch('http://localhost:4005/carbon?user=ecogamer')
           .then((response) => response.json())
           .then((data) => {
              console.log(data);
              setWatts(data);
           })
           .catch((err) => {
              console.log(err.message);
           });
     }, []);
   
     // consume world space api data
    return (
        <div className="activitySection">
            <div className="overviewSection flex">
                <div className="leftOverview">
                    {/*<div className="title">Energy Usage <span className="days">(Last 5 Days)</span></div>*/}
                    <div className="title">Energy Usage <span className="days">(WTD)</span></div>
                    <div className="chartContainer">
                        <Chart />
                    </div>
                </div>
                <div className="rightOverview">
                    <div className="title">Recent Usage</div>
                    <div className="singleItem">
                        <h3>CPU Watts 22</h3>
                    </div>

                    <div className="singleItem">
                        <h3>GPU Watts 49</h3>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Activity;
