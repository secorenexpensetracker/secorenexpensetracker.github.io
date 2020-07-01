import React from 'react';
import './SignIn.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function SignIn() {
  return (
    <div id="signin-main-container">

      <Link to="/" id="signin-logo">expensified</Link>
      <div id="signin-form-container">
        <h2 id="signin-form-main-banner">Sign in</h2>
        <h2 className="signin-input-banner">Email</h2>
        <input type="text" id="sign-in-email-form" className="signin-input-form" />
        <h2 className="signin-input-banner">Password</h2>
        <input type="password" id="sign-in-password-form" className="signin-input-form" />
        <Link to="/" id="signin-forgot-password">Forgot password?</Link>
        <input type="submit" id="sign-in-submit-button" value="Continue" />
      </div>

      <h3 id="signin-dont-have-account">Don't have an account? <Link to="/signup">Sign up here</Link></h3>

      <Link to="/" className="submit-signin-form-footer">&copy; Secoren LLC 2020</Link>
      <h4 className="submit-signin-form-footer">Terms of Use and Cookie Policy</h4>
    </div>
  );
}

export default SignIn;
