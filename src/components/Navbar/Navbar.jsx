import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import { useSelector } from 'react-redux';

export default function Navbar() {
    const profilePath = useSelector(state => state.auth.profilePath);
  return (
    <>
    <div className="Navbar-main-container">
        <div className="navbar-inside-container">
            <div className="navbar-logo">
                <img src="/asset/logo/logo.png" alt="logo" className='navbar-logo' />
            </div>
            <div className="navbar-elements">
                <ul className='navbar-ul'>
                    <li className='navbar-li'>Home</li>
                    <li className='navbar-li'><NavLink className="navlink" to='/buyingDashboard'>Tour</NavLink></li>
                    <li className='navbar-li'><NavLink className="navlink" to='/aboutus'>About us</NavLink></li>
                    <li className='navbar-li'>Contact us</li>
                    <li className='navbar-li'><NavLink className="navlink" to={profilePath}>Profile</NavLink></li>
                </ul>
            </div>
        </div>
    </div>
    </>
  )
}
