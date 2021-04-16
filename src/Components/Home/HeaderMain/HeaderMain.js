import React from "react";
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import plumber from "../../../images/plumberCover.png";
import handyman from "../../../images/handymanCover.png";
import "./HeaderMain.css";

const HeaderMain = () => {
  return (
    <div className="carousel-container">
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={handyman} alt="First slide" />
          <Carousel.Caption>
            <div className="caption">
              <h3>We Take care of</h3>
              <h1>Your Home!</h1>
              <Link className="nav-item btn btn-warning service-btn" to="/">
                GET SERVICES{" "}
              </Link>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 h-50"
            src={plumber}
            alt="Second slide"
          />
          <Carousel.Caption>
            <div className="caption">
              <h3>We Take care of</h3>
              <h1>Your Home!</h1>
              <Link className="nav-item btn btn-warning service-btn" to="/">
                GET SERVICES{" "}
              </Link>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default HeaderMain;
