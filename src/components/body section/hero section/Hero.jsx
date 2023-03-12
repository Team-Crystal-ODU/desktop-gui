import React from "react";
import './hero.css';

// Imported Images ============>
import img from '../../../Assets/globe(1).png';
import img2 from '../../../Assets/graph.png';

// Earth Imports ============>
import styled from "styled-components";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Earth } from "../earth section/Earth";

const Hero = () => {
    return (
        <div className="heroSection">
            
            <div className="rank">
                <div className="innerRank"></div>
            </div>

            <div className="overviewSection flex"> 
             
                <div className="leftOverview">
                    <div className="title">Consumption Overview</div>
                    <div className="singleItem">
                        <span className="score">50</span>
                        <div>
                            <h3>Readout</h3>
                            <p className="units">lbs of CO<sub>2</sub></p>
                        </div>
                    </div>

                    <div className="singleItem">
                        <span className="score">43</span>
                        <div>
                            <h3>Driven Equivalent</h3>
                            <p className="units">miles driven</p>
                        </div>
                    </div>

                    <div className="singleItem efficiency">
                        <span className="score">33</span>
                        <h3 className="efficiencyScore">Your Efficiency Score</h3>
                    </div>
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
                    <p>355 PPM</p> 
                </div>

                <div className="rightOverview flex">
                    <img src={img2} alt="Image Title" />
                </div>
            </div>
        </div>
    );
}

export default Hero;
