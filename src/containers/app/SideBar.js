import React from 'react';
import './SideBar.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



function SideBar() {
    
    return (
        <div id="side-bar-main-container">
            <h1 id="side-bar-logo">expensified</h1>

            <div id="side-bar-list-container">
                <ul id="side-bar-list">
                    <li>home</li>
                    <li>show report</li>
                    <li>add expenses</li>
                    <li>add categories</li>
                    <li>settings</li>
                </ul>
            </div>
        </div>
    );
}

export default SideBar;
