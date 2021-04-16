import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarCheck,
  faFire,
  faMapMarkerAlt,
  faTools,
} from "@fortawesome/free-solid-svg-icons";
import "./TopAddressBar.css";

const TopAddressBar = () => {
  return (
    <div>
      <div className="top-area">
        <div className="container">
          <div className="address row">
            <div className="left-side col-md-3">
              <span>
                <FontAwesomeIcon className="top-icon" icon={faMapMarkerAlt} />
                NEW YORK, USA
              </span>
            </div>
            <div className="middle-side col-md-4">
              <span>
                <FontAwesomeIcon className="top-icon" icon={faCalendarCheck} />
                BOOK ONLINE
              </span>
              <span>
                <FontAwesomeIcon className="top-icon" icon={faTools} />
                GET ON ESTIMATE
              </span>
            </div>
            <div className="right-side col-md-5">
              <span>
                <FontAwesomeIcon className="top-icon" icon={faFire} />
                EMERGENCY SERVICES - (+91) 012-654-7890
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopAddressBar;
