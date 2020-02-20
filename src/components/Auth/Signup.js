import React from 'react';
//import './fonts/material-icon/css/material-design-iconic-font.min.css';
import './css/style.css';
import signupImg from "./images/signup-image.jpg"
import {Link} from 'react-router-dom';
import  { Redirect } from 'react-router-dom'
import {useState} from "react";

import axios from 'axios';

function Signup() {

    const [state, setstate] = useState(false);
    const [existEmail, setExistEmail] = useState(false);
    let submitHandler = (e) => {
        

        e.preventDefault();
        
        let email = e.target.email.value;
        let pass = e.target.pass.value;
        let name = e.target.name.value;

        axios.post('http://localhost:5000/api/auth/register', {
            email,
            pass,
            name
        })
        .then(function (response) {
            console.log(response);
            if (response.data.status === 'success') {
                setstate(true);
                //return <Redirect to='/signin'  />
            }else{
                //2 To DO:
                setExistEmail(true);
                //document.getElementById('emailWarn').hidden = false;
                //1. Make hidden false for small
                //2. Color borders red for email input
                //localStorage.setItem('token','')
            }
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    if (state===true) {
        return <Redirect to='/signin'  />
    }else{
    return (
        <div className="container">
                <div className="signup-content">
                    <div className="signup-form">
                        <h2 className="form-title">Sign up</h2>
                        <form onSubmit = {submitHandler} className="register-form" id="register-form">
                            <div className="form-group">
                                <label for="name"><i className="zmdi zmdi-account material-icons-name"></i></label>
                                <input type="text" name="name" id="name" placeholder="Your Name"/>
                            </div>
                            <div className="form-group">
                                <label for="email"><i className="zmdi zmdi-email"></i></label>
                                <input className={existEmail?'redBorder':''} type="email" name="email" id="email" placeholder="Your Email"/>
                                {existEmail?<small>This e-mail address is taken already.</small>:null}
                            </div>
                            
                            <div className="form-group">
                                <label for="pass"><i className="zmdi zmdi-lock"></i></label>
                                <input type="password" name="pass" id="pass" placeholder="Password"/>
                            </div>
                            <div className="form-group">
                                <label for="re-pass"><i className="zmdi zmdi-lock-outline"></i></label>
                                <input type="password" name="re_pass" id="re_pass" placeholder="Repeat your password"/>
                            </div>
                            <div className="form-group">
                                <input type="checkbox" name="agree-term" id="agree-term" className="agree-term" />
                                <label for="agree-term" className="label-agree-term"><span><span></span></span>I agree all statements in  <a href="#" className="term-service">Terms of service</a></label>
                            </div>
                            <div className="form-group form-button">
                                <input type="submit" name="signup" id="signup" className="form-submit" value="Register"/>
                            </div>
                        </form>
                    </div>
                    <div className="signup-image">
                        <figure><img src={signupImg} alt="sign up image"/></figure>
                        <Link className="signup-image-link" to='/signin'>
                            I am already member
                        </Link>
                    </div>
                </div>
            </div>
    )
}
}
export default Signup
