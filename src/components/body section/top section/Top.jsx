import React from "react";
import './top.css';

// Imported Icons ==================>
import {BiSearchAlt} from 'react-icons/bi';
import {TbMessageCircle} from 'react-icons/tb';
import {MdOutlineNotificationsNone} from 'react-icons/md';

// Imported Images ==================>
import logo from '../../../Assets/logo.png';
import img from '../../../Assets/user(2).jpg';

const Top = () => {
    return (
        <div className="topSection">
            <div className="headerSection flex">
                <div className="title">
                    <div className="logoDiv flex">
                        <img src={logo} alt="World Space Logo" />
                        <h1>Welcome to World Space.</h1>
                    </div>
                    <p>Hello Simon, Welcome back!</p>
                </div>

                <div className="searchBar flex">
                    <input type="text" placeholder="Search Dashboard" />
                    <BiSearchAlt className="icon"/>
                </div>

                <div className="adminDiv flex">
                    <TbMessageCircle className="icon" />
                    <MdOutlineNotificationsNone className="icon" />
                    <div className="adminImage">
                        <img src={img} alt="Admin Image" />
                    </div>
                    <a href="/">Logout</a>
                </div>
            </div>
        </div>
    );
}

export default Top;
