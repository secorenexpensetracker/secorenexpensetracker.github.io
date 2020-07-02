import React from "react";
import "./About.css";
import mukundImg from "../../resources/images/mukund.JPG";
import Header from "../../components/static/Header";
import Footer from "../../components/static/Footer";

export default function About() {
    return (
        <div id="about-main-container">
            <Header active="about"/>
            
            <div className="how-it-works-multi-column-description-data data">
                <div className="how-it-works-column-description-data-text text">
                    <h1 className="how-it-works-column-description-data-text-title">Arjun Inamdar</h1>
                    <h2>
                    Arjun is the co-founder at Secoren LLC. He specializes in full stack development, and is experienced in Spring, Java, Python, React JS, C, and more. He is also experienced with operating systems. He has developed coppellmathtutors.com. He became OCA certified (Oracle Certified Associate in Java SE 8) at the age of 13. He is also a Microsoft certified Python developer.
                    </h2>
                </div>
                <div className="how-it-works-column-description-data-image image">
                    <img alt="Arjun co-founder Expensified Secoren LLC"/>
                </div>
            </div>
            
            <div className="how-it-works-multi-column-description-data data" id="how-it-works-flex-reverse">
                <div className="how-it-works-column-description-data-text text">
                    <h1 className="how-it-works-column-description-data-text-title">Mukund K Raman</h1>
                    <h2>
                    Mukund is the co-founder of Secoren LLC, and he is very passionate in many topics such as physics, quantum physics, programming, robotics, mathematics, etc. He is especially interested in programming, and he usually works with the language Java. In fact, he is already Java certified, and he got his certification as early as possible when he just turned 13. After that, he continued his programming career by working on games in Unreal Engine, developing algorithms using live quantum computer services from IBM, learning more about Operating Systems and languages like C and C++ so that he could eventually make his own compiler for his programming language, and he is also currently developing a Mortgage Calculator iOS Application for his dad’s company. He also recently got a Python Certification as well, and he has been a great contributor to our Expense Tracker.
                    </h2>
                </div>
                <div className="how-it-works-column-description-data-image image">
                    <img alt="Mukund co-founder Expensified Secoren LLC" src={mukundImg}/>
                </div>
            </div>

            <Footer />
        </div>
    );
}