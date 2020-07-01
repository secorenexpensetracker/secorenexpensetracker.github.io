import React from 'react';
import './Dashboard.css';
import SideBar from './SideBar';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



function Dashboard() {
    
    return (
        <div id="dashboard-main-container">
            <SideBar />
        </div>
    );
}

export default Dashboard;
