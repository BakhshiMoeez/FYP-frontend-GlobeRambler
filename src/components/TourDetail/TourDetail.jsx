import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Carousel } from 'antd';
import './TourDetail.css';

const TourDetail = () => {
    const { id } = useParams();
    const TourDetail={
      title: "N/A",
      desc: "N/A",
      coverImage: "N/A",
      basePrice: "N/A",
      sellerEmail: "N/A",
      sellerProfilePic: "N/A",
      bronzePhotographyDesc: "N/A",
      bronzePhotographyPrice: "N/A",
      bronzeHotelDesc: "N/A",
      bronzeHotelPrice: "N/A",
      bronzeMealDesc: "N/A",
      bronzeMealPrice: "N/A",
      bronzeCarDesc: "N/A",
      bronzeCarPrice: "N/A",
      bronzeAdditionalInfo: "N/A",
      silverPhotographyDesc: "N/A",
      silverPhotographyPrice: "N/A",
      silverHotelDesc: "N/A",
      silverHotelPrice: "N/A",
      silverMealDesc: "N/A",
      silverMealPrice: "N/A",
      silverCarDesc: "N/A",
      silverCarPrice: "N/A",
      silverAdditionalInfo: "N/A",
      goldPhotographyDesc: "N/A",
      goldPhotographyPrice: "N/A",
      goldHotelDesc: "N/A",
      goldHotelPrice: "N/A",
      goldMealDesc: "N/A",
      goldMealPrice: "N/A",
      goldCarDesc: "N/A",
      goldCarPrice: "N/A",
      goldAdditionalInfo: "N/A"
    };
    const [tour, setTour] = useState(TourDetail);
    useEffect(() => {
        axios.get(`http://localhost:3500/api/tour/${id}`)
        .then((res) => {
            setTour(res.data);
            console.log(tour);
        })
        .catch((err) => {
            console.log(err);
        });
    }, []);

    return (
        <>
    <div className="tour-details-container">
        <div className="container-fluid">
            <h1>Tour Details</h1>
            <div className="row">
                <div className="col-12 col-lg-8 tour-details-images">
                    <div className="carousel-slider">
                        <Carousel autoplay>
                            
                            <img src={tour.coverImage} alt="" />

                            {/* <div>
                                <img src="https://picsum.photos/id/456/1200/600" alt="" />
                            </div>
                            <div>
                                <img src="https://picsum.photos/id/123/1200/600" alt="" />
                            </div>                                                         */}
                        </Carousel>
                    </div>
                    <div className="tour-details-info">
                        <h2 className="tour-details-name">{tour.title}</h2>
                        <h3 className="tour-details-category">Historic</h3>
                        <p className="tour-details-description">
                            {tour.description}
                        </p>
                        <h5 className="tour-details-price">{tour.basePrice}</h5>
                    </div>
                </div>
                <div className="col-12 col-lg-4 tour-details-tabs">
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
                                        <p>Rs. 50,000</p>
                                    </div>
                                    <div className="tour-details-tabs-description">
                                        <p><span><img src="/asset/tour-details/photography.png" alt="" /></span> {tour.bronzePhotographyDesc} </p>
                                        <p><span><img src="/asset/tour-details/hotel.png" alt="" /></span> {tour.bronzeHotelDesc}</p>
                                        <p><span><img src="/asset/tour-details/meal.png" alt="" /></span> {tour.bronzeMealDesc}</p>
                                        <p><span><img src="/asset/tour-details/car.png" alt="" /></span> {tour.bronzeCarDesc}</p>
                                        <p><span><img src="/asset/tour-details/additional.png" alt="" /></span> {tour.bronzeAdditionalInfo}</p>

                                        <a href="/BuyerLogin"><button className="tour-continue-btn" >Continue as Buyer</button></a>
                                    </div>
                                </div>                                
                            </div>
                            <div className="tab-pane" id="tabs-2" role="tabpanel">
                            <div className="tour-details-tab1">
                                    <div className="tour-details-package-price">
                                        <p>Silver <span><img src="/asset/tour-details/silver-medal.png" alt="" /></span></p>
                                        <p>Rs. 100,000</p>
                                    </div>
                                    <div className="tour-details-tabs-description">
                                        <p><span><img src="/asset/tour-details/photography.png" alt="" /></span> {tour.silverPhotographyDesc} </p>
                                        <p><span><img src="/asset/tour-details/hotel.png" alt="" /></span> {tour.silverHotelDesc} </p>
                                        <p><span><img src="/asset/tour-details/meal.png" alt="" /></span> {tour.silverMealDesc}</p>
                                        <p><span><img src="/asset/tour-details/car.png" alt="" /></span> {tour.silverCarDesc}</p>
                                        <p><span><img src="/asset/tour-details/additional.png" alt="" /></span> {tour.silverAdditionalInfo}</p>

                                        <a href="/BuyerLogin"><button className="tour-continue-btn" >Continue as Buyer</button></a>
                                    </div>
                                </div>  
                            </div>
                            <div className="tab-pane" id="tabs-3" role="tabpanel">
                            <div className="tour-details-tab1">
                                    <div className="tour-details-package-price">
                                        <p>Gold <span><img src="/asset/tour-details/gold-medal.png" alt="" /></span></p>
                                        <p>Rs. 150,000</p>
                                    </div>
                                    <div className="tour-details-tabs-description">
                                        <p><span><img src="/asset/tour-details/photography.png" alt="" /></span> {tour.goldPhotographyDesc} </p>
                                        <p><span><img src="/asset/tour-details/hotel.png" alt="" /></span> {tour.goldHotelDesc}</p>
                                        <p><span><img src="/asset/tour-details/meal.png" alt="" /></span> {tour.goldMealDesc}</p>
                                        <p><span><img src="/asset/tour-details/car.png" alt="" /></span> {tour.goldCarDesc}</p>
                                        <p><span><img src="/asset/tour-details/additional.png" alt="" /></span> {tour.goldAdditionalInfo}</p>

                                        <a href="/BuyerLogin"><button className="tour-continue-btn" >Continue as Buyer</button></a>
                                    </div>
                                </div>  
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
    )
}

export default TourDetail;