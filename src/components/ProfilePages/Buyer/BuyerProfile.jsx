import React from 'react';
import './BuyerProfile.css';
import Cookies from 'js-cookie';

export default function BuyerProfile() {
  const buyerEmail = Cookies.get('buyerEmail');

  return (
    <div>{buyerEmail}</div>
  )
}
