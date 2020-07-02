import React from 'react';
import './HowWorks.css';
import Footer from '../../components/static/Footer';
import Header from '../../components/static/Header';
import howitworks1 from '../../resources/images/howitworks1.jpeg';
import howitworks2 from '../../resources/images/howitworks2.jpg';
import howitworks3 from '../../resources/images/howitworks3.jpeg';

function HowWorks() {
  return (
    <div id="how-it-works-main-container">
    <Header active="howitworks"/>
      <div className="how-it-works-multi-column-description-data">
                <div className="how-it-works-column-description-data-text">
                    <h1 className="how-it-works-column-description-data-text-title">1.</h1>
                    <h2>
                        Download the Excel Template that we have provided(note: the Excel files are not necessary, you may manually add your transactions without having to edit or download any Excel file)
                    </h2>
                </div>
                <div className="how-it-works-column-description-data-image">
                    <img className="howitworksimg" alt="expensfied how it works icon step one" src={howitworks1}/>
                </div>
            </div>


            <div className="how-it-works-multi-column-description-data" id="how-it-works-flex-reverse">
                <div className="how-it-works-column-description-data-text">
                    <h1 className="how-it-works-column-description-data-text-title">2.</h1>
                    <h2>
                        Fill out your monthly expenses in the Excel file and add additional categories as you go!
                    </h2>
                </div>
                <div className="how-it-works-column-description-data-image">
                    <img className="howitworksimg" alt="expensfied how it works icon step two" src={howitworks2}/>
                </div>
            </div>


            <div className="how-it-works-multi-column-description-data">
                <div className="how-it-works-column-description-data-text">
                    <h1 className="how-it-works-column-description-data-text-title">3.</h1>
                    <h2>
                        Once you have filled out the spreadsheet, upload to our website and we will automatically take care of the rest for you. You can view your data in a variety of ways on Expensified!
                    </h2>
                </div>
                <div className="how-it-works-column-description-data-image">
                    <img className="howitworksimg" alt="expensfied how it works icon step three" src={howitworks3}/>
                </div>
            </div>

            <Footer />
    </div>
  );
}

export default HowWorks;
