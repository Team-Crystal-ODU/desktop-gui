import React, { useState, useEffect } from "react";
import './hero.css';
import Chart from '../../chart/Chart';

// Image Imports ============>
import img2 from '../../../Assets/graph.png';

// Earth Imports ============>
import styled from "styled-components";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Earth } from "../earth section/Earth";


const Hero = () => {
    // fetch world space api data
    const [users, setUser] = useState([]);
    useEffect(() => {
       fetch('http://localhost:4000/carbon?user=ecogamer')
       //fetch('https://jsonplaceholder.typicode.com/users?_limit=10')
          .then((response) => response.json())
          .then((data) => {
             console.log(data);
             setUser(data);
          })
          .catch((err) => {
             console.log(err.message);
          });
    }, []);
  
    // consume world space api data
    return (
        <div className="heroSection">
            
            <div className="rank">
                <div className="innerRank"></div>
            </div>

            <div className="overviewSection flex"> 
             
                <div className="leftOverview">
                    <div className="title">Consumption Overview</div>
                    <div className="singleItem">
                        <span className="score">{users.co2}</span>
                        <div>
                            <h3>Readout</h3>
                            <p className="units">lbs of CO<sub>2</sub></p>
                        </div>
                    </div>

                    <div className="singleItem">
                        <span className="score">{users.miles_drive}</span>
                        <div>
                            <h3>Driven Equivalent</h3>
                            <p className="units">miles driven</p>
                        </div>
                    </div>

                    {/*<div className="singleItem efficiency">
                        <span className="score">33</span>
                        <h3 className="efficiencyScore">Your Efficiency Score</h3>
                    </div>*/}
                </div>

                <div className="middleOverview">
                    <div className="title">Ecosystem Health</div>
                    {/*<img src={img} alt="Image Title" />*/}
                    <div className="earth">
                        <Canvas>
                            <Suspense fallback={null}>
                                <Earth />
                            </Suspense>
                        </Canvas>
                    </div>
                    <p>{users.ppm} PPM</p> 
                </div>

                <div className="rightOverview flex">
                    <div className="chartContainer">
                        <Chart />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
