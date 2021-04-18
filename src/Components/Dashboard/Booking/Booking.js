import React from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Badge, Form } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { UserContext } from "../../../App";
import DashboardHeader from "../DashboardHeader/DashboardHeader";
import PaymentSystem from "../PaymentSystem/PaymentSystem";
import Sidebar from "../Sidebar/Sidebar";
import "./Booking.css";

const Booking = () => {
  const { _id } = useParams();
  const [serviceInfo, setServicesInfo] = useState({});
  const [bookingAddress, setbookingAddress] = useState({
    address: "",
    phone: "",
  });

  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const { displayName, email, photo } = loggedInUser;
  const { serviceTitle, description, image, price } = serviceInfo;

  const handleChange = (e) => {
    const newBook = { ...bookingAddress };
    newBook[e.target.name] = e.target.value;
    setbookingAddress(newBook);
  };

  useEffect(() => {
    fetch(`https://pure-ocean-97370.herokuapp.com/getService/${_id}`)
      .then((res) => res.json())
      .then((data) => setServicesInfo(data[0]));
  }, [_id]);

  const handlePaymentSuccess = (paymentId) => {
    const bookingDetails = {
      ...bookingAddress,
      paymentId,
      bookingHolder: displayName,
      email: email,
      photo: photo,
      serviceTitle: serviceTitle,
      description: description,
      bookingStatus: "Pending",
      price: price,
      date: new Date(),
    };
    fetch("https://pure-ocean-97370.herokuapp.com/addBooking", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(bookingDetails),
    }).then((result) => {
      alert("Booking Done successfully!");
    });
  };

  return (
    <section className="container">
      <div className="row">
        <div className="col-md-2 col-sm-6 col-12">
          <Sidebar></Sidebar>
        </div>
        <div className="col-md-10 col-sm-12 col-12">
          <DashboardHeader pageName="Booking" />
          <div className="conatiner">
            <div className="dashboard-action-area">
              <div className="row">
                <div className="col-md-6 d-flex justify-content-between m-2">
                  <h3 className="text-success font-weight-bold">
                    {serviceInfo.serviceTitle}
                  </h3>
                  <h4>
                    <Badge variant="secondary">${serviceInfo.price}</Badge>
                  </h4>
                </div>
              </div>
              <Form>
                <Form.Group className="col-6" controlId="formGroupEmail">
                  <Form.Control
                    name="name"
                    type="text"
                    placeholder="Enter name"
                    defaultValue={loggedInUser.displayName}
                    disabled
                  />
                </Form.Group>
                <Form.Group className="col-6" controlId="formGroupPassword">
                  <Form.Control
                    type="text"
                    name="email"
                    defaultValue={loggedInUser.email}
                    placeholder="Email email"
                    disabled
                  />
                </Form.Group>
                <Form.Group className="col-6" controlId="formGroupPassword">
                  <Form.Control
                    type="text"
                    name="serviceName"
                    placeholder="Email Service name"
                    defaultValue={serviceInfo.serviceTitle}
                    disabled
                  />
                </Form.Group>
                <Form.Group className="col-6" controlId="formGroupPassword">
                  <Form.Control
                    name="address"
                    onChange={handleChange}
                    type="text"
                    placeholder="Address"
                    required
                  />
                </Form.Group>
                <Form.Group className="col-6" controlId="formGroupPassword">
                  <Form.Control
                    name="phone"
                    onChange={handleChange}
                    type="text"
                    placeholder="Phone number"
                    required
                  />
                </Form.Group>
              </Form>
              <div className="payment-process row">
                <div className="col-md-6 m-3">
                  <h5>Pay</h5>
                  <PaymentSystem handlePayment={handlePaymentSuccess} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;
