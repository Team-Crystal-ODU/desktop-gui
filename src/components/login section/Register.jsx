import React, { useState } from "react";

export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [pwd, setPwd] = useState('');
    const [name, setName] = useState('');

    //const emailRef = useRef();
    //const errRef = useRef();
    //const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(email, pwd, name);
        setEmail('');
        setPwd('');
        setName('');
        setSuccess(true);
    }


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
                <h2>Register</h2>
                <form className="register-form" onSubmit={handleSubmit}>
                    <label htmlFor="name">Full name</label>
                    <input value={name} name="name" onChange={(e) => setName(e.target.value)} id="name" placeholder="Full name" />
                    <label htmlFor="email">email</label>
                    <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                    <label htmlFor="password">password</label>
                    <input value={pwd} onChange={(e) => setPwd(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                    <button type="submit">Log In</button>
                </form>
                <a href="/" className="link-btn">Already have an account? Login here.</a>
            </div>
            )}
        </>
    )
}

export default Register;