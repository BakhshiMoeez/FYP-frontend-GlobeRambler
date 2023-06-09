import React, { useEffect, useState } from 'react';
import './PaymentForm.css';
import Cookies from 'js-cookie';
// import Popup from '../Popup/Popup';
import Navbar from '../Navbar/Navbar';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const PaymentForm = () => {

    const [showPopup, setShowPopup] = useState(false);
    // const { id } = useParams();
    // const [tour, setTour] = useState();
    // useEffect(() => {
    //     axios.get(`http://localhost:3500/api/tour/${id}`)
    //     .then((res) => {
    //         setTour(res.data);
    //         console.log(tour);
    //     })
    //     .catch((err) => {
    //         console.log(err);
    //     });
    // }, []);

    const [cardNumber, setCardNumber] = useState("################");
    const [cardHolder, setCardHolder] = useState("FULL NAME");
    const [expirationMonth, setExpirationMonth] = useState("MM");
    const [expirationYear, setExpirationYear] = useState("YY");
    const [cvv, setCvv] = useState("###");


    const handleCardNumber = (e) => {
        setCardNumber(e.target.value);
    }

    const handleCardHolder = (e) => {
        setCardHolder(e.target.value);
    }

    const handleExpirationMonth = (e) => {
        setExpirationMonth(e.target.value);
    }

    const handleExpirationYear = (e) => {
        setExpirationYear(e.target.value);
    }   

    const handleCvv = (e) => {
        setCvv(e.target.value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const mailData = {
            cardNumber: cardNumber,
            cardHolder: cardHolder,
            expirationMonth: expirationMonth,
            expirationYear: expirationYear,
            cvv: cvv,
            amount: Cookies.get('tourPrice'),
            date: Cookies.get('tourDate'),
            sellerEmail: Cookies.get('sellerEmail'),
            buyerEmail: Cookies.get('buyerEmail'),
            tourName:Cookies.get('tourName')
        };

        // console.log(mailData);
        setShowPopup(true);

        const res = await fetch(`${process.env.REACT_APP_API_URL}/api/paymentForm/`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(mailData)
        })
        .then((res) => {
            console.log(res);
            if(res.status > 199 && res.status < 300){
                alert("Send Successfully !");
            }
        });
    }


    return (
    <>
    {/* <Navbar className="payment-form-navbar" /> */}
    <div className="payment-form-container">
        <div className="payment-form-card-container">
            <div className="payment-form-front">
                <div className="payment-form-image">
                    
                    <img src="/asset/paymentCard/chip.png" alt="no-chip" />
                    <img src="/asset/paymentCard/visa.png" alt="no visa" />
                
                </div>
                <div className="payment-form-card-number-box">{cardNumber}</div>
                <div className="payment-form-flexbox">
                    <div className="payment-form-box">
                        <span className="payment-form-span">card holder</span>
                        <div className="payment-form-card-holder-name">{cardHolder}</div>
                    </div>
                    <div className="payment-form-box">
                        <span className="payment-form-span">expires</span>
                        <div className="payment-form-expiration">
                        <span className="payment-form-span">{expirationMonth}/</span>
                        <span className="payment-form-span">{expirationYear}</span>
                    </div>
                </div>
            </div>
        </div>

        <div className="payment-form-back">
            <div className="payment-form-stripe"></div>
            <div className="payment-form-box">
                <span className="payment-form-span">cvv</span>
                <div className="payment-form-cvv-box"></div>
                <img src="image/visa.png" alt=""/>
            </div>
        </div>
    </div>

    <form action="" className='payment-form-form'>
        <div className="payment-form-inputBox">
            <span className="payment-form-span">Card Number</span>
            <input type="text" maxlength="16" className="payment-form-card-number-input" onChange={handleCardNumber}/>
        </div>
        <div className="payment-form-inputBox">
            <span className="payment-form-span">Card Holder</span>
            <input type="text" className="payment-form-card-holder-input" onChange={handleCardHolder}/>
        </div>
        <div className="payment-form-flexbox">
            <div className="payment-form-inputBox">
                <span className="payment-form-span">expiration mm</span>
                <select name="" id="" className="payment-form-month-input" onChange={handleExpirationMonth}>
                    <option value="month" selected disabled>month</option>
                    <option value="01">01</option>
                    <option value="02">02</option>
                    <option value="03">03</option>
                    <option value="04">04</option>
                    <option value="05">05</option>
                    <option value="06">06</option>
                    <option value="07">07</option>
                    <option value="08">08</option>
                    <option value="09">09</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                </select>
            </div>
            <div className="payment-form-inputBox">
                <span className="payment-form-span">expiration yy</span>
                <select name="" id="" className="payment-form-year-input" onChange={handleExpirationYear}>
                    <option value="year" selected disabled>year</option>
                    <option value="2021">2021</option>
                    <option value="2022">2022</option>
                    <option value="2023">2023</option>
                    <option value="2024">2024</option>
                    <option value="2025">2025</option>
                    <option value="2026">2026</option>
                    <option value="2027">2027</option>
                    <option value="2028">2028</option>
                    <option value="2029">2029</option>
                    <option value="2030">2030</option>
                </select>
            </div>
            <div className="payment-form-inputBox">
                <span className="payment-form-span">cvv</span>
                <input type="text" maxlength="4" className="payment-form-cvv-input" onChange={handleCvv}/>
            </div>
        </div>
        <div>
            <input type="submit" value="submit" className="payment-form-submit-btn"  onClick={handleSubmit}/>
            {/* {showPopup && <Popup/>} */}
        </div>
    </form>  
</div>    
</>
)}

export default PaymentForm