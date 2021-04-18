import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useState } from "react";
import { useEffect } from "react";
import { Card } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Testimonials.css'
import { faStar } from "@fortawesome/free-solid-svg-icons";


const Testimonials = () => {
  const [allReviews, setAllreviews] = useState([]);

  useEffect(() => {
    fetch("https://pure-ocean-97370.herokuapp.com/reviews")
      .then((response) => response.json())
      .then((data) => setAllreviews(data));
  }, []);
 

  const settings = {
    dots: true,
    arrow: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <div className="title-container">
        <div className="section-title">
          <h1>
            <span>OUR TESTIMONIALS</span>
          </h1>
          <h6>What Other's Say</h6>
        </div>
      </div>
      <div className="container">
        <div className="row mt-5">
          <div className="col-md-12">
            <Slider {...settings}>
              {allReviews?.map((review) => (
                <Card className="service-card">
                  <div className="body-inner review">
                    <div className="card-picture">
                      <Card.Img
                        className="avater"
                        variant="top"
                        src={review.photo}
                      />
                    </div>
                    <Card.Body>
                      <Card.Title className="name-title">{review.displayName}</Card.Title>
                      <p>{review.title}</p>
                      <p className="review-ratting">
                      <FontAwesomeIcon className="filled" icon={faStar} />
                      <FontAwesomeIcon className="filled" icon={faStar} />
                      <FontAwesomeIcon className="filled" icon={faStar} />
                      <FontAwesomeIcon className="filled" icon={faStar} />
                      <FontAwesomeIcon className="filled" icon={faStar} />
                      </p>
                      <Card.Text className="service-description">
                        {review.description}
                      </Card.Text>
                    </Card.Body>
                  </div>
                </Card>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
