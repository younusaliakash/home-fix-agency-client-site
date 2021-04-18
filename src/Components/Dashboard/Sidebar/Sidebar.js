import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCog,
  faSignOutAlt,
  faUserPlus,
  faClipboardList,
  faListUl,
} from "@fortawesome/free-solid-svg-icons";
import {
  faCalendarCheck,
  faFileAlt,
  faStar,
} from "@fortawesome/free-regular-svg-icons";
import { UserContext } from "../../../App";

const Sidebar = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [isAdmin, setAdmin] = useState(false);

  const handleLogOut = () => {
    setLoggedInUser("");
  };
  useEffect(() => {
    fetch("https://pure-ocean-97370.herokuapp.com/isAdmin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: loggedInUser.email }),
    })
      .then((res) => res.json())
      .then((data) => setAdmin(data));
  }, [loggedInUser.email]);

  return (
    <div
      className="sidebar d-flex flex-column justify-content-between py-5 px-4"
      style={{ height: "100vh" }}
    >
      <ul className="list-unstyled">
        {!isAdmin ? (
          <div>
            <li>
              <Link to="/servicesPage" className="text-dark">
                <FontAwesomeIcon icon={faCalendarCheck} /> <span>Book</span>
              </Link>
            </li>
            <li>
              <Link to="/bookingList" className="text-dark">
                <FontAwesomeIcon icon={faClipboardList} />{" "}
                <span>Booking List</span>
              </Link>
            </li>
            <li>
              <Link to="/reviewForm" className="text-dark">
                <FontAwesomeIcon icon={faStar} /> <span>Review</span>
              </Link>
            </li>
          </div>
        ) : (
          <div>
            <li>
              <Link to="/orderList" className="text-dark">
                <FontAwesomeIcon icon={faListUl} /> <span>Order List</span>
              </Link>
            </li>
            <li>
              <Link to="/addServices" className="text-dark">
                <FontAwesomeIcon icon={faFileAlt} /> <span>Add Services</span>
              </Link>
            </li>
            <li>
              <Link to="/makeAdmin" className="text-dark">
                <FontAwesomeIcon icon={faUserPlus} /> <span>Make Admin</span>
              </Link>
            </li>
            <li>
              <Link to="/manageOrders" className="text-dark">
                <FontAwesomeIcon icon={faCog} /> <span>Manage Services</span>
              </Link>
            </li>
          </div>
        )}
      </ul>
      <div>
        <Link onClick={handleLogOut} className="btn btn-default text-white">
          <FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
