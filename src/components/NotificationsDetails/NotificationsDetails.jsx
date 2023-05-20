import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import './NotificationsDetails.css'

export default function NotificationsDetails() {
  const [notifications, setNotifications] = useState({ _id: '', title: '', desc: '' })
  const { id } = useParams();

  useEffect(() => { 
    const getNotifications = async () => {
      try{
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/notification/${id}`);
        console.log(response.data); // handle the success response
        setNotifications(response.data);
      } catch (err) {
        console.log(err)
      }
    }

    getNotifications();
 }, [])
  return (
    <>
      <div className="Notification-details-container">
        <div className="Notification-details-profile-picture">
          <img src="https://cdn1.vectorstock.com/i/1000x1000/29/70/admin-text-rubber-stamp-vector-11362970.jpg" alt="Profile Picture" />
        </div>
        <div className="Notification-details-fields">
          <h2 className="Notification-details-title">{notifications.title}</h2>
          <p className="Notification-details-description">{notifications.desc}</p>
        </div>
      </div>
    </>
  )
}
