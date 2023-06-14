import React, { useRef, useState, useEffect, useContext } from "react"
import { useNavigate } from "react-router-dom"
import './login.css'
import AuthContext from "../../context/AuthProvider"
import axios from "../../api/axios"

// confirm this later
const LOGIN_URL = 'http://localhost:4005/auth'

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

export const Login = () => {
    const { setAuth } = useContext(AuthContext)
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [validName, setValidName] = useState(false);
    const [userFocus, setUserFocus] = useState(false);

    const [pwd, setPwd] = useState('');
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);

    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        userRef.current.focus();
    }, [])

    //test to confirm name is valid according to restrictions
    useEffect(() => {
        setValidName(USER_REGEX.test(user));
    }, [user])

    //test to confirm password is valid according to restrictions
    useEffect(() => {
        setValidPwd(PWD_REGEX.test(pwd));
    }, [pwd])

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd])


    const handleSubmit = async (e) => {
        e.preventDefault();
        const v1 = USER_REGEX.test(user);
        const v2 = PWD_REGEX.test(pwd);
        if (!v1 || !v2) {
            setErrMsg("Invalid Entry");
            return;
        }

        /* Temp Login Success */
        setUser('');
        setPwd('');
        setSuccess(true);
        navigate("/");
    }

   

    {/*const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const v1 = USER_REGEX.test(user);
            const v2 = PWD_REGEX.test(pwd);
            if (!v1 || !v2) {
                setErrMsg("Invalid Entry");
                return;
            }
            const response = await axios.post(LOGIN_URL,
                JSON.stringify({ user, password: pwd }),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                }
            );
            console.log(JSON.stringify(response?.data));
            //console.log(JSON.stringify(response));
            const accessToken = response?.data?.accessToken;
            const roles = response?.data?.roles;
            setAuth({ user, pwd, roles, accessToken });
            setUser('');
            setPwd('');
            setSuccess(true);
            navigate("/home");
        } catch (err) {
            if (!err?.response) {
                setErrMsg('No Server Response');
            } else if (err.response?.status === 400) {
                setErrMsg('Missing Username or Password');
            } else if (err.response?.status === 401) {
                setErrMsg('Unauthorized');
            } else {
                setErrMsg('Login Failed');
            }
            errRef.current.focus();
        }
    }*/}

    return (
        <>
            {success ? (
                <section>
                    <h1>You are logged in!</h1>
                    <br />
                    <p>
                        <a href="/">Go to Home</a>
                    </p>
                </section>
            ) : (
            <div className="auth-form-container">
                <p ref={errRef} className={errMsg ? "errMsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                <h2>Login</h2>
                <form className="login-form" onSubmit={handleSubmit}>
                    <label htmlFor="username">username</label>
                    <input 
                        type="text"
                        id="username" 
                        ref={userRef}
                        autoComplete="off"
                        onChange={(e) => setUser(e.target.value)}
                        value={user}  
                        required
                        placeholder="username" 
                        aria-invalid={validName ? "false" : "true"}
                        aria-describedby="uidnote"
                        onFocus={() => setUserFocus(true)}
                        onBlur={() => setUserFocus(false)}  
                    />
                    {/* Accessibility Note */}
                    <p id="uidnote" className={userFocus && user && !validName ? "instructions" : "offscreen"}>
                        4 to 24 characters.<br />
                        Must begin with a letter.<br />
                        Letters, numbers, underscores, hyphens allowed.
                    </p>

                    <label htmlFor="password">password</label>
                    <input
                        type="password" 
                        id="password"
                        onChange={(e) => setPwd(e.target.value)}
                        value={pwd}  
                        required 
                        aria-invalid={validPwd ? "false" : "true"}
                        aria-describedby="pwdnote"
                        onFocus={() => setPwdFocus(true)}
                        onBlur={() => setPwdFocus(false)} 
                        placeholder="********"  
                        name="password"  
                    />
                    <p id="pwdnote" className={pwdFocus && !validPwd ? "instructions" : "offscreen"}>
                        8 to 24 characters.<br />
                        Must include uppercase and lowercase letters, a number and a special character.<br />
                        Allowed special characters: <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
                    </p>

                    <button type="submit">Log In</button>
                    {/*<button disabled={!validName || !validPwd ? true : false}>Log In</button>*/}
                </form>
                <a href="/register" className="link-btn">Don't have an account? Register here.</a>
            </div>
            )}
        </>
    )
}


export default Login;