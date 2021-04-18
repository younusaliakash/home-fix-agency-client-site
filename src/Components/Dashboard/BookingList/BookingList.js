import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { Badge } from "react-bootstrap";
import { UserContext } from "../../../App";
import DashboardHeader from "../DashboardHeader/DashboardHeader";
import Sidebar from "../Sidebar/Sidebar";
import "./BookingList.css";

const BookingList = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [bookingList, setBookingList] = useState([]);

  useEffect(() => {
    fetch(`https://pure-ocean-97370.herokuapp.com/bookingList?email=${loggedInUser.email}`)
      .then((response) => response.json())
      .then((data) => setBookingList(data));
  }, [loggedInUser.email]);

  return (
    <section className="container">
      <div className="row">
        <div className="col-md-2 col-sm-6 col-12">
          <Sidebar></Sidebar>
        </div>
        <div className="col-md-10 col-sm-12 col-12">
          <DashboardHeader pageName="Booking List" />
          <div className="container">
            <div className="dashboard-action-area">
              <div className="row">
                {bookingList?.map((service) => (
                  <div className="col-md-6 mb-2">
                    <div className="card-header">
                      <div className="service-card-top d-flex justify-content-between align-items-center">
                        <img
                          src="https://pbs.twimg.com/profile_images/1186730813481771009/5nr7GAhq.jpg"
                          alt=""
                        />
                        <h5>{service.serviceTitle}</h5>
                      </div>
                      <div className="bottom-description d-flex justify-content-between align-items-center m-2">
                        <h4>
                          <Badge variant="info">$ {service.price}</Badge>
                        </h4>
                        <h4>
                          <Badge variant="warning">
                            {service.bookingStatus}
                          </Badge>
                        </h4>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingList;
