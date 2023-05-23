import React, {useState} from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import './BuyingDashboard.css'
import CardSection from '../CardSection/CardSection'

export default function BuyingDashboard() {
    const [searchedTerm, setSearchedTerm] = useState('')
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
                    {/* <p>Tips, experiences, and places. All in one place</p> */}
                </div>
            </div>
        </div>
        <CardSection searchedTerm={searchedTerm} />
        {/* Footer Section */}
        <Footer />

    </div>
    </>
  )
}
