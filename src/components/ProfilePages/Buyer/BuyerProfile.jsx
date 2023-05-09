import React from 'react';
import './BuyerProfile.css';
import Cookies from 'js-cookie';
import Navbar from "../../Navbar/Navbar";
import Footer from "../../Footer/Footer";
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function BuyerProfile() {

  const buyerEmail = Cookies.get('buyerEmail');

  const [buyerInfo, setBuyerInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    profilePic: '',
    phone: '',
    address: '',
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
  
  async function updateProfilePic(e)
  {
    const formData1 = new FormData();
    formData1.append('file', e.target.files[0]);
    formData1.append('cloud_name', 'dij2y1ngq');
    formData1.append('upload_preset', 'globeRambler');
   
    try {
      const response = await axios.post(`https://api.cloudinary.com/v1_1/dij2y1ngq/image/upload`, formData1, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      const profilePicPath = await axios.put(`${process.env.REACT_APP_API_URL}/api/buyer/`, {email: buyerEmail, profilePic: response.data.secure_url} );
      console.log(profilePicPath.data);
      setBuyerInfo((prevBuyerInfo) => {
        return { ...prevBuyerInfo, profilePic: profilePicPath.data };
      });
      window.location.reload();
    } catch (error) {
      console.error('Error uploading image to Cloudinary:', error);
    }
  }; 

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
                <img src={buyerInfo.profilePic} alt="Profile Picture" className="profile-info-image" key={buyerInfo.profilePic} />
                {/* <img src={buyerInfo.profilePic} alt="" className="profile-info-image" /> */}
                <label>
                  <img src="/asset/profile-pages/upload.png" alt="" className="buyer-profile-camera-icon" />
                  <input type="file" className="profile-info-image-input" onChange={updateProfilePic} />
                </label>
              </div>
              <div className="profile-info-details">
                <h3 className="profile-info-name">{`${buyerInfo.firstName} ${buyerInfo.lastName}`}</h3>
                <h6 className="profile-info-location">{buyerInfo.address}</h6>
                <div className="profile-info-email-phone-div">
                  <a className="profile-info-email" href="mailto:ans@gmail.com"><span><img src="/asset/profile-pages/email-icon.png" alt="" /></span>{buyerInfo.email}</a>
                  <a className="profile-info-phone" href="tel:+923034098015"><span><img src="/asset/profile-pages/phone-icon.png" alt="" /></span>{buyerInfo.phone}</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Card Section */}
        {/* <CardSection /> */}

        {/* Footer Section */}
        <Footer />

    </div>
  )
}
