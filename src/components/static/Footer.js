import React from "react";
import "./Footer.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function Footer() {
  return (
    <div className="footer">
      <div className="sitelinks">
        <p>Site Links</p>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/signin">Sign In</Link></li>
          <li><Link to="/signup">Sign Up</Link></li>
          <li><Link to="/howitworks">How It Works</Link></li>
          <li><Link to="/about">About Us</Link></li>
        </ul>
      </div>
      <div className="socialmedia">
        <p>Visit our social media links!</p>
        <ul>
          <li><Link to="/">Twitter</Link></li>
          <li><Link to="/">Instagram</Link></li>
          <li><Link to="/">Facebook</Link></li>
        </ul>
      </div>
      <div className="copyright">
        &copy; Secoren LLC. 2020
      </div>
    </div>
  );
}
