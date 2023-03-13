import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import './BuyingDashboard.css'
import CardSection from '../CardSection/CardSection'

export default function BuyingDashboard() {
  return (
    <>
<div className="Aboutus-main-container">
        {/*banner image*/}
        <img className="Aboutus-banner-image" src="/asset/img/Banner.png" alt="banner" />
        {/*container to manage the width like container in bootstrap*/}
        <div className="aboutus-inside-container">
            {/*The content absolut on banner image*/}
            <div className="aboutus-inside-container-flex">
                <Navbar />
                <div className="aboutus-banner-text">
                    <p>CHOOSE YOUR TOUR</p>
                </div>
                <div className="aboutus-banner-text-lower">
                    <p>Tips, experiences, and places. All in one place</p>
                </div>
                <div className="aboutus-banner-search">
                    <form className='aboutus-search-form'>
                        <input className='aboutus-form-input' type="text" placeholder='Destination, City'/>
                        <button className='aboutus-search-button'>Search</button>
                    </form>
                </div>
            </div>
        </div>
        <CardSection />
        {/* Footer Section */}
        <Footer />

    </div>
    </>
  )
}
