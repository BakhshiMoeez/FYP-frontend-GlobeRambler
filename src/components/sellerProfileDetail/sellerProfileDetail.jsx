import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import './sellerProfileDetails.css'

export default function SellerProfileDetail() 
{
    const { email } = useParams();

    const [seller, setSeller] = useState({
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
        
        const getSellerDetails = async () => {
            try{
                
                const sellerRes = await axios.post(`${process.env.REACT_APP_API_URL}/api/seller/`, {email: email});
                setSeller(sellerRes.data);

            }catch (error) {
                console.log(error);
            }
        }
        
        getSellerDetails();
    }, [])

    return (
        <>
            <div className="seller-detail-main-container">
              <img className='seller-detail-main-container-image' src="/asset/img/banner.png" alt="" />
              <div className="seller-detail-main-container-cover-up-div"></div>
            </div>
            <div className="seller-detail-main-container-cover-up-div-content">
                  
                  <div className="seller-detail-seller-profileImg">
                    <img className='seller-detail-seller-profileImg-inside' src={seller.profilePic} alt="Profile" />
                  </div>

                  <div className="seller-detail-seller-info">
                    <div className="seller-detail-fullName">
                      <h2 style={{fontWeight: 'bolder', color: 'white'}}>{`${seller.firstName} ${seller.lastName}`}</h2>
                    </div>
                    <div className="seller-detail-info-lower-div">
                      <div className="seller-detail-info-lower-div-left">
                        <div className="seller-detail-info-lower-div-left-element">
                          <span className="seller-detail-info-label">Email: </span>
                          <span className="seller-detail-info-value">{seller.email}</span>
                        </div>
                        <div className="seller-detail-info-lower-div-left-element">
                          <span className="seller-detail-info-label">Phone No.: </span>
                          <span className="seller-detail-info-value">{seller.phone}</span>
                        </div>
                        <div className="seller-detail-info-lower-div-left-element">
                          <span className="seller-detail-info-label">Address: </span>
                          <span className="seller-detail-info-value">{seller.address}</span>
                        </div>
                      </div>
                      <div className="seller-detail-info-lower-right">
                        <div className="seller-detail-info-lower-div-left-element">
                          <span className="seller-detail-info-label">Company Name: </span>
                          <span className="seller-detail-info-value">{seller.companyName}</span>
                        </div>
                        <div className="seller-detail-info-lower-div-left-element">
                          <span className="seller-detail-info-label">Company Description: </span>
                          <span className="seller-detail-info-value">{seller.companyDescription}</span>
                        </div>
                        <div className="seller-detail-info-lower-div-left-element">
                          <span className="seller-detail-info-label">Company Location: </span>
                          <span className="seller-detail-info-value">{seller.companyLocation}</span>
                        </div>
                      </div>
                    </div>
                  </div>
            </div>
        </>
    )
}

{/* 

https://i.pinimg.com/originals/38/54/6a/38546a9362aac7257e733f84bfd8d453.jpg

https://wallpapercave.com/wp/wp2599603.jpg

<div className="seller-detail-container">
      <div className="seller-detail-header">
        <h1>Profile</h1>
      </div>
      <div className="seller-detail-content">
        <div className="seller-detail-picture">
          <img src={seller.profilePic} alt="Profile" />
        </div>
        <div className="seller-detail-details">
          <h2>{`${seller.firstName} ${seller.lastName}`}</h2>
          <div className="seller-detail-info">
            <div className="seller-detail-info-row">
              <span className="seller-detail-info-label">Email:</span>
              <span className="seller-detail-info-value">{seller.email}</span>
            </div>
            <div className="seller-detail-info-row">
              <span className="seller-detail-info-label">Address:</span>
              <span className="seller-detail-info-value">{seller.address}</span>
            </div>
            <div className="seller-detail-info-row">
              <span className="seller-detail-info-label">Phone:</span>
              <span className="seller-detail-info-value">{seller.phone}</span>
            </div>
            <div className="seller-detail-info-row">
              <span className="seller-detail-info-label">Credit Card:</span>
              <span className="seller-detail-info-value">{seller.creditCard}</span>
            </div>
            <div className="seller-detail-info-row">
              <span className="seller-detail-info-label">Company Name:</span>
              <span className="seller-detail-info-value">{seller.companyName}</span>
            </div>
            <div className="seller-detail-info-row">
              <span className="seller-detail-info-label">Company Location:</span>
              <span className="seller-detail-info-value">{seller.companyLocation}</span>
            </div>
            <div className="seller-detail-info-row">
              <span className="seller-detail-info-label">Company Description:</span>
              <span className="seller-detail-info-value">{seller.companyDescription}</span>
            </div>
          </div>
        </div>
      </div>
    </div> */}