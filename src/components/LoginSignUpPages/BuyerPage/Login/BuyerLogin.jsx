import { useState } from 'react';
import axios from 'axios';
import './BuyerLogin.css';

export default function BuyerLogin() {
    const [email, setEmail] = useState('abc@gmail.com');
    const [password, setPassword] = useState('abc');

    function buyerEmailHandler(e) {
        setEmail(e.target.value);
    };
    
    function buyerPasswordHandler(e) {
        setPassword(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(email, password);
        const response = await axios.post('http://localhost:3500/api/buyer/login', {email, password});
        console.log(response.data);
    };

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
                    <li><a href="/">Home</a></li>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Contact Us</a></li>
                </ul>

                <div className="login-signup-form-signing">
                    <p className="login-signup-info-text">Sign in to Globe Ramblers</p>
                    <button className="login-signup-continue-btn"><span><i className='fab fa-google'></i></span>Sign up with google</button>
                    <div className="login-signup-or-div">
                        <hr className="login-signup-hr-1" />
                        <p>OR</p>
                        <hr className="login-signup-hr-1" />
                    </div>

                    <form className='login-signup-form' onSubmit={handleSubmit}>
                        <div className="form-field login-signup">
                            <label htmlFor="email">Username or Email Address</label>
                            <input type="email" required="required" id="email" name="email" onChange={buyerEmailHandler}/>
                        </div>
                        <div className="form-field login-signup">
                            <label htmlFor="password">Password</label>
                            <input type="password" required="required" id="password" name="password" onChange={buyerPasswordHandler}/>
                        </div>
                        <button className="login-signup-continue-btn submit" type="submit">Sign In</button>
                        <p className="login-signup-already-member">Not have an account? <a href="/buyerSignUp">Sign up</a></p>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}
