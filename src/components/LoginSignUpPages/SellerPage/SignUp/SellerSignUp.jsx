import { useState } from 'react';
import './SellerSignUp.css';
import $ from 'jquery';
import "jquery-ui-dist/jquery-ui";
import { useEffect } from 'react';
import {Popover} from 'antd';
import axios from 'axios';

export default function SellerLogin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [profilePic, setProfilePic] = useState('');
    const [creditCardNumber, setCreditCardNumber] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [companyLocation, setCompanyLocation] = useState('');
    const [companayDescription, setCompanyDescription] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('email', email);
        formData.append('password', password);
        formData.append('fname', fname);
        formData.append('lname', lname);
        formData.append('profilePic', profilePic);
        formData.append('creditCardNumber', creditCardNumber);
        formData.append('phone', phone);
        formData.append('address', address);
        formData.append('companyName', companyName);
        formData.append('companyLocation', companyLocation);
        formData.append('companayDescription', companayDescription);

        console.log(...formData.values());
        const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/seller/signup`, formData, {
            headers: {  
                'Content-Type': 'multipart/form-data'
            }
        });
        console.log(response.data);
    };

    useEffect(() => {
        // Add the following code if you want the name of the file appear on select
        $(".custom-file-input").on("change", function() {
            var fileName = $(this).val().split("\\").pop();
            $(this).siblings(".custom-file-label").addClass("selected").html(fileName);
        });
    },[])

  return (
    <div className="container-fluid main-page login-signup">
        <div className="row main-page seller">
            <div className="col-12 col-lg-6">
                <ul className='main-page-ul'>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Contact Us</a></li>
                </ul>

                <div className="login-signup-form-signing">
                    <p className="login-signup-info-text">Sign up to Globe Ramblers</p>
                    <button className="login-signup-continue-btn"><span><i className='fab fa-google'></i></span>Sign up with google</button>
                    <div className="login-signup-or-div">
                        <hr className="login-signup-hr-1" />
                        <p>OR</p>
                        <hr className="login-signup-hr-1" />
                    </div>

                    <form className='login-signup-form' onSubmit={handleSubmit}>
                      <div className="row">
                          <div className="col-6">
                              <div className="form-field">
                                  <label htmlFor="fname">First Name</label>
                                  <input onChange={(e) => setFname(e.target.value)} type="text" required="required" id="fname" name="fname" />
                              </div>
                          </div>
                      
                          <div className="col-6">
                              <div className="form-field">
                                  <label htmlFor="lname">Last Name</label>
                                  <input onChange={(e) => setLname(e.target.value)} type="text" required="required" id="lname" name="lname" />
                              </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-6">
                            <div className="form-field login-signup">
                                <label htmlFor="email">Email</label>
                                <input onChange={(e) => setEmail(e.target.value)} type="email" required="required" id="email" name="email" />
                            </div>
                          </div>
                      
                          <div className="col-6">
                            <div className="form-field login-signup">
                                  <label htmlFor="credit-card-number">Credit Card Number</label>
                                  <input onChange={(e) => setCreditCardNumber(e.target.value)} type="text" required="required" id="credit-card-number" name="credit-card-number" />
                              </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-6">
                            <div className="form-field login-signup">
                                <label htmlFor="phone">Phone No.</label>
                                <input onChange={(e) => setPhone(e.target.value)} type="text" required="required" id="phone" name="phone" />
                            </div>
                          </div>
                      
                          <div className="col-6">
                            <div className="form-field login-signup">
                                  <label htmlFor="address">Address</label>
                                  <input onChange={(e) => setAddress(e.target.value)} type="text" required="required" id="address" name="address" />
                              </div>
                          </div>
                        </div>
                        <div className="form-field login-signup">
                            <label htmlFor="password">Password</label>
                            <input onChange={(e) => setPassword(e.target.value)} type="password" required="required" id="password" name="password" />
                        </div>
                        <div className="row">
                          <div className="col-6">
                              <div className="form-field login-signup">
                                  <label htmlFor="company-name">Company Name</label>
                                  <input onChange={(e) => setCompanyName(e.target.value)} type="text" required="required" id="company-name" name="company-name" />
                              </div>
                          </div>
                      
                          <div className="col-6">
                            <div className="form-field login-signup">
                                  <label htmlFor="company-location">Company Location</label>
                                  <input onChange={(e) => setCompanyLocation(e.target.value)} type="text" required="required" id="company-location" name="company-location" />
                              </div>
                          </div>
                        </div>
                        <div className="form-field">
                                <label htmlFor="company-description">Company Description</label>
                                <input onChange={(e) => setCompanyDescription(e.target.value)} type="text" required="required" id="company-description" name="company-description" />
                            </div>
                        <div className="custom-file login-signup">
                            <Popover title="Size of Image should be less than 10MB">
                                <input onChange={(e) => setProfilePic(e.target.files[0])} type="file" required="required" className="custom-file-input" id="customFile" />
                            </Popover>
                            <label className="custom-file-label" htmlFor="customFile">Choose file</label>
                        </div>
                        <div className="form-field login-signup checkbox">
                            <input type="checkbox" required="required" id="privacy-policy" name="privacy-policy" value="Bike" />
                            <label htmlFor="privacy-policy"> Privacy Policy</label><br />
                        </div>

                        <button className="login-signup-continue-btn submit" type="submit">Sign Up</button>
                        <p className="login-signup-already-member">Already a member? <a href="/sellerLogin">Sign In</a></p>
                    </form>
                </div>
            </div>
            <div className="col-12 col-lg-6 main-page">
                <div className="main-page-image-section">
                    <img src="/asset/signup-login-pages/main-logo.svg" alt="" className="main-page-main-logo"/>
                    <img src="/asset/signup-login-pages/sign-up-in.png" alt="" className="main-page-main-bg"/>
                </div>
            </div>
        </div>
    </div>
  )
}
