import React, { useState, useEffect } from "react";
import './hero.css';
import Chart from '../../chart/Chart';

// Image Imports ============>

// Earth Imports ============>
import styled from "styled-components";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Earth } from "../earth section/Earth";

// Imported Icons ============>
import { AiFillCaretUp } from 'react-icons/ai';


const Hero = () => {
    // fetch world space api data
    const [users, setUser] = useState([]);
    useEffect(() => {
       fetch('http://localhost:4005/carbon?user=ecogamer')
       //fetch('http://172.18.12.16:6000/carbon?user=ecogamer')
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
            
            {/*<div className="rank">
                <div className="innerRank"></div>
            </div>*/}

            <div className="overviewSection flex"> 
             
                <div className="leftOverview">
                    <div className="title">Consumption Overview <span className="days">(Last 5 Days)</span></div>
                    <div className="scoreContainer flex">
                        <div className="singleItem">
                            <h3>Readout</h3>
                            <div className="readout_text">
                                <span className="score">{users.co2}</span>
                                <div className="readout_subtext">
                                    <p className="units">Total lbs of CO<sub>2</sub></p>
                                    <AiFillCaretUp className="icon" />
                                </div>
                            </div>
                        </div>

                        <div className="singleItem">
                            <h3>Driven Equivalent</h3>
                            <div className="readout_text">
                                <span className="score">{users.miles_driven}</span>
                                <div className="readout_subtext">
                                    <p className="units">Total miles driven</p>
                                    <AiFillCaretUp className="icon" />
                                </div>
                            </div>
                        </div>

                        <div className="singleItem">
                            <h3>Watt Hours</h3>
                            <div className="readout_text">
                                <span className="score">{users.watt_hours}</span>
                                <div className="readout_subtext">
                                    <p className="units">Total watt-hours</p>
                                    <AiFillCaretUp className="icon" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="rightOverview">
                    <div className="title">Ecosystem Health</div>
                    <div className="earth">
                        <Canvas>
                            <Suspense fallback={null}>
                                <Earth />
                            </Suspense>
                        </Canvas>
                    </div>
                    <p>{users.ppm} PPM</p> 
                </div>
            </div>
        </div>
    );
}

export default Hero;
