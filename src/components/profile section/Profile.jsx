import './profile.css'
import React, { useState, useEffect } from "react"
import Top from "../body section/top section/Top"

// Imported Images ============>
import user from '../../Assets/user2.jpg'

// Imported Icons ============>
import {FaUserCircle} from 'react-icons/fa'
import {HiUserCircle} from 'react-icons/hi'

const Profile = () => {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [pic, setPic] = useState();
    const [picMessage, setPicMessage] = useState();

    return (
        <div className="profileContainer">
            <Top />
            <div className='contentWrapper flex'>
                <div className='content'>
                    <h1>Edit Profile</h1>
                    <p>User Name</p>
                    <input type="text" placeholder="User Name" className='username_input'></input>
                    <p>Password</p>
                    <input type="password" placeholder="********" className='password_input'></input>
                    <p>Confirm Password</p>
                    <input type="password" placeholder="********" className='password_input'></input>
                    <p>Change Profile Picture</p>
                    <input type="text" placeholder="Upload Profile Picture" className='pic_input'></input>
                    <button className='browse'>Browse</button>
                    <button className='update'>Update</button>
                </div>
                <img className="image" src={user} alt=''></img>
            </div>
        </div>
    );
}

export default Profile;
