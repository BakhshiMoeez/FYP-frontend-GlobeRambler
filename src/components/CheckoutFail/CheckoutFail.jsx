import React from 'react';

const PaymentFailed = () => {
  return (
    <div className="payment-success-container">
      <h1>Payment Failed</h1>
      <div className="payment-success-message">Payment Failed!</div>

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

export default PaymentFailed;
