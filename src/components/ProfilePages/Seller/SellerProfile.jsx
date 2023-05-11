import { useEffect, useState } from 'react'
import './SellerProfile.css';
import Cookies from 'js-cookie';
import Navbar from "../../Navbar/Navbar";
import Footer from "../../Footer/Footer";
import CardSection from "../../CardSection/CardSection";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function SellerProfile() {
  const sellerEmail = Cookies.get('sellerEmail');
  const [updateProfile, setUpdateProfile] = useState(false);
  const Navigate = useNavigate();

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

      const profilePicPath = await axios.put(`${process.env.REACT_APP_API_URL}/api/seller/`, {email: sellerEmail, profilePic: response.data.secure_url} );
      console.log(profilePicPath.data);
      setSellerInfo((prevSellerInfo) => {
        return { ...prevSellerInfo, profilePic: profilePicPath.data };
      });
      window.location.reload();
    } catch (error) {
      console.error('Error uploading image to Cloudinary:', error);
    }
  };

  function navigateToPostTour(){
    Cookies.set('sellerProfilePic', sellerInfo.profilePic);
    Navigate('/postTour');
  };

  if(updateProfile) { return <UpdateSellerProfile 
    setUpdatedProfile={setUpdateProfile} 
    sellerInfo = {sellerInfo}
  />} 

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
              {/* <div className="profile-info-img-wrapper">
                <img src={sellerInfo.profilePic} alt="" className="profile-info-image" />
              </div> */}
              <div className="profile-info-img-wrapper">           
                <img src={sellerInfo.profilePic} alt="Profile Picture" className="profile-info-image" />
                <label>
                <img src="/asset/profile-pages/upload.png" alt="" className="buyer-profile-camera-icon" />
                  <input type="file" className="profile-info-image-input" onChange={updateProfilePic} />
                </label>
              </div>
              <div className="profile-info-details">
                <h3 className="profile-info-name">{`${sellerInfo.firstName} ${sellerInfo.lastName}`}</h3>
                <h6 className="profile-info-location">{sellerInfo.address}</h6>
                <div className="profile-info-email-phone-div">
                  <a className="profile-info-email" href="mailto:ans@gmail.com"><span><img src="/asset/profile-pages/email-icon.png" alt="" /></span>{sellerInfo.email}</a>
                  <a className="profile-info-phone" href="tel:+923034098015"><span><img src="/asset/profile-pages/phone-icon.png" alt="" /></span>{sellerInfo.phone}</a>
                  <button className='btn btn-primary' onClick={navigateToPostTour}>Post Tour</button>
                  <button className='btn btn-primary' onClick={() => {setUpdateProfile(true)}}>Update Profile</button>
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

function UpdateSellerProfile({ setUpdatedProfile, sellerInfo }) {
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
    overflow: 'scroll',
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

  const sellerEmail = Cookies.get('sellerEmail');

  const [updatedSellerProfileInfo, setUpdatedSellerProfileInfo] = useState({
    firstName: sellerInfo.firstName,
    lastName: sellerInfo.lastName,
    phone: sellerInfo.phone,
    email: sellerEmail,
    address: sellerInfo.address,
    companyName: sellerInfo.companyName,
    companyLocation: sellerInfo.companyLocation,
    companyDescription: sellerInfo.companyDescription,
  });

  function buyerProfileUpdateFunc(){
    try{
      const sellerProfileUpdate = axios.patch(`${process.env.REACT_APP_API_URL}/api/seller/`, updatedSellerProfileInfo );
      console.log(sellerProfileUpdate.data);
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
      <h3 style={{marginTop: '220px'}}>Seller Profile Update Form</h3>
      <label style={labelStyles} htmlFor="first-name" >
        First Name
      </label>
      <input
        style={inputStyles}
        type="text"
        id="first-name"
        name="first-name"
        value={updatedSellerProfileInfo.firstName}
        onChange={(e)=>{setUpdatedSellerProfileInfo({...updatedSellerProfileInfo, firstName: e.target.value})}}
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
        value={updatedSellerProfileInfo.lastName}
        onChange={(e)=>{setUpdatedSellerProfileInfo({...updatedSellerProfileInfo, lastName: e.target.value})}}
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
        value={updatedSellerProfileInfo.address}
        onChange={(e) => {setUpdatedSellerProfileInfo({...updatedSellerProfileInfo, address: e.target.value})}}
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
        value={updatedSellerProfileInfo.phone}
        onChange={(e)=>{setUpdatedSellerProfileInfo({...updatedSellerProfileInfo, phone: e.target.value})}}
        required
      />
      <label style={labelStyles} htmlFor="phone">
        Company Name
      </label>
      <input
        style={inputStyles}
        type="text"
        id="phone"
        name="phone"
        value={updatedSellerProfileInfo.companyName}
        onChange={(e)=>{setUpdatedSellerProfileInfo({...updatedSellerProfileInfo, companyName: e.target.value})}}
        required
      />
      <label style={labelStyles} htmlFor="phone">
        Company Location
      </label>
      <input
        style={inputStyles}
        type="text"
        id="phone"
        name="phone"
        value={updatedSellerProfileInfo.companyLocation}
        onChange={(e)=>{setUpdatedSellerProfileInfo({...updatedSellerProfileInfo, companyLocation: e.target.value})}}
        required
      />
      <label style={labelStyles} htmlFor="phone">
        Company Description
      </label>
      <input
        style={inputStyles}
        type="text"
        id="phone"
        name="phone"
        value={updatedSellerProfileInfo.companyDescription}
        onChange={(e)=>{setUpdatedSellerProfileInfo({...updatedSellerProfileInfo, companyDescription: e.target.value})}}
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
