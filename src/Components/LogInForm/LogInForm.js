import React from "react";
import { useContext } from "react";
import { Button } from "react-bootstrap";
import { useHistory, useLocation } from "react-router";
import { UserContext } from "../../App";
import siteLog from "../../images/logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {initializeLoginFramework,handleGoogleSingIn} from '../AuthManager/AuthManager'
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

const LogInForm = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext)

  initializeLoginFramework();

  let history = useHistory();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };

  const googleLogIn = () => {
    handleGoogleSingIn()
    .then( result => {
        setLoggedInUser(result)
        history.replace(from);
    })
  }
  return (
    <div className="container-fluid mt-5 mb-5">
      <div className="row">
        <div className="col-md-12 d-flex justify-content-center">
          <div className="log-in-container">
            <div className="website-logo">
              <img className="img" src={siteLog} alt="" />
              <h2 className="text-center">Welcome to Home Fix</h2>
              <h4 className="text-center">Log In</h4>
            </div>
            <div className="log-in-btn d-flex justify-content-center mt-3 mb-3">
              <Button onClick={googleLogIn} className="btn btn-default px-4"><FontAwesomeIcon className="mx-2" icon={faGoogle} />Log In With Google </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogInForm;
