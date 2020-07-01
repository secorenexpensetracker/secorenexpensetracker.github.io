import React from 'react';
import Footer from '../../components/static/Footer';
import './Home.css';
import Header from '../../components/static/Header';
import piechart from '../../resources/images/home-pie-chart.png';
import bargraph from '../../resources/images/home-bar-graph.png';
import doughnutgraph from '../../resources/images/home-doughnut-graph.png';
import linegraph from '../../resources/images/home-line-graph.png';
import shieldicon from '../../resources/images/home-shield-image.png';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

function Home() {
    return (
        <div id="home-main-container">
            <Header active="home" />

            
            
            <div id="home-multi-column-hero">
                <div id="home-column-text">
                    <h1>Start with our expense tracker, today, for free. </h1>
                    <Link to="/signup"><button id="home-column-text-button-1">SIGN UP</button></Link>
                    <Link to="/howitworks"><button id="home-column-text-button-2">HOW IT WORKS</button></Link>
                </div>

                <div id="home-column-image">
                    <img id="home-image" alt="expensified home pie chart image" src={piechart} />
                </div>
            </div>

            <h2 id="home-what-we-offer">What do we offer?</h2>

            <div className="home-multi-column-description-data" id="home-column-1">
                <div className="home-column-description-data-text">
                    <h1 className="home-column-description-data-text-title">Import or Export Data Using Microsoft Excel</h1>
                    <h2>
                    Our expense analysis tool allows for you to
                    import or export existing data from a Microsoft Excel
                    file to or from our application. However, you don't need to
                    use Excel files to use our application, as you can manually add
                    data through our platform. 
                    </h2>
                </div>
                <div className="home-column-description-data-image">
                    <img alt="expensified home doughnut graph" src={doughnutgraph} />
                </div>
            </div>


            <div className="home-multi-column-description-data home-flex-reverse" id="home-column-2">
                <div className="home-column-description-data-text">
                    <h1 className="home-column-description-data-text-title">Ease of Use</h1>
                    <h2>
                    Our website is extremely easy to use. You can easily add data from a Microsoft
                    Excel file, or you can easily add data manually. We also provide lots of graphs
                    so you can visualize your data. 
                    </h2>
                </div>
                <div className="home-column-description-data-image">
                    <img alt="expensified home bar graph" src={bargraph} />
                </div>
            </div>


            <div className="home-multi-column-description-data" id="home-column-3">
                <div className="home-column-description-data-text">
                    <h1 className="home-column-description-data-text-title">Smart Categories</h1>
                    <h2>
                    We provide smart categories, which
                    allows for our application to auto
                    generate categories for you based on
                    your previous categories/sub-
                    categories.
                    </h2>
                </div>
                <div className="home-column-description-data-image">
                    <img alt="expensified home line graph" src={linegraph} />
                </div>
            </div>

            <div className="home-multi-column-description-data home-flex-reverse" id="home-column-4">
                <div className="home-column-description-data-text">
                    <h1 className="home-column-description-data-text-title">Data Security</h1>
                    <h2>
                    <span className="home-description-highlight">We secure all of your data.</span> We don't
                    collect any personal information, nor do
                    we sell any personal information. Your data is also
                    encrypted, so only you can access it.
                    </h2>
                </div>
                <div className="home-column-description-data-image">
                    <img alt="expensified home shield icon" src={shieldicon} />
                </div>
            </div>


            <Footer />
        </div>    
    );
}

export default Home;
