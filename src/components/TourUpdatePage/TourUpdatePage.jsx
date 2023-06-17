import React, { useState, useEffect } from "react";
import "antd/dist/reset.css";
import "./TourUpdatePage.css";
import $ from 'jquery';
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import {
  Button,
  Form,
  Input,
  Tabs,
  Progress,
  Select,
  Space,
  Typography,
  Upload,
} from "antd";
import axios from "axios";
import Cookie from "js-cookie";
import { FileOutlined } from "@ant-design/icons";
import Cookies from "js-cookie";
import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

const styles = {
  color: "black",
};

export default function PostTour() {

    const { id } = useParams();

  const presetKey = "bvifyafi";
  const cloudName = "dbrp1arte";
  const [coverImage, setCoverImage] = useState({});
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [basePrice, setBasePrice] = useState("");
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");

  const [bronzePhotographyDesc, setBronzePhotographyDesc] = useState("N/A");
  const [bronzePhotographyPrice, setBronzePhotographyPrice] = useState("0");
  const [bronzeHotelDesc, setBronzeHotelDesc] = useState("N/A");
  const [bronzeHotelPrice, setBronzeHotelPrice] = useState("0");
  const [bronzeMealDesc, setBronzeMealDesc] = useState("N/A");
  const [bronzeMealPrice, setBronzeMealPrice] = useState("0");
  const [bronzeCarDesc, setBronzeCarDesc] = useState("N/A");
  const [bronzeCarPrice, setBronzeCarPrice] = useState("0");
  const [bronzeAdditionalInfo, setBronzeAdditionalInfo] = useState("N/A");

  const [silverPhotographyDesc, setSilverPhotographyDesc] = useState("N/A");
  const [silverPhotographyPrice, setSilverPhotographyPrice] = useState("0");
  const [silverHotelDesc, setSilverHotelDesc] = useState("N/A");
  const [silverHotelPrice, setSilverHotelPrice] = useState("0");
  const [silverMealDesc, setSilverMealDesc] = useState("N/A");
  const [silverMealPrice, setSilverMealPrice] = useState("0");
  const [silverCarDesc, setSilverCarDesc] = useState("N/A");
  const [silverCarPrice, setSilverCarPrice] = useState("0");
  const [silverAdditionalInfo, setSilverAdditionalInfo] = useState("N/A");

  const [goldPhotographyDesc, setGoldPhotographyDesc] = useState("N/A");
  const [goldPhotographyPrice, setGoldPhotographyPrice] = useState("0");
  const [goldHotelDesc, setGoldHotelDesc] = useState("N/A");
  const [goldHotelPrice, setGoldHotelPrice] = useState("0");
  const [goldMealDesc, setGoldMealDesc] = useState("N/A");
  const [goldMealPrice, setGoldMealPrice] = useState("0");
  const [goldCarDesc, setGoldCarDesc] = useState("N/A");
  const [goldCarPrice, setGoldCarPrice] = useState("0");
  const [goldAdditionalInfo, setGoldAdditionalInfo] = useState("N/A");

  const sellerEamil = Cookie.get("sellerEmail");
  const sellerProfilePic = Cookie.get("sellerProfilePic");

  const navigate = useNavigate();

  const handlePublish = async (e) => {
    e.preventDefault();

    console.log("My Updated Tour info is: ",tour);

    const response = await axios.post(
      `${process.env.REACT_APP_API_URL}/api/tourupdatedelete/${id}`,
      tour
    );

    console.log(response.data);
    navigate(Cookies.get('profilePath'));
  };

  const handleCoverFileUpload = (event) => {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", presetKey);
    axios
      .post(
        `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
        formData
      )
      .then((res) => {
        setCoverImage(res.data.secure_url);
      })
      .catch((err) => {
        console.log(err);
      });
  };

// A $( document ).ready() block.
$( document ).ready(function() {  
  //FOR BRONZE
  $("#bronze-photography").change(function() {
    if(this.checked) {
        $(".post-tour-categories-bronze-photography").show();
    }
    else {
      $(".post-tour-categories-bronze-photography").hide();
    }
  });
  $("#bronze-hotel").change(function() {
    if(this.checked) {
        $(".post-tour-categories-bronze-hotel").show();
    }
    else {
      $(".post-tour-categories-bronze-hotel").hide();
    }
  });
  $("#bronze-meal").change(function() {
    if(this.checked) {
        $(".post-tour-categories-bronze-meal").show();
    }
    else {
      $(".post-tour-categories-bronze-meal").hide();
    }
  });
  $("#bronze-car").change(function() {
    if(this.checked) {
        $(".post-tour-categories-bronze-car").show();
    }
    else {
      $(".post-tour-categories-bronze-car").hide();
    }
  });

  //FOR SILVER
  $("#silver-photography").change(function() {
    if(this.checked) {
        $(".post-tour-categories-silver-photography").show();
    }
    else {
      $(".post-tour-categories-silver-photography").hide();
    }
  });
  $("#silver-hotel").change(function() {
    if(this.checked) {
        $(".post-tour-categories-silver-hotel").show();
    }
    else {
      $(".post-tour-categories-silver-hotel").hide();
    }
  });
  $("#silver-meal").change(function() {
    if(this.checked) {
        $(".post-tour-categories-silver-meal").show();
    }
    else {
      $(".post-tour-categories-silver-meal").hide();
    }
  });
  $("#silver-car").change(function() {
    if(this.checked) {
        $(".post-tour-categories-silver-car").show();
    }
    else {
      $(".post-tour-categories-silver-car").hide();
    }
  });

  //FOR SILVER
  $("#gold-photography").change(function() {
    if(this.checked) {
        $(".post-tour-categories-gold-photography").show();
    }
    else {
      $(".post-tour-categories-gold-photography").hide();
    }
  });
  $("#gold-hotel").change(function() {
    if(this.checked) {
        $(".post-tour-categories-gold-hotel").show();
    }
    else {
      $(".post-tour-categories-gold-hotel").hide();
    }
  });
  $("#gold-meal").change(function() {
    if(this.checked) {
        $(".post-tour-categories-gold-meal").show();
    }
    else {
      $(".post-tour-categories-gold-meal").hide();
    }
  });
  $("#gold-car").change(function() {
    if(this.checked) {
        $(".post-tour-categories-gold-car").show();
    }
    else {
      $(".post-tour-categories-gold-car").hide();
    }
  });
});
const TourDetail = {
    title: "N/A",
    description: "N/A",
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
    goldAddInfo: "N/A",
    source: "N/A",
    destination: "N/A",
  };

const [tour, setTour] = useState(TourDetail);

useEffect(() => {
        
    const fetchData = async () => {
        try {
          const tourResponse = await axios.get(`${process.env.REACT_APP_API_URL}/api/tour/${id}`);
          const tourData = tourResponse.data;
          setTour(tourData);
        } catch (err) {
          console.log(err);
        }
      };
      
      fetchData();
}, []);
  return (
    <>
      <div className="post-tour-main-container">
        <div className="post-tour-inside-container">
          <div className="post-tour-navbar">
            <Navbar style={styles} />
          </div>
          <div className="post-tour-basic-form">
            <Form className="post-tour-basic-form-title">
              <b>
                {" "}
                <Form.Item
                  label="Title"
                  name="title"
                  style={{ margin: "0" }}
                ></Form.Item>
              </b>
              <Input
                placeholder="Enter the title of the Tour"
                style={{ padding: "1rem" }}
                value={tour.title}
                onChange={(e) => setTour({...tour, title: e.target.value})}
              ></Input>
              <b>
                {" "}
                <Form.Item
                  label="Description"
                  name="desc"
                  style={{ margin: "0" }}
                ></Form.Item>
              </b>
              <Input
                placeholder="Please provide the complete description of the Tour"
                value={tour.description}
                onChange={(e) => setTour({...tour, description: e.target.value})}
                type="text"
                style={{ height: "7rem", margin: "0" }}
              ></Input>
              <b>
                {" "}
                <Form.Item
                  label="Base Price"
                  name="basePrice"
                  style={{ margin: "0" }}
                ></Form.Item>
              </b>
              <Input
                placeholder="Enter the Base Price of the Tour"
                style={{ padding: "1rem" }}
                value={tour.basePrice}
                onChange={(e) => setTour({...tour, basePrice: e.target.value})}
              ></Input>
              <b>
                {" "}
                <Form.Item
                  label="Starting Location"
                  name="startLocation"
                  style={{ margin: "0" }}
                ></Form.Item>
              </b>
              <Input
                placeholder="Enter the Starting location of the Tour"
                style={{ padding: "1rem" }}
                value={tour.source}
                onChange={(e) => setTour({...tour, source: e.target.value})}
              ></Input>
              <b>
                {" "}
                <Form.Item
                  label="Destination Location"
                  name="destinationLocation"
                  style={{ margin: "0" }}
                ></Form.Item>
              </b>
              <Input
                placeholder="Enter the Destination location of the Tour"
                style={{ padding: "1rem" }}
                value={tour.destination}
                onChange={(e) => setTour({...tour, destination: e.target.value})}
              ></Input>

              <div className="post-tour-categories">
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
                        <div className="post-tour-categories-bronze">
                          <div className="checkbox-post-tour bronze-photography">
                            <input type="checkbox" id="bronze-photography" className="photography-service" name="bronze-photography" value="bronze-photography"/>
                            <label htmlFor="Bronze Photography"> <b>Bronze Photography</b> </label><br/>
                          </div>              
                          <div className="post-tour-categories-bronze-photography">
                            <fieldset>
                              <legend>Bronze Photography</legend>
                              <b>
                                {" "}
                                <Form.Item
                                  label="Bronze Photography Description"
                                  name="bronzePhotographyDesc"
                                  style={{ margin: "0" }}
                                ></Form.Item>
                              </b>
                              <Input
                                placeholder="Enter the description of the bronze Photography service"
                                style={{ height:"4rem", padding: "1rem" }}
                                value={tour.bronzePhotographyDesc}
                                onChange={(e) => setTour({...tour, bronzePhotographyDesc: e.target.value})}
                              ></Input>
                              <b>
                                <Form.Item
                                  label="Bronze Photography Price"
                                  name="bronzePhotographyPrice"
                                  style={{ margin: "0" }}
                                ></Form.Item>
                              </b>
                              <Input
                                placeholder="Please provide the charges of the bronze Photography service"
                                value={tour.bronzePhotographyPrice}
                                onChange={(e) => setTour({...tour, bronzePhotographyPrice: e.target.value})}
                                type="text"
                                style={{margin: "0" }}
                              ></Input>
                            </fieldset>
                          </div>
                          <div className="checkbox-post-tour bronze-hotel">
                            <input type="checkbox" id="bronze-hotel" className="hotel-service" name="bronze-hotel" value="bronze-hotel"/>
                            <label htmlFor="Bronze Hotel"> <b>Bronze Hotel</b> </label><br/>
                          </div> 
                          <div className="post-tour-categories-bronze-hotel">
                            <fieldset>
                              <legend>Bronze Hotel</legend>
                              <b>
                                {" "}
                                <Form.Item
                                  label="Bronze Hotel Description"
                                  name="bronzeHotelDesc"
                                  style={{ margin: "0" }}
                                ></Form.Item>
                              </b>
                              <Input
                                placeholder="Enter the description of the bronze hotel service"
                                style={{ height:"4rem", padding: "1rem" }}
                                value={tour.bronzeHotelDesc}
                                onChange={(e) => setTour({...tour, bronzeHotelDesc: e.target.value})}
                              ></Input>
                              <b>
                                <Form.Item
                                  label="Bronze Hotel Price"
                                  name="bronzeHotelPrice"
                                  style={{ margin: "0" }}
                                ></Form.Item>
                              </b>
                              <Input
                                placeholder="Please provide the charges of the bronze hotel service"
                                value={tour.bronzeHotelPrice}
                                onChange={(e) => setTour({...tour, bronzeHotelPrice: e.target.value})}
                                type="text"
                                style={{margin: "0" }}
                              ></Input>
                            </fieldset>
                          </div>
                          <div className="checkbox-post-tour bronze-meal">
                            <input type="checkbox" id="bronze-meal" name="bronze-meal" className="meal-service" value="bronze-meal"/>
                            <label htmlFor="Bronze Meal"> <b>Bronze Meal</b> </label><br/>
                          </div> 
                          <div className="post-tour-categories-bronze-meal">
                            <fieldset>
                              <legend>Bronze Meal</legend>
                              <b>
                                {" "}
                                <Form.Item
                                  label="Bronze Meal Description"
                                  name="bronzeMealDesc"
                                  style={{ margin: "0" }}
                                ></Form.Item>
                              </b>
                              <Input
                                placeholder="Enter the description of the bronze meal service"
                                style={{ height:"4rem", padding: "1rem" }}
                                value={tour.bronzeMealDesc}
                                onChange={(e) => setTour({...tour, bronzeMealDesc: e.target.value})}
                              ></Input>
                              <b>
                                <Form.Item
                                  label="Bronze Meal Price"
                                  name="bronzeMealPrice"
                                  style={{ margin: "0" }}
                                ></Form.Item>
                              </b>
                              <Input
                                placeholder="Please provide the charges of the bronze meal service"
                                value={tour.bronzeMealPrice}
                                onChange={(e) => setTour({...tour, bronzeMealPrice: e.target.value})}
                                type="text"
                                style={{margin: "0" }}
                              ></Input>
                            </fieldset>
                          </div>
                          <div className="checkbox-post-tour bronze-car">
                            <input type="checkbox" id="bronze-car" name="bronze-car" className="car-service" value="bronze-car"/>
                            <label htmlFor="Bronze car"> <b>Bronze Car</b> </label><br/>
                          </div> 
                          <div className="post-tour-categories-bronze-car">
                            <fieldset>
                              <legend>Bronze Car</legend>
                              <b>
                                {" "}
                                <Form.Item
                                  label="Bronze Car Description"
                                  name="bronzeCarDesc"
                                  style={{ margin: "0" }}
                                ></Form.Item>
                              </b>
                              <Input
                                placeholder="Enter the description of the bronze car service"
                                style={{ height:"4rem", padding: "1rem" }}
                                value={tour.bronzeCarDesc}
                                onChange={(e) => setTour({...tour, bronzeCarDesc: e.target.value})}
                              ></Input>
                              <b>
                                <Form.Item
                                  label="Bronze Car Price"
                                  name="bronzeCarPrice"
                                  style={{ margin: "0" }}
                                ></Form.Item>
                              </b>
                              <Input
                                placeholder="Please provide the charges of the bronze car service"
                                value={tour.bronzeCarPrice}
                                onChange={(e) => setTour({...tour, bronzeCarPrice: e.target.value})}
                                type="text"
                                style={{margin: "0" }}
                              ></Input>
                            </fieldset>
                          </div>
                          <div className="post-tour-categories-bronze-aditionalInfo">
                            <fieldset>
                              <legend>Bronze Aditional Info</legend>
                              <b>
                                {" "}
                                <Form.Item
                                  label="Bronze Aditional Info"
                                  name="bronzeAditionalInfo"
                                  style={{ margin: "0" }}
                                ></Form.Item>
                              </b>
                              <Input
                                placeholder="Enter the additional info of bronze package"
                                style={{ height:"4rem", padding: "1rem" }}
                                value={tour.bronzeAddInfo}
                                onChange={(e) => setTour({...tour, bronzeAddInfo: e.target.value})}
                              ></Input>
                            </fieldset>
                          </div>
                        </div>                  
                    </div>
                    <div className="tab-pane" id="tabs-2" role="tabpanel">
                        <div className="post-tour-categories-silver">
                          <div className="checkbox-post-tour silver-photography">
                            <input type="checkbox" id="silver-photography" className="photography-service" name="Silver-photography" value="Silver-photography"/>
                            <label htmlFor="Silver photography"> <b>Silver Photography</b> </label><br/>
                          </div> 
                          <div className="post-tour-categories-silver-photography">
                            <fieldset>
                              <legend>Photography</legend>
                              <b>
                                {" "}
                                <Form.Item
                                  label="Silver Photography Description"
                                  name="silverPhotographyDesc"
                                  style={{ margin: "0" }}
                                ></Form.Item>
                              </b>
                              <Input
                                placeholder="Enter the description of the Silver Photography service"
                                style={{ height:"4rem", padding: "1rem" }}
                                value={tour.silverPhotographyDesc}
                                onChange={(e) => setTour({...tour, silverPhotographyDesc: e.target.value})}
                              ></Input>
                              <b>
                                <Form.Item
                                  label="Silver Photography Price"
                                  name="silverPhotographyPrice"
                                  style={{ margin: "0" }}
                                ></Form.Item>
                              </b>
                              <Input
                                placeholder="Please provide the charges of the Silver Photography service"
                                value={tour.silverPhotographyPrice}
                onChange={(e) => setTour({...tour, silverPhotographyPrice: e.target.value})}
                                type="text"
                                style={{margin: "0" }}
                              ></Input>
                            </fieldset>
                          </div>
                          <div className="checkbox-post-tour silver-hotel">
                            <input type="checkbox" id="silver-hotel" className="hotel-service" name="Silver-hotel" value="Silver-hotel"/>
                            <label htmlFor="Silver hotel"> <b>Silver Hotel</b> </label><br/>
                          </div> 
                          <div className="post-tour-categories-silver-hotel">
                            <fieldset>
                              <legend>Silver Hotel</legend>
                              <b>
                                {" "}
                                <Form.Item
                                  label="Silver Hotel Description"
                                  name="silverHotelDesc"
                                  style={{ margin: "0" }}
                                ></Form.Item>
                              </b>
                              <Input
                                placeholder="Enter the description of the silver hotel service"
                                style={{ height:"4rem", padding: "1rem" }}
                                value={tour.silverHotelDesc}
                onChange={(e) => setTour({...tour, silverHotelDesc: e.target.value})}
                              ></Input>
                              <b>
                                <Form.Item
                                  label="Silver Hotel Price"
                                  name="silverHotelPrice"
                                  style={{ margin: "0" }}
                                ></Form.Item>
                              </b>
                              <Input
                                placeholder="Please provide the charges of the silver hotel service"
                                value={tour.silverHotelPrice}
                onChange={(e) => setTour({...tour, silverHotelPrice: e.target.value})}
                                type="text"
                                style={{margin: "0" }}
                              ></Input>
                            </fieldset>
                          </div>
                          <div className="checkbox-post-tour silver-meal">
                            <input type="checkbox" id="silver-meal" className="meal-service" name="Silver-meal" value="Silver-meal"/>
                            <label htmlFor="Silver meal"> <b>Silver Meal</b> </label><br/>
                          </div> 
                          <div className="post-tour-categories-silver-meal">
                            <fieldset>
                              <legend>Silver Meal</legend>
                              <b>
                                {" "}
                                <Form.Item
                                  label="Silver Meal Description"
                                  name="silverMealDesc"
                                  style={{ margin: "0" }}
                                ></Form.Item>
                              </b>
                              <Input
                                placeholder="Enter the description of the silver meal service"
                                style={{ height:"4rem", padding: "1rem" }}
                                value={tour.silverMealDesc}
                onChange={(e) => setTour({...tour, silverMealDesc: e.target.value})}
                              ></Input>
                              <b>
                                <Form.Item
                                  label="Silver Meal Price"
                                  name="silverMealPrice"
                                  style={{ margin: "0" }}
                                ></Form.Item>
                              </b>
                              <Input
                                placeholder="Please provide the charges of the silver meal service"
                                value={tour.silverMealPrice}
                onChange={(e) => setTour({...tour, silverMealPrice: e.target.value})}
                                type="text"
                                style={{margin: "0" }}
                              ></Input>
                            </fieldset>
                          </div>
                          <div className="checkbox-post-tour silver-car">
                            <input type="checkbox" id="silver-car" className="car-service" name="Silver-car" value="Silver-car"/>
                            <label htmlFor="Silver car"> <b>Silver Car</b> </label><br/>
                          </div>
                          <div className="post-tour-categories-silver-car">
                            <fieldset>
                              <legend>Silver Car</legend>
                              <b>
                                {" "}
                                <Form.Item
                                  label="Silver Car Description"
                                  name="silverCarDesc"
                                  style={{ margin: "0" }}
                                ></Form.Item>
                              </b>
                              <Input
                                placeholder="Enter the description of the silver car service"
                                style={{ height:"4rem", padding: "1rem" }}
                                value={tour.silverCarDesc}
                onChange={(e) => setTour({...tour, silverCarDesc: e.target.value})}
                              ></Input>
                              <b>
                                <Form.Item
                                  label="Silver Car Price"
                                  name="silverCarPrice"
                                  style={{ margin: "0" }}
                                ></Form.Item>
                              </b>
                              <Input
                                placeholder="Please provide the charges of the silver car service"
                                value={tour.silverCarPrice}
                onChange={(e) => setTour({...tour, silverCarPrice: e.target.value})}
                                type="text"
                                style={{margin: "0" }}
                              ></Input>
                            </fieldset>
                          </div>
                          <div className="post-tour-categories-silver-aditionalInfo">
                            <fieldset>
                              <legend>Silver Aditional Info</legend>
                              <b>
                                {" "}
                                <Form.Item
                                  label="Silver Aditional Info"
                                  name="silverAditionalInfo"
                                  style={{ margin: "0" }}
                                ></Form.Item>
                              </b>
                              <Input
                                placeholder="Enter the additional info of silver package"
                                style={{ height:"4rem", padding: "1rem" }}
                                value={tour.silverAddInfo}
                onChange={(e) => setTour({...tour, silverAddInfo: e.target.value})}
                              ></Input>
                            </fieldset>
                          </div>
                        </div>
                    </div>
                    <div className="tab-pane" id="tabs-3" role="tabpanel">
                        <div className="post-tour-categories-gold">
                          <div className="checkbox-post-tour gold-photography">
                            <input type="checkbox" id="gold-photography" className="photography-service" name="gold-photography" value="gold-photography"/>
                            <label htmlFor="gold photography"> <b>Gold Photography</b> </label><br/>
                          </div>
                          <div className="post-tour-categories-gold-photography">
                            <fieldset>
                              <legend>Gold Photography</legend>
                              <b>
                                {" "}
                                <Form.Item
                                  label="Gold Photography Description"
                                  name="goldPhotographyDesc"
                                  style={{ margin: "0" }}
                                ></Form.Item>
                              </b>
                              <Input
                                placeholder="Enter the description of the Gold Photography service"
                                style={{ height:"4rem", padding: "1rem" }}
                                value={tour.goldPhotographyDesc}
                onChange={(e) => setTour({...tour, goldPhotographyDesc: e.target.value})}
                              ></Input>
                              <b>
                                <Form.Item
                                  label="Gold Photography Price"
                                  name="goldPhotographyPrice"
                                  style={{ margin: "0" }}
                                ></Form.Item>
                              </b>
                              <Input
                                placeholder="Please provide the charges of the Gold Photography service"
                                value={tour.goldPhotographyPrice}
                onChange={(e) => setTour({...tour, goldPhotographyPrice: e.target.value})}
                                type="text"
                                style={{margin: "0" }}
                              ></Input>
                            </fieldset>
                          </div>
                          <div className="checkbox-post-tour gold-hotel">
                            <input type="checkbox" id="gold-hotel" className="hotel-service" name="gold-hotel" value="gold-hotel"/>
                            <label htmlFor="gold hotel"> <b>Gold Hotel</b> </label><br/>
                          </div>
                          <div className="post-tour-categories-gold-hotel">
                            <fieldset>
                              <legend>Gold Hotel</legend>
                              <b>
                                {" "}
                                <Form.Item
                                  label="Gold Hotel Description"
                                  name="goldHotelDesc"
                                  style={{ margin: "0" }}
                                ></Form.Item>
                              </b>
                              <Input
                                placeholder="Enter the description of the gold hotel service"
                                style={{ height:"4rem", padding: "1rem" }}
                                value={tour.goldHotelDesc}
                onChange={(e) => setTour({...tour, goldHotelDesc: e.target.value})}
                              ></Input>
                              <b>
                                <Form.Item
                                  label="Gold Hotel Price"
                                  name="goldHotelPrice"
                                  style={{ margin: "0" }}
                                ></Form.Item>
                              </b>
                              <Input
                                placeholder="Please provide the charges of the gold hotel service"
                                value={tour.goldHotelPrice}
                onChange={(e) => setTour({...tour, goldHotelPrice: e.target.value})}
                                type="text"
                                style={{margin: "0" }}
                              ></Input>
                            </fieldset>
                          </div>
                          <div className="checkbox-post-tour gold-meal">
                            <input type="checkbox" id="gold-meal" className="meal-service" name="gold-meal" value="gold-meal"/>
                            <label htmlFor="gold meal"> <b>Gold Meal</b> </label><br/>
                          </div>
                          <div className="post-tour-categories-gold-meal">
                            <fieldset>
                              <legend>Gold Meal</legend>
                              <b>
                                {" "}
                                <Form.Item
                                  label="Gold Meal Description"
                                  name="goldMealDesc"
                                  style={{ margin: "0" }}
                                ></Form.Item>
                              </b>
                              <Input
                                placeholder="Enter the description of the gold meal service"
                                style={{ height:"4rem", padding: "1rem" }}
                                value={tour.goldMealDesc}
                onChange={(e) => setTour({...tour, goldMealDesc: e.target.value})}
                              ></Input>
                              <b>
                                <Form.Item
                                  label="Gold Meal Price"
                                  name="goldMealPrice"
                                  style={{ margin: "0" }}
                                ></Form.Item>
                              </b>
                              <Input
                                placeholder="Please provide the charges of the gold meal service"
                                value={tour.goldMealPrice}
                onChange={(e) => setTour({...tour, goldMealPrice: e.target.value})}
                                type="text"
                                style={{margin: "0" }}
                              ></Input>
                            </fieldset>
                          </div>
                          <div className="checkbox-post-tour gold-car">
                            <input type="checkbox" id="gold-car" className="car-service" name="gold-car" value="gold-car"/>
                            <label htmlFor="gold car"> <b>Gold Car</b> </label><br/>
                          </div>
                          <div className="post-tour-categories-gold-car">
                            <fieldset>
                              <legend>Gold Car</legend>
                              <b>
                                {" "}
                                <Form.Item
                                  label="Gold Car Description"
                                  name="goldCarDesc"
                                  style={{ margin: "0" }}
                                ></Form.Item>
                              </b>
                              <Input
                                placeholder="Enter the description of the gold car service"
                                style={{ height:"4rem", padding: "1rem" }}
                                value={tour.goldCarDesc}
                onChange={(e) => setTour({...tour, goldCarDesc: e.target.value})}
                              ></Input>
                              <b>
                                <Form.Item
                                  label="Gold Car Price"
                                  name="goldCarPrice"
                                  style={{ margin: "0" }}
                                ></Form.Item>
                              </b>
                              <Input
                                placeholder="Please provide the charges of the gold car service"
                                value={tour.goldCarPrice}
                onChange={(e) => setTour({...tour, goldCarPrice: e.target.value})}
                                type="text"
                                style={{margin: "0" }}
                              ></Input>
                            </fieldset>
                          </div>
                          <div className="post-tour-categories-gold-aditionalInfo">
                            <fieldset>
                              <legend>Gold Aditional Info</legend>
                              <b>
                                {" "}
                                <Form.Item
                                  label="Gold Aditional Info"
                                  name="goldAditionalInfo"
                                  style={{ margin: "0" }}
                                ></Form.Item>
                              </b>
                              <Input
                                placeholder="Enter the additional info of gold package"
                                style={{ height:"4rem", padding: "1rem" }}
                                value={tour.goldAddInfo}
                onChange={(e) => setTour({...tour, goldAddInfo: e.target.value})}
                              ></Input>
                            </fieldset>
                          </div>
                        </div>
                    </div>
                </div>
              </div>

              <button className="btn btn-primary submit" onClick={handlePublish}>Submit</button>
            </Form>
          </div>
          
        </div>
        <Footer />
      </div>
    </>
  );
}
