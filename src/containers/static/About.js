import React from "react";
import "./About.css";
import mukundImg from "../../resources/images/mukund.JPG";
import Header from "../../components/static/Header";
import Footer from "../../components/static/Footer";

export default function About() {
    return (
        <div id="about-main-container">
            <Header active="about"/>
            
            <div className="how-it-works-multi-column-description-data">
                <div className="how-it-works-column-description-data-text">
                    <h1 className="how-it-works-column-description-data-text-title">Arjun</h1>
                    <h2>
                        Arjun Inamdar is the co-founder of Secoren LLC. He is a developer as well, and he specializes in full-
                        stack development. He is an OCA certified Java developer and a Microsoft certified Python developer.
                        He is experienced with React JS, Java, Spring framework, MySQL, and more.
                    </h2>
                </div>
                <div className="how-it-works-column-description-data-image">
                    <img alt="Arjun co-founder Expensified Secoren LLC"/>
                </div>
            </div>
            
            <div className="how-it-works-multi-column-description-data" id="how-it-works-flex-reverse">
                <div className="how-it-works-column-description-data-text">
                    <h1 className="how-it-works-column-description-data-text-title">Mukund</h1>
                    <h2>
                        Mukund Raman is the co-founder of Secoren LLC. He has been a programmer for several years. He is an
                        OCA certified Java programmer and a Microsoft certified Python programmer. He specializes in React JS, 
                        app development, and Java. 
                    </h2>
                </div>
                <div className="how-it-works-column-description-data-image">
                    <img alt="Mukund co-founder Expensified Secoren LLC" src={mukundImg}/>
                </div>
            </div>

            <Footer />
        </div>
    );
}