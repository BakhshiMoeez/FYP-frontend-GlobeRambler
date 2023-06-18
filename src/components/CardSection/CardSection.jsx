import './CardSection.css';
import './userList.css';
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
    const [topUsers, setTopUsers] = useState([{
        fullname: 'N/A',
        sellerEmail: 'N/A',
        overallRatings: 'N/A'
    }]);

    async function fetchAllTheTours()
    {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/tour`);
        setTours(response.data);
        setDummyTestArray(response.data);
        console.log(response.data);
    }

    async function fetchTopRatedSellers()
    {
        const result = await axios.get(`${process.env.REACT_APP_API_URL}/api/rating`);
        console.log('topRatedseller: ', result.data);
        setTopUsers(result.data);
    }
    
    useEffect(() => {
        try{
            fetchAllTheTours();
            fetchTopRatedSellers();
        }catch(err){
            console.log(err.message);
        }
    }, []);

    const [searchTerm, setSearchTerm] = useState('');
    const [dummyTestArray, setDummyTestArray] = useState([]);
    const [showRatedSeller, setShowRatedSeller] = useState(true);

    const users = [
        { id: 1, name: 'John Doe', image: 'https://media.istockphoto.com/id/1174405176/vector/top-rated-ribbon-top-rated-round-red-sign-top-rated.jpg?s=612x612&w=0&k=20&c=t87ZSpwg8IbGkukELSxDi_d6Sd2eE7TtcnGH7lgfn7k=' },
        { id: 2, name: 'Jane Smith', image: 'user2.jpg' },
        { id: 3, name: 'Mike Johnson', image: 'user3.jpg' },
      ];
    
    function searchFunctionality(e){ 
        // console.log(dummyTestArray);
        e.preventDefault();
        // console.log(searchTerm);
        const filteredTours = dummyTestArray.filter((tour) => {
            return tour.title.toLowerCase().includes(searchTerm.toLowerCase());
        });
        setTours(filteredTours);
    }


    const [isOpen, setIsOpen] = useState(false);
    const [start, setStart] = useState('');
    const [destination, setDestination] = useState('');
    const [searchPrice, setSearchPrice] = useState(0);

    const toggleForm = (e) => {
        e.preventDefault();
        setIsOpen(!isOpen);
    };

    const handleFilter = (e) => 
    {
        e.preventDefault();

        const filteredTours = dummyTestArray.filter((tour) => {
          // Check if the start, destination, and price conditions are met
          const isStartMatch = tour.source.toLowerCase() === start.toLowerCase();
          const isDestinationMatch = tour.destination.toLowerCase() === destination.toLowerCase();
          const isPriceMatch = parseFloat(tour.basePrice) <= parseFloat(searchPrice);
    
          return isStartMatch && isDestinationMatch && isPriceMatch;
        });

        setTours(filteredTours);
    }

  return (
    <>
    <div className="aboutus-banner-search">
        <form className='aboutus-search-form'>
            <input className='aboutus-form-input' onChange={(e) => {setSearchTerm(e.target.value)}} type="text" placeholder='Destination, City'/>
            <button className='aboutus-search-button' onClick={searchFunctionality}>Search</button>
            <button className='aboutus-search-button' onClick={toggleForm}>Advance</button>
        </form>
        
        {
            isOpen && (
                <form className='aboutus-search-form'>
                    <input className='aboutus-form-input' onChange={(e) => {setStart(e.target.value)}} type="text" placeholder='Start City'/>
                    <input className='aboutus-form-input' onChange={(e) => {setDestination(e.target.value)}} type="text" placeholder='Destination City'/>
                    <input className='aboutus-form-input' onChange={(e) => {setSearchPrice(e.target.value)}} type="text" placeholder='Price'/>
                    <button className='aboutus-search-button' onClick={handleFilter}>Filter</button>
                </form>
            )
        }

    </div>
    <div className="card-section-main-container">
        {/* <div className="tours-show-rated-sellers-div">
            <div className="user-list-container">
                <ul className="user-list">
                    <h4 style={{color: 'white'}}>Top-Rated Sellers</h4>
                    {topUsers.map(user => (
                        <li className="user-list-item">
                        <img
                            src="https://media.istockphoto.com/id/1174405176/vector/top-rated-ribbon-top-rated-round-red-sign-top-rated.jpg?s=612x612&w=0&k=20&c=t87ZSpwg8IbGkukELSxDi_d6Sd2eE7TtcnGH7lgfn7k="
                            className="user-list-item-image"
                        />
                        <span onClick={() => {alert('Hello')}} className="user-list-item-name">{user.fullname}</span>
                        </li>
                ))}
                </ul>
            </div>
        </div> */}
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
    {/* {showRatedSeller && (
        <div className="user-list-container">
            <button onClick={() => setShowRatedSeller(false)} className="close-btn">&times;</button>
            <ul className="user-list">
              {users.map(user => (
                <li key={user.id} className="user-list-item">
                  <img
                    src={user.image}
                    alt={user.name}
                    className="user-list-item-image"
                  />
                  <span className="user-list-item-name">{user.name}</span>
                </li>
              ))}
            </ul>
          </div>
    )} */}
    </>
  )
}