import React from "react";
import { Link } from "react-router-dom";
import { Button, Nav, Navbar, NavDropdown } from "react-bootstrap";
import TopAddressBar from "../TopAddressBar/TopAddressBar";
import TopLogoBar from "../TopLogoBar/TopLogoBar";
import './Navigationbar.css'
import { useContext } from "react";
import { UserContext } from "../../../App";

const Navigationbar = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext)
  return (
    <div>
      <TopAddressBar />
      <TopLogoBar />
      <div className="container navigation-bar">
        <Navbar collapseOnSelect expand="lg" bg="warning" variant="dark">
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Link className="nav-item" to="/">
                Home
              </Link>
              <Link className="nav-item" to="/dashboard">
                Dashboard
              </Link>
              <Link className="nav-item" to="/servicesPage">
                Services
              </Link>
              <Link className="nav-item" to="/blogs">
                Blogs
              </Link>
              <Link className="nav-item" to="/contact">
                Contact Us
              </Link>
            </Nav>
            <Nav>
              {loggedInUser.photo && <img style={{height : '35px' , width: '35px', borderRadius: '50%'}} src={loggedInUser.photo} alt=""/> }
              {
                loggedInUser.displayName ? <Link className="nav-item" >{loggedInUser.displayName}</Link> : <Link className="nav-item" to="/logIn">Log In</Link>
              }
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
  );
};

export default Navigationbar;
