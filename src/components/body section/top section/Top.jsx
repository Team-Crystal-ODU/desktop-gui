import React, { useState } from "react"
import './top.css'

// Imported Icons ==================>
import {HiOutlineSearch} from 'react-icons/hi'
import {MdOutlineNotificationsNone} from 'react-icons/md'
import {RxCaretDown} from 'react-icons/rx'
import {CiLogout} from 'react-icons/ci'
import {CgProfile} from 'react-icons/cg'
import {GiWorld} from 'react-icons/gi'
import {BiWorld} from 'react-icons/bi'
import {TiLeaf} from 'react-icons/ti'

// Imported Images ==================>
import logo from '../../../Assets/logo.png'
import img from '../../../Assets/user2.jpg'

const Top = () => {
    const [open, setOpen] = useState(false)
    console.log(open)

    return (
        <div className="topSection">
            <div className="headerSection flex">
                <div className="title">
                    <a className="logoDiv flex" href="/">
                        {/*<img className="image" src={logo} alt="World Space Logo" />*/}
                        {/*<TiLeaf className="image"/>*/}
                        <h1>world space.</h1>
                    </a>
                </div>

                <div className="searchBar flex">
                    {/*<input type="text" placeholder="Search Dashboard..." />*/}
                    <input type="text" />
                    <HiOutlineSearch className="icon"/>
                </div>

                <div className="adminDiv flex">
                    <MdOutlineNotificationsNone className="icon" />
                    <div className="admin-container flex" onClick={() => {setOpen(!open)}}>
                        <div className="adminImage"><img src={img} alt="" /></div>
                        <div className="adminName">Hi, Simon</div>
                        <RxCaretDown className="icon"/>
                    </div>
                    <div class={`dropdown-menu ${open? 'active' : 'inactive'}`}>
                        <ul>
                            <li className="dropdownItem">
                                <CgProfile />
                                <a className="" href="/profile">My Profile</a>
                            </li>
                            <li className="dropdownItem">
                                <CiLogout />
                                <a href="/login">Log Out</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            {/*<hr className="nav_line"/>*/}
        </div>
    );
}

export default Top;
