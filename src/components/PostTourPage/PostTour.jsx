import React, { useState } from "react";
import "antd/dist/reset.css";
import "./PostTour.css";
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
const styles = {
  color: "black",
};
export default function PostTour() {
  const presetKey = "bvifyafi";
  const cloudName = "dbrp1arte";
  const [coverImage, setCoverImage] = useState({});
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [basePrice, setBasePrice] = useState("");
  
  const sellerEamil = Cookie.get("sellerEmail");
  const sellerProfilePic = Cookie.get("sellerProfilePic");

  const handlePublish = async (e) => {
    e.preventDefault();
    const tourInfo = {
      title: title,
      desc: desc,
      coverImage: coverImage,
      basePrice: basePrice,
      sellerEmail: sellerEamil,
      sellerProfilePic: sellerProfilePic,
    };

    const response = await axios.post(
      `http://localhost:3500/api/tour/`,
      tourInfo
    );
    console.log(response.data);
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
                onChange={(e) => setTitle(e.target.value)}
              ></Input>
              <b>
                <Form.Item
                  label="Description"
                  name="desc"
                  style={{ margin: "0" }}
                ></Form.Item>
              </b>
              <Input
                placeholder="Please provide the complete description of the Tour"
                onChange={(e) => setDesc(e.target.value)}
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
                onChange={(e) => setBasePrice(e.target.value)}
              ></Input>

              <div className="post-tour-cover-photo">
                <h4>Cover Photo</h4>
                <div className="post-tour-cover-photo-upload-section">
                  <h4>Drag File To Upload</h4>
                  <p>OR</p>
                  <input
                    type="file"
                    name="coverImage"
                    onChange={handleCoverFileUpload}
                  ></input>
                </div>
              </div>

              <div className="post-tour-categories">
                <Tabs>
                  <Tabs.TabPane tab="Bronze" key="bronze">
                    <div className="post-tour-categories-bronze">
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
                            // onChange={(e) => setTitle(e.target.value)}
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
                            // onChange={(e) => setDesc(e.target.value)}
                            type="text"
                            style={{margin: "0" }}
                          ></Input>
                        </fieldset>
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
                            // onChange={(e) => setTitle(e.target.value)}
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
                            // onChange={(e) => setDesc(e.target.value)}
                            type="text"
                            style={{margin: "0" }}
                          ></Input>
                        </fieldset>
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
                            // onChange={(e) => setTitle(e.target.value)}
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
                            // onChange={(e) => setDesc(e.target.value)}
                            type="text"
                            style={{margin: "0" }}
                          ></Input>
                        </fieldset>
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
                            // onChange={(e) => setTitle(e.target.value)}
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
                            // onChange={(e) => setDesc(e.target.value)}
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
                            // onChange={(e) => setTitle(e.target.value)}
                          ></Input>
                        </fieldset>
                      </div>
                    </div>
                  </Tabs.TabPane>

                  <Tabs.TabPane tab="Silver" key="silver">
                    <div className="post-tour-categories-silver">
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
                            // onChange={(e) => setTitle(e.target.value)}
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
                            // onChange={(e) => setDesc(e.target.value)}
                            type="text"
                            style={{margin: "0" }}
                          ></Input>
                        </fieldset>
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
                            // onChange={(e) => setTitle(e.target.value)}
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
                            // onChange={(e) => setDesc(e.target.value)}
                            type="text"
                            style={{margin: "0" }}
                          ></Input>
                        </fieldset>
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
                            // onChange={(e) => setTitle(e.target.value)}
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
                            // onChange={(e) => setDesc(e.target.value)}
                            type="text"
                            style={{margin: "0" }}
                          ></Input>
                        </fieldset>
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
                            // onChange={(e) => setTitle(e.target.value)}
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
                            // onChange={(e) => setDesc(e.target.value)}
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
                            // onChange={(e) => setTitle(e.target.value)}
                          ></Input>
                        </fieldset>
                      </div>
                    </div>
                  </Tabs.TabPane>

                  <Tabs.TabPane tab="Gold" key="gold">
                    <div className="post-tour-categories-gold">
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
                            // onChange={(e) => setTitle(e.target.value)}
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
                            // onChange={(e) => setDesc(e.target.value)}
                            type="text"
                            style={{margin: "0" }}
                          ></Input>
                        </fieldset>
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
                            // onChange={(e) => setTitle(e.target.value)}
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
                            // onChange={(e) => setDesc(e.target.value)}
                            type="text"
                            style={{margin: "0" }}
                          ></Input>
                        </fieldset>
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
                            // onChange={(e) => setTitle(e.target.value)}
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
                            // onChange={(e) => setDesc(e.target.value)}
                            type="text"
                            style={{margin: "0" }}
                          ></Input>
                        </fieldset>
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
                            // onChange={(e) => setTitle(e.target.value)}
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
                            // onChange={(e) => setDesc(e.target.value)}
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
                            // onChange={(e) => setTitle(e.target.value)}
                          ></Input>
                        </fieldset>
                      </div>
                    </div>
                  </Tabs.TabPane>
                </Tabs>
              </div>

              
            </Form>
          </div>
          <button className="btn btn-primary" onClick={handlePublish}>Submitt</button>
        </div>
        <Footer />
      </div>
    </>
  );
}
