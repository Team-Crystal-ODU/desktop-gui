import React from "react";
import './sidebar.css';

// Imported Images ==============>
import logo from '../../Assets/logo.png';

// Imported icons ===============>
import {IoMdSpeedometer} from 'react-icons/io';
import {TfiWorld} from 'react-icons/tfi';
import {BsQuestionCircle} from 'react-icons/bs'

// placeholder logo image
const Sidebar = () => {
    return (
        <div className="sideBar grid">
            <div className="logoDiv flex">
                <img src={logo} alt="World Space Logo" /> 
                <h2>World Space.</h2>
            </div>

            <div className="menuDiv">
                <h3 className="divTitle">
                    CONSUMPTION OVERVIEW
                </h3>
                <ul className="menuLists grid">
                    <li className="listItem">
                        <a href="/#" className="menuLink flex">
                            <IoMdSpeedometer className="icon" />
                            <span className="smallText">
                                Readout
                            </span>
                        </a>
                    </li>

                    <li className="listItem">
                        <a href="/#" className="menuLink flex">
                            <TfiWorld className="icon" />
                            <span className="smallText">
                                Driven Equivalent
                            </span>
                        </a>
                    </li>

                    <li className="listItem">
                        <a href="/#" className="menuLink flex">
                            <TfiWorld className="icon" />
                            <span className="smallText">
                                Efficiency Score
                            </span>
                        </a>
                    </li>
                </ul>
            </div>
{/* This is the tab for the Eco news, please update the necessary fonts and spacing */}
            <div className="newsDiv">
                <h3 className="divTitle">
                    NEWS
                </h3>
                <ul className="menuLists grid">
                    <li className="listItem">
                        <a href="/#" className="menuLink flex">
                            <TfiWorld className="icon" />
                            <span className="smallText">
                                Eco-News
                            </span>
                        </a>
                    </li>
                </ul>
            </div>

            <div className="settingsDiv">
                <h3 className="divTitle">
                    SETTINGS
                </h3>
                <ul className="menuLists grid">
                    <li className="listItem">
                        <a href="/#" className="menuLink flex">
                            <IoMdSpeedometer className="icon" />
                            <span className="smallText">
                                Dashboard
                            </span>
                        </a>
                    </li>

                    <li className="listItem">
                        <a href="/#" className="menuLink flex">
                            <TfiWorld className="icon" />
                            <span className="smallText">
                                Consumption Overview
                            </span>
                        </a>
                    </li>

                    <li className="listItem">
                        <a href="/#" className="menuLink flex">
                            <TfiWorld className="icon" />
                            <span className="smallText">
                                Goals
                            </span>
                        </a>
                    </li>

                    <li className="listItem">
                        <a href="/#" className="menuLink flex">
                            <TfiWorld className="icon" />
                            <span className="smallText">
                                Achievements
                            </span>
                        </a>
                    </li>

                </ul>
            </div>

            <div className="sideBarCard">
                <BsQuestionCircle className="icon" />
                <div className="cardContent">
                    <h3>Help Center</h3>
                    {/*<p>Having trouble in World Space, please contact us.</p>
                    <button className="btn">Go to help center</button>*/}
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
