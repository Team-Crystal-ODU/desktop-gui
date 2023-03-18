import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './login.css';

export const Login = () => {
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');

    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    const navigate = useNavigate();

    /*useEffect(() => {
        userRef.current.focus();
    }, [])*/

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd])

    const handleSubmit = async (e) => {
        /* Temp Login Success */
        e.preventDefault();
        console.log(user, pwd);
        setUser('');
        setPwd('');
        setSuccess(true);
        navigate("/home");
    }

    return (
        <>
            {success ? (
                <section>
                    <h1>You are logged in!</h1>
                    <br />
                    <p>
                        <a href="/home">Go to Home</a>
                    </p>
                </section>
            ) : (
            <div className="auth-form-container">
                <p ref={errRef} className={errMsg ? "errMsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                <h2>Login</h2>
                <form className="login-form" onSubmit={handleSubmit}>
                    <label htmlFor="username">username</label>
                    <input value={user} 
                        onChange={(e) => setUser(e.target.value)}
                        type="text" 
                        placeholder="username" 
                        id="username" 
                        autoComplete="off"
                        required />
                    <label htmlFor="password">password</label>
                    <input value={pwd} 
                        onChange={(e) => setPwd(e.target.value)} 
                        type="password" 
                        placeholder="********" 
                        id="password" 
                        name="password" 
                        required />
                    <button type="submit">Log In</button>
                </form>
                <a href="/register" className="link-btn">Don't have an account? Register here.</a>
            </div>
            )}
        </>
    )
}


export default Login;