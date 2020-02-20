import React from 'react';
import {Link,Redirect} from 'react-router-dom';

import './css/style.css';
import signinImg from "./images/signin-image.jpg"
import axios from 'axios';

import {useState} from "react";

function Signin() {

    const [stateSignin, setStateSignin] = useState(false);
    /* 
    //const [statePass, setstate] = useState('');
    let inputChangeHandler = (e) => {
        const {name , value} = e.target
            setState( prevState => ({
            ...prevState,
            [name] : value
        })
    );
        //setstate([e.target.name]:e.target.value);
        console.log(state);
    } */
    
    let registerHandler = (e) => {
        e.preventDefault();
        let email = e.target.email.value;
        let pass = e.target.pass.value;
        //console.log({email,pass});

        axios.post('http://localhost:5000/api/auth/login', {
            email,
            pass
        })
        .then(function (response) {
            console.log(response);
            if (response.data.token) {
                localStorage.setItem('token',response.data.token);
                setStateSignin(true);
            }else{
                localStorage.setItem('token','');
            }
        })
        .catch(function (error) {
            console.log(error);
        });
    }
    if (stateSignin) {
        return <Redirect to='/dashboard'/>
    }else{
    return (
        <div className="signin-content">
                    <div className="signin-image">
                        <figure><img src={signinImg} alt="sing up image"/></figure>
                        <Link className="signup-image-link" to='/signup'>
                            Create an account
                        </Link>
                    </div>

                    <div className="signin-form">
                        <h2 className="form-title">Sign in</h2>
                        <form onSubmit={registerHandler} className="register-form" id="login-form">
                            <div className="form-group">
                                <label for="your_name"><i className="zmdi zmdi-account material-icons-name"></i></label>
                                <input type="email" name="email" id="email" placeholder="Your Name"/>
                            </div>
                            <div className="form-group">
                                <label for="your_pass"><i className="zmdi zmdi-lock"></i></label>
                                <input type="password" name="pass" id="your_pass" placeholder="Password"/>
                            </div>
                            <div className="form-group">
                                <input type="checkbox" name="remember-me" id="remember-me" className="agree-term" />
                                <label for="remember-me" className="label-agree-term"><span><span></span></span>Remember me</label>
                            </div>
                            <div className="form-group form-button">
                                <input type="submit" name="signin" id="signin" className="form-submit" value="Log in"/>
                            </div>
                        </form>
                        <div className="social-login">
                            <span className="social-label">Or login with</span>
                            <ul className="socials">
                                <li><a href="#"><i className="display-flex-center zmdi zmdi-facebook"></i></a></li>
                                <li><a href="#"><i className="display-flex-center zmdi zmdi-twitter"></i></a></li>
                                <li><a href="#"><i className="display-flex-center zmdi zmdi-google"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
    )
}
}
export default Signin
