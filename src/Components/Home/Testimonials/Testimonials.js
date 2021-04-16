import React from "react";
import Reviews from "../Reviews/Reviews";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const reviewsData = [
  {
    name: "Younus Ali Akash",
    img: "",
    title: "Developer",
    reviewsText:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti, corrupti.",
    ratting: 5,
  },
  {
    name: "Younus Ali Akash",
    img: "",
    title: "Developer",
    reviewsText:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti, corrupti.",
    ratting: 5,
  },
  {
    name: "Younus Ali Akash",
    img: "",
    title: "Developer",
    reviewsText:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti, corrupti.",
    ratting: 5,
  },
  {
    name: "Younus Ali Akash",
    img: "",
    title: "Developer",
    reviewsText:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti, corrupti.",
    ratting: 5,
  },
];

const Testimonials = () => {
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
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
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
              {reviewsData?.map((reviews) => (
            <Reviews />
          ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
