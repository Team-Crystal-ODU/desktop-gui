import React from "react";
import './top.css';

// Imported Icons ==================>
import {HiOutlineSearch} from 'react-icons/hi';
import {MdOutlineNotificationsNone} from 'react-icons/md';

// Imported Images ==================>
import logo from '../../../Assets/logo.png';
import img from '../../../Assets/user.jpeg';

const Top = () => {
    return (
        <div className="topSection">
            <div className="headerSection flex">
                <div className="title">
                    <div className="logoDiv flex">
                        <img src={logo} alt="World Space Logo" />
                        <h1>World Space.</h1>
                    </div>
                </div>

                <div className="searchBar flex">
                    <input type="text" placeholder="Search Dashboard..." />
                    <HiOutlineSearch className="icon"/>
                </div>

                <div className="adminDiv flex">
                    <MdOutlineNotificationsNone className="icon" />
                    <div className="adminImage">
                        <img src={img} alt="" />
                    </div>
                    <a href="/">Hi, Stacey</a>
                    {/*<a href="/login">Logout</a>*/}
                </div>
            </div>
        </div>
    );
}

export default Top;
