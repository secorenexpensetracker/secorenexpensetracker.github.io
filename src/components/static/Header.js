
import React, {useState, useEffect} from 'react';
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';
import './Header.css';

import { Link } from "react-router-dom";

function Header(props) {
    const[showOptions, setOptions] = useState(false);

    useEffect(() => {
        window.addEventListener("resize", handleResize);
    }, []);


    function handleResize(){
        if(window.innerWidth >= 900){
            setOptions(false);
            enableBodyScroll(document.body);  
        }
    }

    function handleLineClick(e) {
        e.preventDefault();
        
        if(showOptions) {
            setOptions(false);
            enableBodyScroll(document.body);
        }else{
            setOptions(true);
            disableBodyScroll(document.body);
        }
    }

    return (
        <div id="header-main-container">
            <Link to="/" id="header-logo">
                expensified
                <p>expense tracking simplified</p>
            </Link>
        
            <div id="header-list-mobile-lines" className={showOptions ? "changeIcon" : ""} onClick={handleLineClick}>
                <div id="header-line1" />
                <div id="header-line2" />
                <div id="header-line3" />
            </div>
        
           <h1 id="header-main-break" />
            <div id={showOptions ? "header-showing-options" : ""} className="header-list-container">
                <ul id="header-list">
                    <Link className="header-list-link" onClick={() => props.active != "home" ? enableBodyScroll(document.body) : 0} to="/"><li id={props.active == "home" ? "header-list-active" : ""}>home</li></Link>
                    <Link className="header-list-link" onClick={() => props.active != "howitworks" ? enableBodyScroll(document.body) : 0} to="/howitworks"><li id={props.active == "howitworks" ? "header-list-active" : ""}>how it works</li></Link>
                    <Link className="header-list-link" onClick={() => props.active != "signin" ? enableBodyScroll(document.body) : 0} to="/signin"><li id={props.active == "signin" ? "header-list-active" : ""}>sign in</li></Link>
                    <Link className="header-list-link" onClick={() => props.active != "signup" ? enableBodyScroll(document.body) : 0} to="/signup"><li id={props.active == "signup" ? "header-list-active" : ""}>sign up</li></Link>
                    <Link className="header-list-link" onClick={() => props.active != "about" ? enableBodyScroll(document.body) : 0} to="/about"><li id={props.active == "about" ? "header-list-active" : ""}>about</li></Link>
                </ul>
            </div>
        </div>
  );
}


export default Header;