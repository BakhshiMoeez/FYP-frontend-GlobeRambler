import React from 'react';
import './BuyerProfile.css';
import Cookies from 'js-cookie';
import Navbar from "../../Navbar/Navbar";
import Footer from "../../Footer/Footer";
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function BuyerProfile() {

  const buyerEmail = Cookies.get('buyerEmail');
  const [updateProfile, setUpdateProfile] = useState(false);
  const [notifications, setNotifications] = useState([{_id : '', title: '', desc: ''}]);
  
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

    const getNotifcations = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/notification/`);
        console.log(response.data); // handle the success response
        setNotifications(response.data);
      } catch (error) {
        console.log(error); // handle the error response
      }
    };
  
    fetchData();
    getNotifcations();

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
  
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/');
  } 

  if(updateProfile) { return <UpdateBuyerProfile 
      setUpdatedProfile={setUpdateProfile} 
      buyerInfo = {buyerInfo}
    />} 

  return (

    <>
      <div className="Aboutus-main-container profile-info buyer">
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
                  <button className='btn btn-primary' onClick={() => {setUpdateProfile(true)}}>Update Profile</button>
                </div>
                <ul className="notification-drop">
                  <li className="item">
                    <i className="fas fa-bell notification-bell" aria-hidden="true"></i> <span className="btn__badge pulse-button "><span style={{opacity: 0}}>4</span></span>     
                    <ul>
                    {notifications.slice().reverse().map(notification => (
                          <li key={notification._id}> 
                            <span>
                              <img src="https://cdn1.vectorstock.com/i/1000x1000/29/70/admin-text-rubber-stamp-vector-11362970.jpg" alt=""/>
                            </span> 
                            <p><a href={`/notifications/${notification._id}`}>{notification.title}</a></p> </li>
                        ))}
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* Card Section */}
        {/* <CardSection /> */}
        <div className="buyerProfile-logout-button">
          {/* <button className='btn btn-warning' id='logout-btn-buyer' onClick={handleLogout}>Logout</button> */}
        </div>
        {/* Footer Section */}
        <Footer />

    </div>
    </>

    
  )
}

function UpdateBuyerProfile({ setUpdatedProfile, buyerInfo }) {
  const formStyles = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "400px",
    height: "600px",
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    borderRadius: "20px",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
    backdropFilter: "blur(10px)",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    // alignItems: "center",
  };

  const labelStyles = {
    marginBottom: "10px",
    fontWeight: "bold",
  };

  const inputStyles = {
    marginBottom: "20px",
    padding: "10px",
    border: "none",
    borderRadius: "5px",
    width: "100%",
    fontSize: "16px",
  };

  const buttonStyles = {
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    fontSize: "16px",
    fontWeight: "bold",
    cursor: "pointer",
    marginRight: "10px",
  };

  const submitButtonStyles = {
    backgroundColor: "#f1592a",
    color: "#ffffff",
  };

  const closeButtonStyles = {
    backgroundColor: "#ffffff",
    color: "#f1592a",
  };

  const buyerEmail = Cookies.get('buyerEmail');

  const [updatedBuyerProfileInfo, setUpdatedBuyerProfileInfo] = useState({
    firstName: buyerInfo.firstName,
    lastName: buyerInfo.lastName,
    phone: buyerInfo.phone,
    email: buyerEmail,
    address: buyerInfo.address,
  });

  function buyerProfileUpdateFunc(){
    try{
      const buyerProfileUpdate = axios.patch(`${process.env.REACT_APP_API_URL}/api/buyer/`, updatedBuyerProfileInfo );
      console.log('updatedBuyerProfile', buyerProfileUpdate.data);
      setUpdatedProfile(false);
      window.location.reload();
    }
    catch (err) {
      console.log(err);
    }
  }

  return (
    <>
    
    <div style={formStyles}>
      <h3>Buyer Profile Update Form</h3>
      <label style={labelStyles} htmlFor="first-name" >
        First Name
      </label>
      <input
        style={inputStyles}
        type="text"
        id="first-name"
        name="first-name"
        value={updatedBuyerProfileInfo.firstName}
        onChange={(e)=>{setUpdatedBuyerProfileInfo({...updatedBuyerProfileInfo, firstName: e.target.value})}}
        required
      />
      <label style={labelStyles} htmlFor="last-name">
        Last Name
      </label>
      <input
        style={inputStyles}
        type="text"
        id="last-name"
        name="last-name"
        value={updatedBuyerProfileInfo.lastName}
        onChange={(e)=>{setUpdatedBuyerProfileInfo({...updatedBuyerProfileInfo, lastName: e.target.value})}}
        required
      />
      <label style={labelStyles} htmlFor="address">
        Address
      </label>
      <input
        style={inputStyles}
        type="text"
        id="address"
        name="address"
        value={updatedBuyerProfileInfo.address}
        onChange={(e) => {setUpdatedBuyerProfileInfo({...updatedBuyerProfileInfo, address: e.target.value})}}
        required
      />
      <label style={labelStyles} htmlFor="phone">
        Phone number
      </label>
      <input
        style={inputStyles}
        type="text"
        id="phone"
        name="phone"
        value={updatedBuyerProfileInfo.phone}
        onChange={(e)=>{setUpdatedBuyerProfileInfo({...updatedBuyerProfileInfo, phone: e.target.value})}}
        required
      />
      <div>
        <button onClick={buyerProfileUpdateFunc} style={{ ...buttonStyles, ...submitButtonStyles }} className="submit">
          Submit
        </button>
        <button onClick={() => {setUpdatedProfile(false)}} style={{ ...buttonStyles, ...closeButtonStyles }} className="close">
          Close
        </button>
      </div>
    </div>
    </>
  )
}

