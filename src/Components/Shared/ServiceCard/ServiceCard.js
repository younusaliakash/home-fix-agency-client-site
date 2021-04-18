import React from "react";
import { Card } from "react-bootstrap";
import "./ServiceCard.css";
import { Link } from "react-router-dom";

const ServiceCard = (props) => {
  const { _id, serviceTitle, image, price, description } = props.service;
  return (
    <Card className="col-md-4 service-card">
      <div className="body">
        <Card.Img
          className="img-fluid"
          variant="top"
          src={`data:image/jpeg;base64,${image.img}`}
        />
        <Card.Body>
          <Card.Title className="service-title">{serviceTitle}</Card.Title>
          <p className="service_price">${price}</p>
          <Card.Text className="service-description">{description}</Card.Text>
          <Link to={`/booking/${_id}`}className="btn btn-warning get-btn">GET SERVICE</Link>
        </Card.Body>
      </div>
    </Card>
  );
};

export default ServiceCard;
