import React from "react";
import { Card } from "react-bootstrap";
import "./ServiceCard.css";
import { Link } from "react-router-dom";

const ServiceCard = (props) => {
  const { serviceTitle, image, price, description } = props.service;
  console.log(props.service);
  return (
    <Card className="col-md-4 service-card">
      <div className="body">
        <Card.Img
          className="img-fluid"
          variant="top"
          src="https://i1.wp.com/www.remodelingcalculator.org/wp-content/uploads/plumbing-costs-1.jpg?fit=1200%2C801&ssl=1"
        />
        <Card.Body>
          <Card.Title className="service-title">{serviceTitle}</Card.Title>
          <p>${price}</p>
          <Card.Text className="service-description">{description}</Card.Text>
          <Link className="btn btn-warning get-btn" to="/">GET SERVICE</Link>
        </Card.Body>
      </div>
    </Card>
  );
};

export default ServiceCard;
