import React, {useState} from 'react';
import './SignUp.css';
import Header from '../../components/static/Header';
import PasswordStrength from '../../components/static/PasswordStrength';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

function SignUp() {
    const [email, setEmail] = useState("");
    const[password, setPassword] = useState("");
    const[score, setScore] = useState(0);
    const[confirmPassword, setConfirmPassword] = useState("");

    //not used for form validation, used for toggling error messages
    const[passwordInstructions, setInstructions] = useState(false);
    const[emailInvalid, setemailInvalid] = useState(false);
    const[passwordsMatch, setPasswordsMatch] = useState(false);

    //used for form validation
    const[enableForm, setEnableForm] = useState(false);


    //send fetch request, do when finished with backend
    function handleSubmit(e) {
        e.preventDefault();
        if(!enableForm)
            return;
    }

    function handleEmailChange(e) {
        setEmail(e.target.value);

        let emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if(!e.target.value.match(emailRegex)){
            setemailInvalid(true);
            setEnableForm(false);
            return;
        }

        setemailInvalid(false);
        
        if(password == confirmPassword && score == 3)
            setEnableForm(true);
    }

    function handlePasswordChange(e) {
        setPassword(e.target.value);
        const value = e.target.value;

        

        if(value == "" || value==null){
            setScore(1);
            setEnableForm(false);
            setPasswordsMatch(true);
            setInstructions(true);
            return;
        }

        let counter = 0;
        
        if(value.length >= 8)
            ++counter;
        
        let pattern = /^[A-Za-z]+$/;

        if(!value.match(pattern))
            ++counter;
    
        if(value != value.toLowerCase())
            ++counter;

        //we want to keep the red bar
        if(counter == 0) 
            counter = 1;

        if(counter <= 1){
            setInstructions(true);
        }else if(counter == 2){
            setInstructions(true);
        }else if(counter == 3){
            setInstructions(false);
        }

        
        if(counter === 3 && confirmPassword === value){
            setPasswordsMatch(false);
            if(email.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/))
                setEnableForm(true);

        }else if(confirmPassword != ""){
            setPasswordsMatch(true);
            setEnableForm(false);
        }

        setScore(counter);

        
        
    }


    function handleConfirmPasswordChange(e) {
        setConfirmPassword(e.target.value);

        if(e.target.value == password && score == 3){
            setPasswordsMatch(false);
            if(email.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/))
                setEnableForm(true);
        }else{
            setPasswordsMatch(true);
            setEnableForm(false);
        }
    }

    function handlePasswordFocus(e) {
        if(e.target.value == "" || e.target.value == null) {
            setInstructions(true);
            setEnableForm(false);
            setScore(1); 
        }
    }

    function handleEmailFocus(e) {
        if(e.target.value == "" || e.target.value == null) {
            setemailInvalid(true);
            setEnableForm(false);
        }
    }

    function handleConfirmFocus(e) {
        if(e.target.value == "" || e.target.value == null){
            setPasswordsMatch(true);
            setEnableForm(false);
        }
    }

    


    return (
        <div id="signup-main-container">

            <div id="signup-form-container">
                <Link to="/" id="signup-form-logo">expensified</Link>
                <h1 id="signup-form-title">Create account</h1>

                <form id="signup-form" onSubmit={handleSubmit}>
                    <h3 className="signup-form-main-banner">Email</h3>
                    <input type="text" onFocus={(e) => handleEmailFocus(e)} onChange={(e) => handleEmailChange(e)} value={email} id="submit-form-email" className="submit-form-input" />
                    <h3 id={emailInvalid ? "signup-form-email-show-message" : ""}className="signup-form-message">Please enter a valid email</h3>

                    <h3 className="signup-form-main-banner">Password</h3>
                    <input type="password" onFocus={(e) => handlePasswordFocus(e)} onChange={(e) => handlePasswordChange(e)} value={password} id="submit-form-password" className="submit-form-input" />
                    <PasswordStrength score={score}/>
                    <h3 id={passwordInstructions ? "signup-form-password-show-message" : ""} className="signup-form-message">Your password needs to be at least 8 characters in length, needs a non-letter, and at least one capital letter</h3>

                    <h3 className="signup-form-main-banner">Confirm Password</h3>
                    <input type="password" id="submit-form-confirm-password" onFocus={(e) => handleConfirmFocus(e)} onChange={(e) => handleConfirmPasswordChange(e)} value={confirmPassword} className="submit-form-input"/>
                    <h3 id={passwordsMatch ? "signup-form-confirm-password-show-message" : ""} className="signup-form-message">Your passwords don't match or your password is invalid</h3>
                    <input type="submit" id={enableForm ? "signup-form-submit-form-button-valid" : ""} className="signup-form-submit-button" value="Create Account" />
                    <h4 id="submit-form-signin-signup">Already have an account? <Link to="/signin">Sign in</Link></h4>
                    <Link to="/" id="submit-form-footer">&copy; Secoren LLC 2020</Link>
                    <h4 id="submit-form-footer">Terms of Use and Cookie Policy</h4>
                </form>
            </div>
        </div>
  );
}

export default SignUp;
