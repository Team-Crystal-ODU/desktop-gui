import React, { useRef, useState, useEffect } from "react";
import './login.css';

export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pwd, setPwd] = useState('');

    const emailRef = useRef();
    const errRef = useRef();
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        setErrMsg('');
    }, [email, pwd])

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(email, pwd);
        setEmail('');
        setPwd('');
        setSuccess(true);
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
                    <label htmlFor="email">email</label>
                    <input value={email} 
                        onChange={(e) => setEmail(e.target.value)}
                        type="email" 
                        placeholder="youremail@gmail.com" 
                        id="email" 
                        name="email"
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