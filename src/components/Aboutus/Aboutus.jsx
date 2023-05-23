import React from 'react';
import "./Aboutus.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

export default function Aboutus() {
  return (
    <>
    <div className="Aboutus-main-container">
        {/*banner image*/}
        <img className="Aboutus-banner-image" src="/asset/img/Banner.png" alt="banner" />
        {/*container to manage the width like container in bootstrap*/}
        <div className="aboutus-inside-container">
            {/*The content absolut on banner image*/}
            <div className="aboutus-inside-container-flex">
                <Navbar />
                <div className="aboutus-banner-text">
                    <p>WE ARE GLOBE RAMBLERS A WORLD CLASS TRAVEL AGENCY</p>
                </div>
                <div className="aboutus-banner-text-lower">
                    <p>Tips, experiences, and places. All in one place</p>
                </div>
                {/* <div className="aboutus-banner-search">
                    <form className='aboutus-search-form'>
                        <input className='aboutus-form-input' type="text" placeholder='Destination, City'/>
                        <button className='aboutus-search-button'>Search</button>
                    </form>
                </div> */}
            </div>
        </div>
        {/*The content below the banner image*/}
        <div className="aboutus-black-background-text">
            <div className="aboutus-black-background-text-width">
                <p style={{fontSize:'35px', marginBottom:"25px"}}>This adventure isn't about change but it seems to be an inevitability.</p>

                <p style={{fontSize:'14px', marginBottom:"25px", marginTop:'40px'}}>The benefits of traveling are not just a one-time thing: traveling changes you physically and psychologically. Having little time or money isn't a valid excuse. You can fly for cheap very easily. If you have a full-time job and a family, you can still travel on the weekends or holidays, even with a baby</p>

                <div className="aboutus-black-background-flex">
                    <div className="aboutus-black-background-flex-p1">
                        <p style={{fontSize:'44px'}}>50</p>
                        <p>trips</p>
                    </div>
                    <div className="aboutus-black-background-flex-p2">
                        <p style={{fontSize:'44px'}}>100</p>
                        <p>Happy Customers</p>
                    </div>
                </div>
            </div>     
        </div>
        {/* Team Introduction Section */}
        <div className="Aboutus-team">
            <div className="team-text">
                <p>Meet  Our  Team</p>
            </div>
            <div className="team-intro-cards">
                <div className="team-card">
                    <img src="/asset/img/bakhshiImage.png" alt="img1" />
                    <b>Moeez Ahmad Bakhshi</b>
                    <p>ML Engineer/ MERN Stack Developer</p>
                </div>
                <div className="team-card">
                    <img src="/asset/img/sheikhImage.png" alt="img2" />
                    <b>Sheikh Abdullah Nazakat</b>
                    <p>Senior Full Stack Developer</p>
                </div>
                <div className="team-card">
                    <img src="/asset/img/maxabImage.png" alt="img3" />
                    <b>Maxab Ahmad</b>
                    <p>Senior WordPress Developer</p>
                </div>
            </div>
        </div>
        {/* Customer Reviews Section */}
        <div className="aboutus-customers-reviews">
            <div className="aboutus-customer-reviews-text">
                <p>Customer Reviews</p>
            </div>
            <div className="aboutus-customer-reviews-cards">
                <div className="aboutus-customer-reviews-card">
                    <p><b>A Truly Amazing Experience</b></p>
                    <p>The Service is Top class and there is a lot of variety to choose from. The community here is genuine and offers are affordable and worth it. The option of fund transfer is the plus point this website provides.</p>
                    <img src="/asset/img/reviewImage.png" alt="img" />
                </div>  
                <div className="aboutus-customer-reviews-card">
                    <p><b>A Truly Amazing Experience</b></p>
                    <p>The Service is Top class and there is a lot of variety to choose from. The community here is genuine and offers are affordable and worth it. The option of fund transfer is the plus point this website provides.</p>
                    <img src="/asset/img/reviewImage.png" alt="img" />
                </div>  
                <div className="aboutus-customer-reviews-card">
                    <p><b>A Truly Amazing Experience</b></p>
                    <p>The Service is Top class and there is a lot of variety to choose from. The community here is genuine and offers are affordable and worth it. The option of fund transfer is the plus point this website provides.</p>
                    <img src="/asset/img/reviewImage.png" alt="img" />
                </div>   
            </div>
        </div>
        {/* Footer Section */}
        <Footer />

    </div>
    </>
  )
}

