import React from 'react';
import Cookies from 'js-cookie';
import './MainLoginPage.css';

Cookies.set('adminLogin', 'false');

export default function MainLoginPage() {
  return (
    <>
    <div className="container-fluid main-page">
        <div className="row main-page">
            <div className="col-12 col-lg-6 main-page">
                <div className="main-page-image-section">
                    <img src="/asset/signup-login-pages/main-logo.svg" alt="" className="main-page-main-logo"/>
                    <img src="/asset/signup-login-pages/welcome-bg.png" alt="" className="main-page-main-bg"/>
                </div>
            </div>
            <div className="col-12 col-lg-6">

                <div className="main-page-main-content">
                    <a href="/SellerLogin"><button className="main-page-continue-btn" >Continue as Seller</button></a>
                    <div className="main-page-or-div">
                        <hr className="main-page-hr-1" />
                        <p>OR</p>
                        <hr className="main-page-hr-1" />
                    </div>
                    <a href="/BuyerLogin"><button className="main-page-continue-btn" >Continue as Buyer</button></a>
                </div>
            </div>
        </div>
    </div>
    </>
    
  )
}
