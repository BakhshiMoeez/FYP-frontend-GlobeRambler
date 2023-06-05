import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie';
import AdminLogin from '../AdminLogin/AdminLogin';
import { useNavigate } from 'react-router-dom';
import './AdminPanel.css';

const AdminPanel = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [paymentRecordss, setPaymentRecordss] = useState([{
        sellerName: '',
        buyerName: '',
        date: '',
        amount: '',
        tourName: ''
    }]);

    const navigate = useNavigate();

    useEffect(() => {
        const isAdminLogin = Cookies.get('adminLogin');
        if(isAdminLogin === 'false')
        {
            navigate('/adminLogin');
        }

        getPaymentRecords();
    }, []);
    
    const getPaymentRecords = async () => {
        try{
            const paymentRecords = await axios.get(`${process.env.REACT_APP_API_URL}/api/paymentForm`);
            console.log(paymentRecords.data);
            setPaymentRecordss(paymentRecords.data);
        } catch (err) {
            console.log(err);
        }
    }

    const handlogout = () => {
        Cookies.set('adminLogin', 'false');
        navigate('/adminLogin');
    };

    const createNotification = async (e) => {
        e.preventDefault();
        try{
            const result = await axios.post(`${process.env.REACT_APP_API_URL}/api/notification/`, {title: title, description: description});
            console.log(result);
        }
        catch (error) {
            console.log(error); // handle the error response
        }
        
    };

    return (
        <>
        {/* Main */}
        <main className="py-6 bg-surface-secondary">
            <div className='admin-logo-logout-header'>
                <img src="/asset/logo/logo.png" alt="logo" />
                <button className='btn btn-warning' onClick={handlogout}>LogOut</button>
            </div>

            <h1 style={{fontWeight: 'bolder'}}>Admin Panel</h1>
            <div className="container-fluid">
                {/* <!-- Card stats --> */}
                <div className="row g-6 mb-6">
                    <div className="col-xl-3 col-sm-6 col-12">
                        <div className="card shadow border-0">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col">
                                        <span className="h6 font-semibold text-muted text-sm d-block mb-2">No of total users</span>
                                        <span className="h3 font-bold mb-0">215</span>
                                    </div>
                                    <div className="col-auto">
                                        <div className="icon icon-shape bg-primary text-white text-lg rounded-circle">
                                            <i className="bi bi-people"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-sm-6 col-12">
                        <div className="card shadow border-0">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col">
                                        <span className="h6 font-semibold text-muted text-sm d-block mb-2">No of Seller</span>
                                        <span className="h3 font-bold mb-0">100</span>
                                    </div>
                                    <div className="col-auto">
                                        <div className="icon icon-shape bg-info text-white text-lg rounded-circle">
                                            <i className="bi bi-minecart-loaded"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-sm-6 col-12">
                        <div className="card shadow border-0">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col">
                                        <span className="h6 font-semibold text-muted text-sm d-block mb-2">No of Buyers</span>
                                        <span className="h3 font-bold mb-0">150</span>
                                    </div>
                                    <div className="col-auto">
                                        <div className="icon icon-shape bg-warning text-white text-lg rounded-circle">
                                            <i className="bi bi-minecart-loaded"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-sm-6 col-12">
                        <div className="card shadow border-0">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col">
                                        <span className="h6 font-semibold text-muted text-sm d-block mb-2">Total Earnings</span>
                                        <span className="h3 font-bold mb-0">Rs. 1000,000</span>
                                    </div>
                                    <div className="col-auto">
                                        <div className="icon icon-shape bg-tertiary text-white text-lg rounded-circle">
                                            <i className="bi bi-credit-card"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card shadow border-0 mb-7">
                    <div className="card-header">
                        <h5 className="mb-0">Applications</h5>
                    </div>
                    <div className="table-responsive">
                        <table className="table table-hover table-nowrap">
                            <thead className="thead-light">
                                <tr>
                                    <th scope="col">Date</th>
                                    <th scope="col">Buyer</th>
                                    <th scope="col">Seller</th>
                                    <th scope="col">Tour Name</th>
                                    <th scope="col">Payment</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                            {paymentRecordss.map((paymentRecord, index) => (
                                <tr key={index}>
                                    <td>
                                    <a className="text-heading font-semibold" href="#">
                                        {paymentRecord.date}
                                    </a>
                                    </td>
                                    <td>
                                    <img
                                        alt="..."
                                        src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80"
                                        className="avatar avatar-sm rounded-circle me-2"
                                    />
                                    <a className="text-heading font-semibold" href="#">
                                        {paymentRecord.buyerName}
                                    </a>
                                    </td>
                                    <td>
                                    <img
                                        alt="..."
                                        src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80"
                                        className="avatar avatar-sm rounded-circle me-2"
                                    />
                                    <a className="text-heading font-semibold" href="#">
                                        {paymentRecord.sellerName}
                                    </a>
                                    </td>
                                    <td>
                                    <a className="text-heading font-semibold" href="#">
                                        {paymentRecord.tourName}
                                    </a>
                                    </td>
                                    <td>{paymentRecord.amount}</td>
                                </tr>
                                ))}

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {/* SEND MESSAGE */}

            <div className="contact-form-wrapper">
                <div className="title">
                    <h1>Send Notification</h1>
                </div>
                
                <form id="contact-form" onSubmit={createNotification} className="contact-form" role="form">

                        <div className="form-group">
                            <input onChange={(e) => {setTitle(e.target.value)}} type="text" placeholder="Subject" className="form-control" name="subject" id="subject" required />
                        </div>

                        <div className="form-group">
                            <textarea rows="6" placeholder="Message" className="form-control" onChange={(e) => {setDescription(e.target.value)}}  name="message" id="message" required></textarea>    
                        </div>

                        <div id="submit" className="">
                            <input type="submit" id="contact-submit" className="btn btn-default submit-button" value="Send" />
                        </div>
                    </form>
                    
                </div>

                
        </main>

        </>
    )
}

export default AdminPanel;


{/*

<tr>                                    
                                    <td>
                                        <a className="text-heading font-semibold" href="#">
                                         {paymentRecordss[0].date}
                                        </a>
                                    </td>
                                    <td>
                                        <img alt="..." src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80" className="avatar avatar-sm rounded-circle me-2" />
                                        <a className="text-heading font-semibold" href="#">
                                            {paymentRecordss[0].buyerName}
                                        </a>
                                    </td>
                                    <td>
                                        <img alt="..." src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80" className="avatar avatar-sm rounded-circle me-2" />
                                        <a className="text-heading font-semibold" href="#">
                                           {paymentRecordss[0].sellerName}
                                        </a>
                                    </td>
                                    <td>
                                        <a className="text-heading font-semibold" href="#">
                                         {paymentRecordss[0].tourName}
                                        </a>
                                    </td>
                                    <td>
                                        {paymentRecordss[0].amount}
                                    </td>
                                </tr>
                                <tr>                                    
                                    <td>
                                        <a className="text-heading font-semibold" href="#">
                                         15 May, 2022
                                        </a>
                                    </td>
                                    <td>
                                        <img alt="..." src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80" className="avatar avatar-sm rounded-circle me-2" />
                                        <a className="text-heading font-semibold" href="#">
                                            Masab Ahmad
                                        </a>
                                    </td>
                                    <td>
                                        <img alt="..." src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80" className="avatar avatar-sm rounded-circle me-2" />
                                        <a className="text-heading font-semibold" href="#">
                                           Moeez Ahmad Bakhshi
                                        </a>
                                    </td>
                                    <td>
                                        <a className="text-heading font-semibold" href="#">
                                         Tour to Murree
                                        </a>
                                    </td>
                                    <td>
                                        Rs. 10,000
                                    </td>
                                </tr>
                                <tr>                                    
                                    <td>
                                        <a className="text-heading font-semibold" href="#">
                                         15 May, 2022
                                        </a>
                                    </td>
                                    <td>
                                        <img alt="..." src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80" className="avatar avatar-sm rounded-circle me-2" />
                                        <a className="text-heading font-semibold" href="#">
                                            Masab Ahmad
                                        </a>
                                    </td>
                                    <td>
                                        <img alt="..." src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80" className="avatar avatar-sm rounded-circle me-2" />
                                        <a className="text-heading font-semibold" href="#">
                                           Moeez Ahmad Bakhshi
                                        </a>
                                    </td>
                                    <td>
                                        <a className="text-heading font-semibold" href="#">
                                         Tour to Murree
                                        </a>
                                    </td>
                                    <td>
                                        Rs. 10,000
                                    </td>
                                </tr>
                                <tr>                                    
                                    <td>
                                        <a className="text-heading font-semibold" href="#">
                                         15 May, 2022
                                        </a>
                                    </td>
                                    <td>
                                        <img alt="..." src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80" className="avatar avatar-sm rounded-circle me-2" />
                                        <a className="text-heading font-semibold" href="#">
                                            Masab Ahmad
                                        </a>
                                    </td>
                                    <td>
                                        <img alt="..." src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80" className="avatar avatar-sm rounded-circle me-2" />
                                        <a className="text-heading font-semibold" href="#">
                                           Moeez Ahmad Bakhshi
                                        </a>
                                    </td>
                                    <td>
                                        <a className="text-heading font-semibold" href="#">
                                         Tour to Murree
                                        </a>
                                    </td>
                                    <td>
                                        Rs. 10,000
                                    </td>
                                </tr>
*/}