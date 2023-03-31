import React from 'react'
import './SellerProfile.css';
import Cookies from 'js-cookie';

export default function SellerProfile() {
  const sellerEmail = Cookies.get('sellerEmail');
  return (
    <div>{sellerEmail}</div>
  )
}
