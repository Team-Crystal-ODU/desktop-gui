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
        //fetch('http://172.18.12.16:6000/game?user=ecogamer')
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
                    <h3 className="chart_title">Hourly Energy Usage</h3>
                    <div className="chart_container">
                        <Chart />
                    </div>
                </div>
                
                {/*<div className="rightOverview">
                    <div className="game">
                        <h3 className="game_header">Recently Played</h3>
                        {/*<div className="game_image"><img src={img1}></img></div>*
                        <div className="title_container">
                            <h3 className="game_title">Call of Duty</h3> 
                            <p className="game_subtitle">Black Ops</p>
                        </div>
                    </div>

                    <div className="singleItem">
                        <h3>CPU Watts</h3>
                        <div className="watts">22</div>
                    </div>

                    <div className="singleItem">
                        <h3>GPU Watts</h3>
                        <div className="watts">49</div>
                    </div>
                </div>*/}
            </div>
        </div>
    );
}

export default Activity;
