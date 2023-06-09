import React, { useEffect } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';


const PaymentSuccess = () => {
  useEffect(() => {
    handleAfterPayment();
  }, []);

  const handleAfterPayment = async () => {
    try{
      const mailData = {
        amount: Cookies.get('tourPrice'),
        date: Cookies.get('tourDate'),
        sellerEmail: Cookies.get('sellerEmail'),
        buyerEmail: Cookies.get('buyerEmail'),
        tourName:Cookies.get('tourName')
    };

    const res = await fetch(`${process.env.REACT_APP_API_URL}/api/paymentForm/`, {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(mailData)
      })
      .then((res) => {
          console.log(res);
          // if(res.status > 199 && res.status < 300){
          //     alert("Send Successfully !");
          // }
      }); 

    } catch (err) {
      console.log(err);
    } 
  }

  return (
    <div className="payment-success-container">
      <h1>Payment Success</h1>
      <div className="payment-success-message">Payment Successful!</div>

      <style>
        {`
          .payment-success-container {
            text-align: center;
          }

          .payment-success-message {
            background-color: #5cb85c;
            color: #fff;
            padding: 10px;
            font-weight: bold;
            border-radius: 4px;
            margin-top: 20px;
          }
        `}
      </style>
    </div>
  );
};

export default PaymentSuccess;
