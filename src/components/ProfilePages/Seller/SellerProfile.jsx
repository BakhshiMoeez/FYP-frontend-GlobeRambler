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
                  <img src="/asset/profile-pages/upload.png" className='buyer-profile-camera-icon' alt="upload-icon" />
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
