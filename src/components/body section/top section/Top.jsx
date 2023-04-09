import React, { useState } from "react"
import './top.css'

// Imported Icons ==================>
import {HiOutlineSearch} from 'react-icons/hi'
import {MdOutlineNotificationsNone} from 'react-icons/md'
import {RxCaretDown} from 'react-icons/rx'
import {CiLogout} from 'react-icons/ci'
import {CgProfile} from 'react-icons/cg'

// Imported Images ==================>
import logo from '../../../Assets/logo.png'
import img from '../../../Assets/user.jpeg'

const Top = () => {
    const [open, setOpen] = useState(false)
    console.log(open)

    return (
        <div className="topSection">
            <div className="headerSection flex">
                <div className="title">
                    <a className="logoDiv flex" href="/home">
                        <img src={logo} alt="World Space Logo" />
                        <h1>World Space.</h1>
                    </a>
                </div>

                <div className="searchBar flex">
                    <input type="text" placeholder="Search Dashboard..." />
                    <HiOutlineSearch className="icon"/>
                </div>

                <div className="adminDiv flex">
                    <MdOutlineNotificationsNone className="icon" />
                    <div className="admin-container flex" onClick={() => {setOpen(!open)}}>
                        <div className="adminImage"><img src={img} alt="" /></div>
                        <div className="adminName">Hi, Stacey</div>
                        <RxCaretDown className="icon"/>
                    </div>
                    <div class={`dropdown-menu ${open? 'active' : 'inactive'}`}>
                        <ul>
                            <DropdownItem img={logo} text={'My Profile'}/>
                            <DropdownItem img={logo} text={'Logout'}/>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

function DropdownItem(props) {
    return (
        <li className="dropdownItem">
            <img src={props.img}></img>
            <a>{props.text}</a>
        </li>
    );
}

export default Top;
