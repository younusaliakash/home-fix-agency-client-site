import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./SuccessRating.css";
import { faMale, faUsers } from "@fortawesome/free-solid-svg-icons";
import { faStar, faThumbsUp } from "@fortawesome/free-regular-svg-icons";
import CountUp from "react-countup";

const SuccessRating = () => {
  return (
    <div className="success-Rating-container">
      <div className="title-container">
        <div className="section-title">
          <h1>
            <span>OUR SUCCESS</span>
          </h1>
          <h6>What We have Done</h6>
        </div>
      </div>
      <div className="container">
        <div className="row my-5">
          <div className="col-md-3">
            <div className="success-rating-counter">
              <FontAwesomeIcon
                className="success-subject-icon"
                icon={faUsers}
              />
              <div className="success-title">
                <h6>
                  <span>HAPPY CLIENTS</span>
                </h6>
                <h4>
                  <CountUp end={45} />+
                </h4>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="success-rating-counter">
              <FontAwesomeIcon
                className="success-subject-icon"
                icon={faThumbsUp}
              />
              <div className="success-title">
                <h6>
                  <span>PROJECTS COMPLETED</span>
                </h6>
                <h4>
                  <CountUp end={225} />+
                </h4>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="success-rating-counter">
              <FontAwesomeIcon className="success-subject-icon" icon={faStar} />
              <div className="success-title">
                <h6>
                  <span>AVERAGE RATINGS</span>
                </h6>
                <h4>
                  <CountUp end={4} />+
                </h4>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="success-rating-counter">
              <FontAwesomeIcon className="success-subject-icon" icon={faMale} />
              <div className="success-title">
                <h6>
                  <span>QUALIFIED STAFS</span>
                </h6>
                <h4>
                  <CountUp end={28} />+
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessRating;
