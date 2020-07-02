import React, {useState} from 'react';
import PasswordStrength from '../../components/static/PasswordStrength';
import { Link } from "react-router-dom";
import './SignUp.css';

function SignUp() {
    // used for confirmation of password and email
    const emailRegex = new RegExp([
        '^(([^<>()\\[\\]\\\\.,;:\\s@"]+(\.[^<>()\\[\\]\\\\.,;:\\s@"]+)*)',
        '|(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]',
        '{1,3}\\])|(([a-zA-Z\\-0-9]+\.)+[a-zA-Z]{2,}))$'
    ].join(''));
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    // used for the different requirements
    const [capital, setCapital] = useState(null);
    const [special, setSpecial] = useState(null);
    const [charLength, setCharLength] = useState(null);

    // not used for form validation, used for toggling error messages
    const [emailInvalid, setemailInvalid] = useState(false);
    const [passwordsMatch, setPasswordsMatch] = useState(false);

    // used for form validation
    const [enableForm, setEnableForm] = useState(false);

    // send fetch request, do when finished with backend
    function handleSubmit(e) {
        e.preventDefault();
        if(!enableForm) return;
    }

    function verifyFieldsFromPassword(confirmPass, passVal, passwordValid) {
        const confirm = confirmPass ? confirmPass : confirmPassword;
        const pass = !isNaN(passVal) ? passVal : password;
        const ifValid = passwordValid ? passwordValid : special && capital && charLength >= 8;

        if(confirm === pass && ifValid) {
            setPasswordsMatch(false);
            if(email.match(emailRegex)) setEnableForm(true);
        }
        else if(passVal ? confirm != "" : true) {
            setPasswordsMatch(true);
            setEnableForm(false);
        }
    }

    function handleEmailChange({ target }) {
        setEmail(target.value);

        if(!target.value.match(emailRegex)) {
            setemailInvalid(true);
            setEnableForm(false);
            return;
        }

        setemailInvalid(false);
        if (
            password == confirmPassword &&
            capital && special && charLength >= 8
        ) setEnableForm(true);
    }
    
    function ifEmptyOrNull(value, func) {
        if(value === "" || value === null) func()
    }

    function handlePasswordChange({ target }) {
        setPassword(target.value);
        setCharLength(target.value.length);
        const value = target.value;
        const pattern = /(?=.*[\+\-\_\@\#\$\%\&])/;

        ifEmptyOrNull(value, () => {
            setCapital(null);
            setSpecial(null);
            setCharLength(null);
            setEnableForm(false);
            setPasswordsMatch(true);
            return;
        })

        let scores = {
            charVal : target.value.length,
            specialVal: true,
            capitalVal: true
        };

        if(!value.match(pattern)) scores.specialVal = false;
        if(value === value.toLowerCase()) scores.capitalVal = false;

        const passwordValid = scores.specialVal && scores.capitalVal && scores.charLength >= 8
        verifyFieldsFromPassword(null, value, passwordValid);
        
        setCapital(scores.capitalVal);
        setSpecial(scores.specialVal);
    }

    function handleConfirmPasswordChange({ target }) {
        verifyFieldsFromPassword(target.value)
        setConfirmPassword(target.value);
    }

    function handlePasswordFocus({ target }) {
        ifEmptyOrNull(target.value, () => {
            setEnableForm(false);
            setSpecial(null);
            setCapital(null);
            setCharLength(null);
        })
    }

    function handlePasswordBlur({ target }) {
        ifEmptyOrNull(target.value, () => {
            setEnableForm(false);
            setSpecial(null);
            setCapital(null);
            setCharLength(null);
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
                    <input type="password" onFocus={handlePasswordFocus} onChange={handlePasswordChange} onBlur={handlePasswordBlur} value={password} id="submit-form-password" className="submit-form-input" />
                    <PasswordStrength capital={capital} special={special} charLength={charLength}/>
                    
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
