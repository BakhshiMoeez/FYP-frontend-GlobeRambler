import { useEffect, useState } from 'react'
import './SellerProfile.css';
import Cookies from 'js-cookie';
import Navbar from "../../Navbar/Navbar";
import Footer from "../../Footer/Footer";
import CardSection from "../../CardSection/CardSection";
import axios from 'axios';

export default function SellerProfile() {
  const sellerEmail = Cookies.get('sellerEmail');

  const [sellerInfo, setSellerInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    profilePic: '',
    address: '',
    phone: '',
    creditCard: '',
    companyName: '',
    companyLocation: '',
    companyDescription: ''
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/seller/`, { email: sellerEmail });
        console.log(response.data); // handle the success response
        setSellerInfo(response.data);
      } catch (error) {
        console.log(error); // handle the error response
      }
    };
  
    fetchData();
  }, [sellerEmail]);

  return (
    <div className="Aboutus-main-container profile-info">
        {/*banner image*/}
        <img className="Aboutus-banner-image" src="/asset/profile-pages/seller-bg.png" alt="banner" />
        {/*container to manage the width like container in bootstrap*/}
        <div className="aboutus-inside-container">
          {/*The content absolut on banner image*/}
          <Navbar />
          <div className="profile-info-container">
            <div className="profile-info-wrapper">
              <div className="profile-info-img-wrapper">
                <img src={sellerInfo.profilePic} alt="" className="profile-info-image" />
              </div>
              <div className="profile-info-details">
                <h3 className="profile-info-name">{`${sellerInfo.firstName} ${sellerInfo.lastName}`}</h3>
                <h6 className="profile-info-location">{sellerInfo.address}</h6>
                <div className="profile-info-email-phone-div">
                  <a className="profile-info-email" href="mailto:ans@gmail.com"><span><img src="/asset/profile-pages/email-icon.png" alt="" /></span>{sellerInfo.email}</a>
                  <a className="profile-info-phone" href="tel:+923034098015"><span><img src="/asset/profile-pages/phone-icon.png" alt="" /></span>{sellerInfo.phone}</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Card Section */}
        <CardSection />

        {/* Customer Reviews Section */}
        
        {/* Footer Section */}
        <Footer />

    </div>
  )
}
