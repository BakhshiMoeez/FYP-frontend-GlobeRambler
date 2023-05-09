import React from 'react'
import './Footer.css'

export default function Footer() {
  return (
    <>
        <div className="footer-main-container">
            <div className="footer-inner-upper-container">
                <div className="footer-inner-upper-container-flex">
                    <div className="footer-upper-inner-left-side">
                        <b>Our Awards</b>
                        <p>The list of the awards won by one and only Globe ramblers for providing top notch services in the field of Travel and Tourism</p>
                        <img src="/asset/img/leftfooter.png" alt="img" />
                    </div>
                    <div className="footer-upper-inner-right-side">
                        <b>Contact Info</b>
                        <p>+92 321 12345678</p>
                        <p>Building D tower, Plaza Main Block, Lahore Pakistan</p>
                        <p>MONDAY - FRIDAY ( 09:00 am to 07:00 pm )</p>
                        <img src="/asset/img/rightfooter.png" alt="img" />
                    </div>
                </div>
            </div>
            <div className="footer-inner-lower-container">
                <div className="footer-inner-lower-container-flex">
                    <div className="footer-lower-left-side">
                        <p>Copyrights Globe Ramblers</p>
                    </div>
                    <div className="footer-lower-right-side">
                        <p>Home</p>
                        <p>Tour</p>
                        <p>Contact us</p>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
