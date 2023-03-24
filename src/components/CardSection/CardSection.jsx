import './CardSection.css';
import { Avatar, Card } from 'antd';
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


export default function CardSection() {
  return (
    <>
    <div className="card-section-main-container">
        <div className="card-section-inside-container">
            <div className="card-section-heading-text">
                <p>Our Best Selling Tours and Packages You My Like</p>
                <div className="card-section-cards-holder">
                    
                    {
                        dummyData.map((item) => (
                            <Card 
                                style={{width: 220, marginBottom: 20}}
                                cover = {<img src={item.image} alt="img"/>}
                            >
                                <Meta
                                    avatar={<Avatar src="/asset/buyerDashboard/4.png" />}
                                    title={item.title}
                                    description={`${item.location} ${item.price}`}
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