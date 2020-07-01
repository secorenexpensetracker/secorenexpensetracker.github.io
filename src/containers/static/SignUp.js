import React, {useState} from 'react';
import PasswordStrength from '../../components/static/PasswordStrength';
import { Link } from "react-router-dom";
import './SignUp.css';

function SignUp() {
    const emailRegex =  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [score, setScore] = useState(0);
    const [confirmPassword, setConfirmPassword] = useState("");

    // not used for form validation, used for toggling error messages
    const [passwordInstructions, setInstructions] = useState(false);
    const [emailInvalid, setemailInvalid] = useState(false);
    const [passwordsMatch, setPasswordsMatch] = useState(false);

    // used for form validation
    const [enableForm, setEnableForm] = useState(false);


    // send fetch request, do when finished with backend
    function handleSubmit(e) {
        e.preventDefault();
        if(!enableForm) return;
    }

    function verifyFieldsFromPassword(confirmPass, passVal, counter) {
        const confirm = confirmPass ? confirmPass : confirmPassword;
        const pass = passVal ? passVal : password;
        const count = counter ? counter : score;

        if(confirm === pass && count == 3) {
            setPasswordsMatch(false);
            if(email.match(emailRegex)) setEnableForm(true);
        }
        else if(passVal ? confirm != "" : true) {
            setPasswordsMatch(true);
            setEnableForm(false);
        }
    }

    function handleEmailChange(e) {
        setEmail(e.target.value);

        if(!e.target.value.match(emailRegex)) {
            setemailInvalid(true);
            setEnableForm(false);
            return;
        }

        setemailInvalid(false);
        if(password == confirmPassword && score == 3) setEnableForm(true);
    }

    function handlePasswordChange(e) {
        setPassword(e.target.value);
        const value = e.target.value;

        if(value == "" || value==null) {
            setScore(1);
            setEnableForm(false);
            setPasswordsMatch(true);
            setInstructions(true);
            return;
        }

        let counter = 1;
        let pattern = /^[A-Za-z]+$/;

        if(value.length >= 8 && !value.match(pattern)) ++counter;
        if(value != value.toLowerCase()) ++counter;

        if(counter < 3) setInstructions(true);
        else setInstructions(false);

        verifyFieldsFromPassword(null, value, counter);
        setScore(counter);
    }

    function handleConfirmPasswordChange({ target }) {
        setConfirmPassword(target.value);
        verifyFieldsFromPassword(target.value)
    }

    function ifEmptyOrNull(value, func) {
        if(value == "" || value == null) func()
    }

    function handlePasswordFocus({ target }) {
        ifEmptyOrNull(target.value, () => {
            setInstructions(true);
            setEnableForm(false);
            setScore(1);
        })
    }

    function handleEmailFocus({ target }) {
        ifEmptyOrNull(target.value, () => {
            setemailInvalid(true);
            setEnableForm(false);
        })
    }

    function handleConfirmFocus({ target }) {
        ifEmptyOrNull(target.value, () => {
            setPasswordsMatch(true);
            setEnableForm(false);
        })
    }

    return (
        <div id="signup-main-container">
            <div id="signup-form-container">
                <Link to="/" id="signup-form-logo">expensified</Link>
                <h1 id="signup-form-title">Create account</h1>

                <form id="signup-form" onSubmit={handleSubmit}>
                    <h3 className="signup-form-main-banner">Email</h3>
                    <input type="text" onFocus={handleEmailFocus} onChange={handleEmailChange} value={email} id="submit-form-email" className="submit-form-input" />
                    <h3 id={emailInvalid ? "signup-form-email-show-message" : ""} className="signup-form-message">Please enter a valid email</h3>

                    <h3 className="signup-form-main-banner">Password</h3>
                    <input type="password" onFocus={handlePasswordFocus} onChange={handlePasswordChange} value={password} id="submit-form-password" className="submit-form-input" />
                    <PasswordStrength score={score}/>
                    <h3 id={passwordInstructions ? "signup-form-password-show-message" : ""} className="signup-form-message">Please make sure your password has at least 8 characters, one capital letter, and one special character</h3>

                    <h3 className="signup-form-main-banner">Confirm Password</h3>
                    <input type="password" id="submit-form-confirm-password" onFocus={handleConfirmFocus} onChange={handleConfirmPasswordChange} value={confirmPassword} className="submit-form-input"/>
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
