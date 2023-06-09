import './CardSection.css';
import { Avatar, Card } from 'antd';
import axios from 'axios';
import { useState, useEffect } from 'react';
const { Meta } = Card;

const dummyData = [
    {
        id: 1,
        image: "/asset/buyerDashboard/1.png",
        location: "Faisalabad, Pakistan",
        title: "7 Day Tour to Karachi",
        price: "Rs. 40,000"
    },
    {
        id: 2,
        image: "/asset/buyerDashboard/2.png",
        location: "Lahore, Pakistan",
        title: "6 Day tour to Islamabad",
        price: "Rs. 40,000"
    },
    {
        id: 3,
        image: "/asset/buyerDashboard/3.png",
        location: "Rawalpindi, Pakistan",
        title: "3 Day Tour to Naran",
        price: "Rs. 40,000"
    },
    {
        id: 4,
        image: "/asset/buyerDashboard/4.png",
        location: "Lahore, Pakistan",
        title: "9 Day Tour to North",
        price: "Rs. 40,000"
    },
    {
        id: 5,
        image: "/asset/buyerDashboard/5.png",
        location: "Faisalabad, Pakistan",
        title: "7 Day Tour to Karachi",
        price: "Rs. 40,000"
    },
    {
        id: 6,
        image: "/asset/buyerDashboard/6.png",
        location: "Lahore, Pakistan",
        title: "6 Day tour to Islamabad",
        price: "Rs. 40,000"
    },
    {
        id: 7,
        image: "/asset/buyerDashboard/7.png",
        location: "Rawalpindi, Pakistan",
        title: "3 Day Tour to Naran",
        price: "Rs. 40,000"
    },
    {
        id: 8,
        image: "/asset/buyerDashboard/8.png",
        location: "Lahore, Pakistan",
        title: "9 Day Tour to North",
        price: "Rs. 40,000"
    }
];


export default function CardSection({searchedTerm}) {
    const [Tours, setTours] = useState([]);
    
    async function fetchAllTheTours()
    {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/tour`);
        setTours(response.data);
        setDummyTestArray(response.data);
        //console.log(Tours);
    }

    useEffect(() => {
        try{
            fetchAllTheTours();
        }catch(err){
            console.log(err.message);
        }
    }, []);

    const [searchTerm, setSearchTerm] = useState('');
    const [dummyTestArray, setDummyTestArray] = useState([]);

    function searchFunctionality(e){ 
        console.log(dummyTestArray);
        e.preventDefault();
        console.log(searchTerm);
        const filteredTours = dummyTestArray.filter((tour) => {
            return tour.title.toLowerCase().includes(searchTerm.toLowerCase());
        });
        setTours(filteredTours);
    }

  return (
    <>
    <div className="aboutus-banner-search">
        <form className='aboutus-search-form'>
            <input className='aboutus-form-input' onChange={(e) => {setSearchTerm(e.target.value)}} type="text" placeholder='Destination, City'/>
            <button className='aboutus-search-button' onClick={searchFunctionality}>Search</button>
        </form>
    </div>
    <div className="card-section-main-container">
        <div className="card-section-inside-container">
            <div className="card-section-heading-text">
                <p>Our Best Selling Tours and Packages You My Like</p>
                <div className="card-section-cards-holder">
                    
                    {
                        Tours.map((item) => (
                            <Card 
                                style={{width: 220, marginBottom: 20}}
                                cover = {<img src={item.coverImage} alt="img"/>}
                            >
                                <Meta
                                    avatar={<Avatar src={item.sellerProfilePic} />}
                                    title={<a href={`/tourDetail/${item._id}`}  style={{ color: 'black' }} >{item.title}</a>}

                                    description={`${'Rs.'}${item.basePrice}`}
                                />
                            </Card>
                        ))
                    }
                    
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

{/*
<div className="card-section-card">
                        <img src="/asset/buyerDashboard/1.png" alt=".." />
                        <div className="card-lighter-text"><p>Lahore, Pakistan</p></div>
                        <div className="card-text"><p>7 Day Tour to Karachi</p></div>
                        <div className="card-price"><p>Rs. 40,000</p></div>
                    </div>
                    <div className="card-section-card">
                        <img src="/asset/buyerDashboard/2.png" alt=".." />
                        <div className="card-lighter-text"><p>Lahore, Pakistan</p></div>
                        <div className="card-text"><p>3 Day Tour to Jheel saif-ul-malook</p></div>
                        <div className="card-price"><p>Rs. 90,000</p></div>
                    </div>
                    <div className="card-section-card">
                        <img src="/asset/buyerDashboard/3.png" alt=".." />
                        <div className="card-lighter-text"><p>Rawalpindi, Pakistan</p></div>
                        <div className="card-text"><p>5 Day Tour to Lahore</p></div>
                        <div className="card-price"><p>Rs. 50,000</p></div>
                    </div>
                    <div className="card-section-card">
                        <img src="/asset/buyerDashboard/4.png" alt=".." />
                        <div className="card-lighter-text"><p>Lahore, Pakistan</p></div>
                        <div className="card-text"><p>10 Day Tour to Sawan Valley</p></div>
                        <div className="card-price"><p>Rs. 120,000</p></div>
                    </div>
                    <div className="card-section-card">
                        <img src="/asset/buyerDashboard/5.png" alt=".." />
                        <div className="card-lighter-text"><p>Karachi, Pakistan</p></div>
                        <div className="card-text"><p>4 Day Tour to Quetta</p></div>
                        <div className="card-price"><p>Rs. 60,000</p></div>
                    </div>
                    <div className="card-section-card">
                        <img src="/asset/buyerDashboard/6.png" alt=".." />
                        <div className="card-lighter-text"><p>Karachi, Pakistan</p></div>
                        <div className="card-text"><p>10 Day Tour to North</p></div>
                        <div className="card-price"><p>Rs. 200,000</p></div>
                    </div>
                    <div className="card-section-card">
                        <img src="/asset/buyerDashboard/7.png" alt=".." />
                        <div className="card-lighter-text"><p>Faisalabad, Pakistan</p></div>
                        <div className="card-text"><p>7 Day Tour to Karachi</p></div>
                        <div className="card-price"><p>Rs. 38,000</p></div>
                    </div>
                    <div className="card-section-card">
                        <img src="/asset/buyerDashboard/8.png" alt=".." />
                        <div className="card-lighter-text"><p>Gurjanwala, Pakistan</p></div>
                        <div className="card-text"><p>7 Day Tour to Karachi</p></div>
                        <div className="card-price"><p>Rs. 90,000</p></div>
                    </div>
                    <div className="card-section-card">
                        <img src="/asset/buyerDashboard/1.png" alt=".." />
                        <div className="card-lighter-text"><p>Lahore, Pakistan</p></div>
                        <div className="card-text"><p>7 Day Tour to Karachi</p></div>
                        <div className="card-price"><p>Rs. 40,000</p></div>
                    </div>
                    <div className="card-section-card">
                        <img src="/asset/buyerDashboard/2.png" alt=".." />
                        <div className="card-lighter-text"><p>Lahore, Pakistan</p></div>
                        <div className="card-text"><p>3 Day Tour to Jheel saif-ul-malook</p></div>
                        <div className="card-price"><p>Rs. 90,000</p></div>
                    </div>
                    <div className="card-section-card">
                        <img src="/asset/buyerDashboard/3.png" alt=".." />
                        <div className="card-lighter-text"><p>Rawalpindi, Pakistan</p></div>
                        <div className="card-text"><p>5 Day Tour to Lahore</p></div>
                        <div className="card-price"><p>Rs. 50,000</p></div>
                    </div>
                    <div className="card-section-card">
                        <img src="/asset/buyerDashboard/4.png" alt=".." />
                        <div className="card-lighter-text"><p>Lahore, Pakistan</p></div>
                        <div className="card-text"><p>10 Day Tour to Sawan Valley</p></div>
                        <div className="card-price"><p>Rs. 120,000</p></div>
                    </div>
                    <div className="card-section-card">
                        <img src="/asset/buyerDashboard/5.png" alt=".." />
                        <div className="card-lighter-text"><p>Karachi, Pakistan</p></div>
                        <div className="card-text"><p>4 Day Tour to Quetta</p></div>
                        <div className="card-price"><p>Rs. 60,000</p></div>
                    </div>
                    <div className="card-section-card">
                        <img src="/asset/buyerDashboard/6.png" alt=".." />
                        <div className="card-lighter-text"><p>Karachi, Pakistan</p></div>
                        <div className="card-text"><p>10 Day Tour to North</p></div>
                        <div className="card-price"><p>Rs. 200,000</p></div>
                    </div>
                    <div className="card-section-card">
                        <img src="/asset/buyerDashboard/7.png" alt=".." />
                        <div className="card-lighter-text"><p>Faisalabad, Pakistan</p></div>
                        <div className="card-text"><p>7 Day Tour to Karachi</p></div>
                        <div className="card-price"><p>Rs. 38,000</p></div>
                    </div>
                    <div className="card-section-card">
                        <img src="/asset/buyerDashboard/8.png" alt=".." />
                        <div className="card-lighter-text"><p>Gurjanwala, Pakistan</p></div>
                        <div className="card-text"><p>7 Day Tour to Karachi</p></div>
                        <div className="card-price"><p>Rs. 90,000</p></div>
                    </div>


*/}