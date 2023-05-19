import {React, useRef, useState} from "react";
import './GetInTouch.css';
import emailjs from '@emailjs/browser';

const GetInTouch = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [interest, setInterest] = useState("");
  const [numPersons, setNumPersons] = useState("");
  
  const form = useRef();

  const sendEmail = (event) => {
    event.preventDefault();

    emailjs.sendForm('service_8nbxk6b','template_1zk9w6f',form.current, 'wn4BjCmUFjM-YD3jX')
    .then((result)=>{
      console.log(result.text);
    }, (error)=>{
      console.log(error.text);
    });
    // TODO: Handle form submission, e.g. send data to backend API
  };
  return (
    <div>
      <form ref={form} className="get-in-touch-form-main-container" onSubmit={sendEmail}>
        <h2><b>Get In Touch With Us</b></h2>
        <p style={{color:"#f1592a", marginBottom:"2rem"}}>Write your details below we will reach you out soon.</p>
        <div className="get-in-touch-form-input">
        <label style={{margin:"5px"}}>
          Full Name
        </label > 
        <input className="get-in-touch-input-field"
            name="from_name"
            type="text"
            value={fullName}
            onChange={(event) => setFullName(event.target.value)}
        />
        </div>
        <div className="get-in-touch-form-input">
        <label style={{margin:"5px"}}>
          Email Address
        </label > 
        <input className="get-in-touch-input-field"
            name="from_email"
            type="text"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
        />
        </div>
        <div className="get-in-touch-form-input">
        <label style={{margin:"5px"}}>
          Phone Number
        </label > 
        <input className="get-in-touch-input-field"
            name="from_phone"
            type="text"
            value={phoneNumber}
            onChange={(event) => setPhoneNumber(event.target.value)}
        />
        </div>
        <div className="get-in-touch-form-input">
        <label style={{margin:"5px"}}>
          Interested In
        </label > 
        <input className="get-in-touch-input-field"
            name="from_interest"
            type="text"
            value={interest}
            onChange={(event) => setInterest(event.target.value)}
        />
        </div>
        <div className="get-in-touch-form-input">
        <label style={{margin:"5px"}}>
          Message
        </label > 
        <input className="get-in-touch-input-field"
            type="text"
            name="message"
            value={numPersons}
            onChange={(event) => setNumPersons(event.target.value)}
        />
        </div>
        <button style={{margin:"5px",width:"7rem", borderRadius:"10px", backgroundColor:"#f1592a", color:"white", marginBottom:"2rem", padding:"0.7rem"}} type="submit">Submit</button>
      </form>
    </div>
  );
};

export default GetInTouch;
