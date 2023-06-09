import React, {useState} from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import './BuyingDashboard.css'
import CardSection from '../CardSection/CardSection'

export default function BuyingDashboard() {
    const [searchedTerm, setSearchedTerm] = useState('')

    const users = [
        { id: 1, name: 'John Doe', image: 'user1.jpg' },
        { id: 2, name: 'Jane Smith', image: 'user2.jpg' },
        { id: 3, name: 'Mike Johnson', image: 'user3.jpg' },
        // Add more users here
      ];
      
  return (
    <>
<div className="Aboutus-main-container tour-buy">
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
