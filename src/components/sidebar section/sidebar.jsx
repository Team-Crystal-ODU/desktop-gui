import React from "react";
import './sidebar.css';

// Imported Images
import logo from '../../Assets/logo.png';

// placeholder logo image
const Sidebar = () => {
    return (
        <div className="sideBar grid">
            <div className="logoDiv flex">
                <img src={logo} alt="World Space Logo" /> 
                <h2>World Space</h2>
            </div>

            <div className="menuDiv">
                <h3 className="divTitle">
                    QUICK MENU
                </h3>
                <ul className="menuLists grid">
                    <li className="listItem">
                        <a href="#" className="menuLink flex">
                            icon
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Sidebar;