import { useState, useEffect } from 'react';
import axios from 'axios';
import './AdminLogin.css';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function AdminLogin() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const   handleSubmit = async (e) => {
        e.preventDefault();
        if(username === 'admin' && password === 'admin')
        {
            Cookies.set('adminLogin', 'true');
            navigate('/adminPanel');
        }
        else
        {
            toast.error('Wrong Username or Password', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                });
        }
    };
  return (
    <div className="container-fluid main-page login-signup admin-login">
        <div className="row main-page">
            <div className="col-12 col-lg-6 main-page">
                <div className="main-page-image-section">
                    <img src="/asset/signup-login-pages/main-logo.svg" alt="" className="main-page-main-logo"/>
                    <img src="/asset/signup-login-pages/admin.jpg" alt="" className="main-page-main-bg"/>
                </div>
            </div>
            <div className="col-12 col-lg-6">
                <ul className='main-page-ul'>
                    <li><a href="/">Home</a></li>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Contact Us</a></li>
                </ul>

                <div className="login-signup-form-signing">
                    <p className="login-signup-info-text">Admin Login</p>
                    
                    <form className='login-signup-form' onSubmit={handleSubmit}>
                        <div className="form-field login-signup">
                            <label htmlFor="email">Username or Email Address</label>
                            <input type="text" required="required" id="email" name="email" onChange={(e) => {setUsername(e.target.value)}} />
                        </div>
                        <div className="form-field login-signup">
                            <label htmlFor="password">Password</label>
                            <input type="password" required="required" id="password" name="password" onChange={(e) => {setPassword(e.target.value)}} />
                        </div>
                        <button className="login-signup-continue-btn submit" type="submit">Sign In</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}
