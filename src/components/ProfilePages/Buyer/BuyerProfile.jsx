import React from 'react';
import './BuyerProfile.css';
import Cookies from 'js-cookie';
import Navbar from "../../Navbar/Navbar";
import Footer from "../../Footer/Footer";
import CardSection from "../../CardSection/CardSection";
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function BuyerProfile() {
  const buyerEmail = Cookies.get('buyerEmail');
  const [buyerInfo, setBuyerInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    profilePic: '',
  });
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/buyer/`, { email: buyerEmail });
        console.log(response.data); // handle the success response
        setBuyerInfo(response.data);
      } catch (error) {
        console.log(error); // handle the error response
      }
    };
  
    fetchData();
  }, [buyerEmail]);
  

  return (
    <div className="Aboutus-main-container profile-info">
        {/*banner image*/}
        <img className="Aboutus-banner-image" src="/asset/profile-pages/buyer-bg.png" alt="banner" />
        {/*container to manage the width like container in bootstrap*/}
        <div className="aboutus-inside-container">
          {/*The content absolut on banner image*/}
          <Navbar />
          <div className="profile-info-container">
            <div className="profile-info-wrapper">
              <div className="profile-info-img-wrapper">
                {/* <img src="/asset/profile-pages/buyer.png" alt="" className="profile-info-image" /> */}
                <img src={buyerInfo.profilePic} alt="" className="profile-info-image" />
              </div>
              <div className="profile-info-details">
                <h3 className="profile-info-name">{`${buyerInfo.firstName} ${buyerInfo.lastName}`}</h3>
                <h6 className="profile-info-location">Lahore, Pakistan</h6>
                <div className="profile-info-email-phone-div">
                  <a className="profile-info-email" href="mailto:ans@gmail.com"><span><img src="/asset/profile-pages/email-icon.png" alt="" /></span>{buyerInfo.email}</a>
                  <a className="profile-info-phone" href="tel:+923034098015"><span><img src="/asset/profile-pages/phone-icon.png" alt="" /></span>+92 302 4098015</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Card Section */}
        <CardSection />

        
        {/* Footer Section */}
        <Footer />

    </div>
  )
}
