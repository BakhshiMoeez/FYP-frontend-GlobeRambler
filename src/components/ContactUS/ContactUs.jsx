import React from "react";
import "./ContactUs.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { MessageOutlined } from "@ant-design/icons";
import { EnvironmentOutlined } from "@ant-design/icons";
import { GlobalOutlined } from "@ant-design/icons";
import GetInTouch from "../GetInTouch/GetInTouch";

const ContactUs = () => {
  return (
    <>
      <div className="contact-us-main-container">
        {/*banner image*/}
        <img
          className="contact-us-banner-image"
          src="/asset/img/Banner.png"
          alt="banner"
        />
        {/*container to manage the width like container in bootstrap*/}
        <div className="contact-us-inside-container">
          {/*The content absolut on banner image*/}
          <div className="contact-us-inside-container-flex">
            <Navbar />
            <div className="contact-us-banner-text">
              <p>WE ARE GLOBE RAMBLERS A WORLD CLASS TRAVEL AGENCY</p>
            </div>
            <div className="contact-us-banner-text-lower">
              <p>Tips, experiences, and places. All in one place</p>
            </div>
            <div className="contact-us-banner-search">
              <form className="contact-us-search-form">
                <input
                  className="contact-us-form-input"
                  type="text"
                  placeholder="Destination, City"
                />
                <button className="contact-us-search-button">Search</button>
              </form>
            </div>
          </div>
        </div>
        {/*The content below the banner image*/}
        <div className="contact-us-info-container">
          <div className="contact-us-info-container-num">
            <div className="contact-us-info-container-num-icon">
              <MessageOutlined style={{fontSize:"2rem", color:"#f1592a"}}/>
            </div>
            <h3>Contact Us</h3>
            <div className="contact-us-info-container-num-tell">
              <p style={{fontSize:"15px", color:"#c0c0c0"}}>Telephone: 03154754912 </p>
            </div>
            <div className="contact-us-info-container-num-mob">
              <p style={{fontSize:"15px", color:"#c0c0c0"}}>Mobile: 03091419513</p>
            </div>
            <div className="contact-us-info-container-num-mail">
              <p style={{color:"#f1592a"}}>hello@globeramblers.com</p>
            </div>
            {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, vitae? */}
          </div>
          <div className="contact-us-info-container-location">
            {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, ipsam. */}
            <div className="contact-us-info-container-location-icon">
                <EnvironmentOutlined style={{fontSize:"2rem", color:"#f1592a"}}/>
            </div>
            <h3>Visit Our Location</h3>
            <div className="contact-us-info-container-location-tell">
              <p style={{fontSize:"15px", color:"#c0c0c0"}}>Manhatta Hall Ve erpolder 7 2361 Empor</p>
              <p style={{fontSize:"15px", color:"#c0c0c0"}}>Ltd 1258, Melbourne, Australia</p>
            </div>
            <div className="contact-us-info-container-location-mob">
              <p style={{color:"#f1592a"}}>Get Directions</p>
            </div>
          </div>
          <div className="contact-us-info-container-email">
            <div className="contact-us-info-container-email-icon">
                <GlobalOutlined style={{fontSize:"2rem" ,color:"#f1592a"}}/>
            </div>
            <h3>Looking for a Tour?</h3>
            <div className="contact-us-info-container-email-tell">
              <p style={{fontSize:"15px", color:"#c0c0c0"}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
              <p style={{fontSize:"15px", color:"#c0c0c0"}}>Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="contact-us-info-container-email-mob">
              <p style={{color:"#f1592a"}}>tour@globeramblers.com</p>
            </div>
            {/* Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, laboriosam. */}
          </div>
        </div>
        <div className="contact-us-form-container">
          <img className="contact-us-form-container-image" src="/asset/img/Banner.png" alt="" />
          <div className="contact-us-form-get-in-touch">
            <GetInTouch />
          </div>
        </div>
        {/* Footer Section */}
        {/* <div className="contact-us-footer"> */}
          <Footer />
        {/* </div> */}
        
      </div>
    </>
  );
};

export default ContactUs;
