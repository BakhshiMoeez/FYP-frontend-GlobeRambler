import React from 'react';
import './BuyerSignUp.css';
import $ from 'jquery';
import "jquery-ui-dist/jquery-ui";
import { useEffect } from 'react';

export default function BuyerSignUp() {

    useEffect(() => {
        // Add the following code if you want the name of the file appear on select
        $(".custom-file-input").on("change", function() {
            var fileName = $(this).val().split("\\").pop();
            $(this).siblings(".custom-file-label").addClass("selected").html(fileName);
        });
    },[])

  return (

    <div className="container-fluid main-page login-signup">
        <div className="row main-page">
            <div className="col-12 col-lg-6 main-page">
                <div className="main-page-image-section">
                    <img src="/asset/signup-login-pages/main-logo.svg" alt="" className="main-page-main-logo"/>
                    <img src="/asset/signup-login-pages/sign-up-in.png" alt="" className="main-page-main-bg"/>
                </div>
            </div>
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

                    <form className='login-signup-form'>
                      <div className="row">
                          <div className="col-6">
                              <div className="form-field">
                                  <label htmlFor="fname">First Name</label>
                                  <input type="text" required="required" id="fname" name="fname" />
                              </div>
                          </div>
                      
                          <div className="col-6">
                              <div className="form-field">
                                  <label htmlFor="lname">Last Name</label>
                                  <input type="text" required="required" id="lname" name="lname" />
                              </div>
                          </div>
                        </div>
                        <div className="form-field login-signup">
                            <label htmlFor="email">Email</label>
                            <input type="email" required="required" id="email" name="email" />
                        </div>
                        <div className="form-field login-signup">
                            <label htmlFor="password">Password</label>
                            <input type="password" required="required" id="password" name="password" />
                        </div>
                        <div className="custom-file login-signup">
                            <input type="file" required="required" className="custom-file-input" id="customFile" />
                            <label className="custom-file-label" htmlFor="customFile">Choose file</label>
                        </div>
                        <div className="form-field login-signup checkbox">
                            <input type="checkbox" required="required" id="privacy-policy" name="privacy-policy" value="Bike" />
                            <label htmlFor="privacy-policy"> Privacy Policy</label><br />
                        </div>

                        <button className="login-signup-continue-btn submit" type="submit">Sign Up</button>
                        <p className="login-signup-already-member">Already a member? <a href="/buyerLogin">Sign In</a></p>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}
