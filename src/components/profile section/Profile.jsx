import './profile.css'
import Top from "../body section/top section/Top"

// Imported Images ============>
import img from '../../Assets/logo.png'

const Profile = () => {

    return (
        <div className="profileContainer">
            <Top />
            <div className='contentWrapper flex'>
                <div className='content'>
                    <h1>Edit Profile</h1>
                    <p>User Name</p>
                    <input className='name_input'></input>
                    <p>Password</p>
                    <input className='name_input'></input>
                    <p>Confirm Password</p>
                    <input className='name_input'></input>
                    <p>Change Profile Picture</p>
                    <input className='name_input'></input>
                </div>
                <img src={img} alt=''></img>
            </div>
        </div>
    );
}

export default Profile;
