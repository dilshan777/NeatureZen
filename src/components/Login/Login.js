import React, { useState } from "react";
import './Login.css';
import { FaUserAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";


const Login = () => {
    const [isRegistering, setIsRegistering] = useState(false); // Line added to manage form visibility
    const [action, setAction] = useState('');

    const registerLink = () => {
        setIsRegistering(true);
        setAction('active'); // Optional if you still want to use 'action'
    };

    const loginlink = () => {
        setIsRegistering(false);
        setAction(''); // Optional if you still want to use 'action'
    };


    return (
        <div className="main" id="main">
            {/* Logo Section */}
            <div className='logosection'>
                <img src="/logo.png" alt="logo" className='logo' />
            </div>
            {/* Combined Section (Login, Registration, and Picture) */}
            <div className={`forminc ${action}`}>



                {/*login forme*/}
                <div className="form login">

                    <form>
                        <h2 className='h2'>Welcome to NatureZen</h2>
                        <div className="form-group">

                            {/*User name*/}
                            <input type='text' id='username' name='username' placeholder='User Name' required />
                            <FaUserAlt className='icon' />
                            {/*Display error for username*/}
                            {/*{errors.username && <p style={{ color: "red" }}>{errors.username}</p>}*/}
                        </div>
                        <div className={`form login ${isRegistering ? 'hidden' : ''}`}>


                            {/**Password*/}

                            <input type='password' id='password' name='password' placeholder='Enter Your Password' required />

                            <FaLock className='icon' />
                            {/*Display error for password*/}
                            {/*{errors.password && <p style={{ color: "red" }}>{errors.password}</p>}*/}

                        </div>

                        {/*Remember me and forget part*/}
                        <div className='remember-forget'>
                            {/*<label > <input type='checkbox' /> Remember Me</label>
                            <a >Forgot password?</a>*/}
                        </div>
                        {/*submit button*/}

                        <button type="submit">Login</button>
                        <div className='register-link'>
                            <p>Don't have an account? <a href='#' onClick={() => setIsRegistering(true)}>Register</a></p> 
                        </div>


                    </form>
                </div>

                {/*register form*/}
                <div className={`form register ${isRegistering ? '' : 'hidden'}`}>

                    <form>
                        <h2 id='reg'>Registration</h2>
                        <div className='form-group'>
                            {/*User name*/}
                            <input type='text' id='username' name='username' placeholder='User Name' required />
                            <FaUserAlt className='icon' />
                            {/*Display error for user name
                                {errors.usename && <p style={{ color: "red" }}>{errors.username}</p>}*/}
                        </div>
                        <div className='form-group'>
                            {/*Email*/}
                            <input type='email' id='email' name='email' placeholder='Email' required />
                            <MdEmail className='icon' />
                            {/*{errors.email && <p style={{ color: "red" }}>{errors.email}</p>}*/}
                        </div>
                        {/**Password*/}
                        <div className='form-group'>
                            <input type='password' id='password' name='password' placeholder='Enter Your Password' required />
                            <FaLock className='icon' />
                            {/*Display error for password*
                               {/* {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}*/}
                        </div>
                        {/*Remember me and forget part*/}
                        <div className='remember-forget'>
                            <label ><input type='checkbox' />I agree to the terms & conditions</label>
                        </div>
                        <button type='submit'>Register</button>
                        <p>Already have an account? <a href='#' onClick={() => setIsRegistering(false)}>Login</a></p>

                    </form>
                </div>
            </div>
        </div>



    );
};
export default Login;