import { useState } from 'react';
import axios from 'axios';
import './SellerLogin.css';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from 'react-redux';
import { setProfilePath } from '../../../../reduxElements/profilePathSlice';
import { LoadingOutlined } from '@ant-design/icons';
import { Button, Modal } from 'antd';
import { Spin } from 'antd';

export default function SellerLogin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const Navigate = useNavigate();
    const dispatch = useDispatch();

    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };

    function sellerEmailHandler(e) {
        setEmail(e.target.value);
    };

    function sellerPasswordHandler(e) {
        setPassword(e.target.value);
    };

    const handleSubmit = async (e) => {  
        e.preventDefault();
        console.log(email, password);
        setIsLoading(true);
        const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/seller/login`, {email, password});
        const status = await axios.get(`${process.env.REACT_APP_API_URL}/api/sellerStatus/${email}`);
        setIsLoading(false);
        if(response.data.message === 'email does not exist'){
            toast.error('Given Email is not Registered');
        }
        else if(response.data.message === 'invalid password'){
            toast.error('Invalid Password');
        }
        else if(status.data.status === "pending")
        {
            toast.warning("Given Seller ID is under Inscpection");
        }
        else if(status.data.status === "rejected")
        {
            toast.warning("Given Seller ID is Rejected You wont be able to continue with us");
            showModal();
        }
        else{
            toast.success('Login Successful');
            Cookies.set('sellerEmail', email);
            dispatch(setProfilePath('/sellerProfile'));
            Cookies.set('profilePath', '/sellerProfile');
            Navigate('/sellerProfile');
        }
    }

    if(isLoading){
        return(
            <div className="loading-animation-main-container">
                <LoadingOutlined
                    style={{
                        fontSize: 48,
                    }}
                    spin
                />
            </div>
        )
    }

  return (
    <div className="container-fluid main-page login-signup">
        <Modal title="Registration Rejected" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <p>We have throughly inspected your Profile according to the data you Provided, We are sorry to tell you that your application has been rejected you cannot continue as a Seller on our Website.</p>
        </Modal>
        <div className="row main-page seller">
            <div className="col-12 col-lg-6">
                {/* <ul className='main-page-ul'>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Contact Us</a></li>
                </ul> */}

                <div className="login-signup-form-signing">
                    <p className="login-signup-info-text">Sign in to Globe Ramblers</p>
                    <button className="login-signup-continue-btn google-hide"><span><i className='fab fa-google'></i></span>Sign up with google</button>
                    <div className="login-signup-or-div google-hide">
                        <hr className="login-signup-hr-1" />
                        <p>OR</p>
                        <hr className="login-signup-hr-1" />
                    </div>

                    <form className='login-signup-form' onSubmit={handleSubmit}>
                        <div className="form-field login-signup">
                            <label htmlFor="email">Username or Email Address</label>
                            <input type="email" required="required" id="email" name="email" onChange={sellerEmailHandler} />
                        </div>
                        <div className="form-field login-signup">
                            <label htmlFor="password">Password</label>
                            <input type="password" required="required" id="password" name="password" onChange={sellerPasswordHandler} />
                        </div>
                        <button className="login-signup-continue-btn submit" type="submit">Sign In</button>
                        <p className="login-signup-already-member">Not have an account? <a href="/sellerSignUp">Sign up</a></p>
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
