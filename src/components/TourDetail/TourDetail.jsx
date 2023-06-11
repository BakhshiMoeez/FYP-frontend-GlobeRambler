import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Carousel, Tour } from 'antd';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import './TourDetail.css';

const TourDetail = () => {
    const { id } = useParams();
    const TourDetail = {
      title: "N/A",
      desc: "N/A",
      coverImage: "N/A",
      basePrice: "0",
      email: "N/A",
      sellerProfilePic: "N/A",
      bronzePhotographyDesc: "N/A",
      bronzePhotographyPrice: "0",
      bronzeHotelDesc: "N/A",
      bronzeHotelPrice: "0",
      bronzeMealDesc: "N/A",
      bronzeMealPrice: "0",
      bronzeCarDesc: "N/A",
      bronzeCarPrice: "0",
      bronzeAddInfo: "N/A",
      silverPhotographyDesc: "N/A",
      silverPhotographyPrice: "0",
      silverHotelDesc: "N/A",
      silverHotelPrice: "0",
      silverMealDesc: "N/A",
      silverMealPrice: "0",
      silverCarDesc: "N/A",
      silverCarPrice: "0",
      silverAddInfo: "N/A",
      goldPhotographyDesc: "N/A",
      goldPhotographyPrice: "0",
      goldHotelDesc: "N/A",
      goldHotelPrice: "0",
      goldMealDesc: "N/A",
      goldMealPrice: "0",
      goldCarDesc: "N/A",
      goldCarPrice: "0",
      goldAddInfo: "N/A"
    };
    const [tour, setTour] = useState(TourDetail);
    const [bronzePrice, setBronzePrice] = useState(0);
    const [silverPrice, setSilverPrice] = useState(0);
    const [goldPrice, setGoldPrice] = useState(0);

    const [firstName, setFirstName] = useState("none");
    const [lastName, setLastName] = useState("none");

    useEffect(() => {
        
        const fetchData = async () => {
            try {
              const tourResponse = await axios.get(`${process.env.REACT_APP_API_URL}/api/tour/${id}`);
              const tourData = tourResponse.data;
              setTour(tourData);
              setBronzePrice(parseInt(tourData.basePrice, 10) + parseInt(tourData.bronzePhotographyPrice, 10) + parseInt(tourData.bronzeHotelPrice, 10) + parseInt(tourData.bronzeMealPrice, 10) + parseInt(tourData.bronzeCarPrice, 10));
              setSilverPrice(parseInt(tourData.basePrice, 10) + parseInt(tourData.silverPhotographyPrice, 10) + parseInt(tourData.silverHotelPrice, 10) + parseInt(tourData.silverMealPrice, 10) + parseInt(tourData.silverCarPrice, 10));
              setGoldPrice(parseInt(tourData.basePrice, 10) + parseInt(tourData.goldPhotographyPrice, 10) + parseInt(tourData.goldHotelPrice, 10) + parseInt(tourData.goldMealPrice, 10) + parseInt(tourData.goldCarPrice, 10));
            
              const email = tourData.email;
              const sellerResponse = await axios.post(`${process.env.REACT_APP_API_URL}/api/seller/`, {email});
              setFirstName(sellerResponse.data.firstName);
              setLastName(sellerResponse.data.lastName);

            } catch (err) {
              console.log(err);
            }
          };
          
          fetchData();
    }, []);

    const currentDate = new Date();
    const dateString = currentDate.toString();
    const handleCheckoutGold = async () => {    
        Cookies.set('tourDate',dateString);
        Cookies.set('tourPrice',goldPrice);
        Cookies.set('tourName',tour.title);
        Cookies.set('sellerEmail',tour.email);

        try{
            const result = await axios.post(`${process.env.REACT_APP_API_URL}/api/paymentForm//create-checkout-session`, {price: goldPrice, tourName: tour.title});
            console.log(result.data.url);
            window.open(result.data.url, '_blank')
        }   
        catch(err){
            console.log(err);
        }

        // const routeUrl = `/paymentForm/${id}`; 
        // window.open(routeUrl, '_blank');

        
    }

    const handleCheckoutSilver = async () => {    
        Cookies.set('tourDate',dateString);
        Cookies.set('tourPrice',silverPrice);
        Cookies.set('tourName',tour.title);
        Cookies.set('sellerEmail',tour.email);
             
        try{
            const result = await axios.post(`${process.env.REACT_APP_API_URL}/api/paymentForm//create-checkout-session`, {price: silverPrice, tourName: tour.title});
            console.log(result.data.url);
            window.open(result.data.url, '_blank')
        }   
        catch(err){
            console.log(err);
        }

        // const routeUrl = `/paymentForm/${id}`; 
        // window.open(routeUrl, '_blank');
        
    }

    const handleCheckoutBronze = async () => {    
        Cookies.set('tourDate',dateString);
        Cookies.set('tourPrice',bronzePrice);
        Cookies.set('tourName',tour.title);
        Cookies.set('sellerEmail',tour.email);
             
        try{
            const result = await axios.post(`${process.env.REACT_APP_API_URL}/api/paymentForm//create-checkout-session`, {price: bronzePrice, tourName: tour.title});
            console.log(result.data.url);
            window.open(result.data.url, '_blank')
        }   
        catch(err){
            console.log(err);
        }

        // const routeUrl = `/paymentForm/${id}`; 
        // window.open(routeUrl, '_blank'); 
    }

    // const navigate = useNavigate();

    const handleStripePayment = async () => {
        try{
            const result = await axios.post(`${process.env.REACT_APP_API_URL}/api/paymentForm//create-checkout-session`, {});
            console.log(result.data.url);
            window.open(result.data.url, '_blank')
        }   
        catch(err){
            console.log(err);
        }
    };

    return (
        <>
    <div className="tour-details-container">
        <div className="tour-details-inside-container">
            <h1>Tour Details</h1>
            <div className="row">
                <div className="col-12 col-md-12 col-lg-8 tour-details-images">
                    <div className="carousel-slider">
                        <Carousel autoplay>
                            <img src={tour.coverImage} alt="" />
                        </Carousel>
                    </div>
                </div>
                <div className="col-12 col-md-12 col-lg-4 tour-details-tabs">
                    <div className="tour-details-tabs-div">
                        <ul className="nav nav-tabs" role="tablist">
                            <li className="nav-item">
                                <a className="nav-link active" data-toggle="tab" href="#tabs-1" role="tab">Bronze <span><img src="/asset/tour-details/bronze-medal.png" alt="" /></span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" data-toggle="tab" href="#tabs-2" role="tab">Silver <span><img src="/asset/tour-details/silver-medal.png" alt="" /></span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" data-toggle="tab" href="#tabs-3" role="tab">Gold <span><img src="/asset/tour-details/gold-medal.png" alt="" /></span></a>
                            </li>
                        </ul>
                        {/*Tabs Pan*/}
                        <div className="tab-content">
                            <div className="tab-pane active" id="tabs-1" role="tabpanel">
                                <div className="tour-details-tab1">
                                    <div className="tour-details-package-price">
                                        <p>Bronze <span><img src="/asset/tour-details/bronze-medal.png" alt="" /></span></p>
                                        <p>{`Rs. ${bronzePrice}`}</p>
                                    </div>
                                    <div className="tour-details-tabs-description">
                                        <p><span><img src="/asset/tour-details/photography.png" alt="" /></span> {tour.bronzePhotographyDesc} </p>
                                        <p><span><img src="/asset/tour-details/hotel.png" alt="" /></span> {tour.bronzeHotelDesc}</p>
                                        <p><span><img src="/asset/tour-details/meal.png" alt="" /></span> {tour.bronzeMealDesc}</p>
                                        <p><span><img src="/asset/tour-details/car.png" alt="" /></span> {tour.bronzeCarDesc}</p>
                                        <p><span><img src="/asset/tour-details/additional.png" alt="" /></span> {tour.bronzeAddInfo}</p>

                                        <button className="tour-continue-btn" onClick={handleCheckoutBronze} >Checkout</button>
                                    </div>
                                </div>                                
                            </div>
                            <div className="tab-pane" id="tabs-2" role="tabpanel">
                            <div className="tour-details-tab1">
                                    <div className="tour-details-package-price">
                                        <p>Silver <span><img src="/asset/tour-details/silver-medal.png" alt="" /></span></p>
                                        <p>{`Rs. ${silverPrice}`}</p>
                                    </div>
                                    <div className="tour-details-tabs-description">
                                        <p><span><img src="/asset/tour-details/photography.png" alt="" /></span> {tour.silverPhotographyDesc} </p>
                                        <p><span><img src="/asset/tour-details/hotel.png" alt="" /></span> {tour.silverHotelDesc} </p>
                                        <p><span><img src="/asset/tour-details/meal.png" alt="" /></span> {tour.silverMealDesc}</p>
                                        <p><span><img src="/asset/tour-details/car.png" alt="" /></span> {tour.silverCarDesc}</p>
                                        <p><span><img src="/asset/tour-details/additional.png" alt="" /></span> {tour.silverAddInfo}</p>

                                        <button className="tour-continue-btn" onClick={handleCheckoutSilver} >Checkout</button>
                                    </div>
                                </div>  
                            </div>
                            <div className="tab-pane" id="tabs-3" role="tabpanel">
                            <div className="tour-details-tab1">
                                    <div className="tour-details-package-price">
                                        <p>Gold <span><img src="/asset/tour-details/gold-medal.png" alt="" /></span></p>
                                        <p>{`Rs. ${goldPrice}`}</p>
                                    </div>
                                    <div className="tour-details-tabs-description">
                                        <p><span><img src="/asset/tour-details/photography.png" alt="" /></span> {tour.goldPhotographyDesc} </p>
                                        <p><span><img src="/asset/tour-details/hotel.png" alt="" /></span> {tour.goldHotelDesc}</p>
                                        <p><span><img src="/asset/tour-details/meal.png" alt="" /></span> {tour.goldMealDesc}</p>
                                        <p><span><img src="/asset/tour-details/car.png" alt="" /></span> {tour.goldCarDesc}</p>
                                        <p><span><img src="/asset/tour-details/additional.png" alt="" /></span> {tour.goldAddInfo}</p>

                                        <button className="tour-continue-btn" onClick={handleCheckoutGold} >Checkout</button>
                                    </div>
                                </div>  
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-12 col-lg-8 tour-details-images">
                    <div className="tour-details-info">

                        <div className="tour-details-info-seller-info">
                            <img className='tour-details-info-seller-info-img' src={tour.sellerProfilePic} alt="profile pic" />
                            <h5><a className='tour-details-anchor-tag-profile'  style={{target: '_blank',textDecoration: "None", color:'black'}} href={`/sellerProfileDetail/${tour.email}`}>{`${firstName} ${lastName}`}</a></h5>
                        </div>

                        <h2 className="tour-details-name">{tour.title}</h2>
                        {/* <h3 className="tour-details-category">Historic</h3> */}
                        <p className="tour-details-description" style={{textAlign: 'justify'}}>
                            {tour.description}
                        </p>

                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
    )
}

export default TourDetail;