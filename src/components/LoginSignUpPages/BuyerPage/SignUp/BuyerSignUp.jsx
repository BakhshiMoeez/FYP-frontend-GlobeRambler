import { useState } from 'react';
import './BuyerSignUp.css';
import $ from 'jquery';
import "jquery-ui-dist/jquery-ui";
import { useEffect } from 'react';
import { Popover } from 'antd';
import axios from 'axios';
import { Modal } from 'antd';
import { useNavigate } from 'react-router-dom';

export default function BuyerSignUp() {
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [profilePic, setProfilePic] = useState('');
    const navigate = useNavigate();

    function handleEmail(e){
        setEmail(e.target.value);
    };

    function handlePassword(e){
        setPassword(e.target.value);
    };

    function handleFname(e){
        setFname(e.target.value);
    };

    function handleLname(e){
        setLname(e.target.value);
    };

    function handleImage(e){
        setProfilePic(e.target.files[0]);
    };
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

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('email', email);
        formData.append('password', password);
        formData.append('fname', fname);
        formData.append('lname', lname);
        formData.append('profilePic', profilePic);
        
        // console.log(...formData.values());

        const respose = await axios.post(`${process.env.REACT_APP_API_URL}/api/buyer/signup`, formData,{
            headers: {
              'Content-Type': 'multipart/form-data'
            }
        });
        if(respose.data.message === "email already exists"){
            showModal();
        }
        else{
            alert('Sign Up Successful');
            navigate('/buyerLogin');
        }
    };

    useEffect(() => {
        // Add the following code if you want the name of the file appear on select
        $(".custom-file-input").on("change", function() {
            var fileName = $(this).val().split("\\").pop();
            $(this).siblings(".custom-file-label").addClass("selected").html(fileName);
        });
    },[])

  return (
<>
<Modal title="Email Already Registered" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}></Modal>
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

                    <form className='login-signup-form' onSubmit={handleSubmit}>
                      <div className="row">
                          <div className="col-6">
                              <div className="form-field">
                                  <label htmlFor="fname">First Name</label>
                                  <input type="text" required="required" id="fname" name="fname" onChange={handleFname}/>
                              </div>
                          </div>
                      
                          <div className="col-6">
                              <div className="form-field">
                                  <label htmlFor="lname">Last Name</label>
                                  <input type="text" required="required" id="lname" name="lname" onChange={handleLname} />
                              </div>
                          </div>
                        </div>
                        <div className="form-field login-signup">
                            <label htmlFor="email">Email</label>
                            <input type="email" required="required" id="email" name="email" onChange={handleEmail}/>
                        </div>
                        <div className="form-field login-signup">
                            <label htmlFor="password">Password</label>
                            <input type="password" required="required" id="password" name="password" onChange={handlePassword}/>
                        </div>
                        <div className="custom-file login-signup">
                            <Popover title="Size of Image should be less than 10MB">
                                <input type="file" required="required" className="custom-file-input" id="customFile" onChange={handleImage} />
                            </Popover>
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
</>
  )
}
