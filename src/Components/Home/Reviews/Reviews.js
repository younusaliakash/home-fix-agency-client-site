import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Reviews.css";


const Reviews = (props) => {
  // console.log(props)
    // const [displayName] = props.reviews
  return (
    <Card className="service-card">
      <div className="body review">
        <div className="card-picture">
        <Card.Img
          className="avater"
          variant="top"
          src="https://lh3.googleusercontent.com/ogw/ADGmqu__M6_7YXX_b1CUQ35Tf89WfmV0sVhnD6fqwKJa=s83-c-mo"
        />
        </div>
        <Card.Body>
          <Card.Title className="service-title">;flhl</Card.Title>
          <p>$fhgfhdf</p>
          <Card.Text className="service-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, obcaecati.</Card.Text>
        </Card.Body>
      </div>
    </Card>
  );
};



export default Reviews;
