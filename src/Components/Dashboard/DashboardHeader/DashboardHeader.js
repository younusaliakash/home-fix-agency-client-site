import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../../App";
import "./DashboardHeader.css";

const DashboardHeader = ({ pageName }) => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  return (
    <div className="dashboard-page-header">
      <div>
        <h1 className="dashboard-page-header-title">{pageName}</h1>
      </div>
      <div>
        <Link className="dashboard-nav" to="/">
          {" "}
          Return Home
        </Link>
        {loggedInUser.email && <i>Log in as : </i>}
        {loggedInUser.photo && (
          <img
            className="mx-1"
            style={{ height: "35px", width: "35px", borderRadius: "50%" }}
            src={loggedInUser.photo}
            alt=""
          />
        )}
        <Link className="dashboard-nav">{loggedInUser.displayName}</Link>
      </div>
    </div>
  );
};

export default DashboardHeader;
