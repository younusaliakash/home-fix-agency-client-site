import React from "react";
import { Link } from "react-router-dom";
import { Button, Nav, Navbar, NavDropdown } from "react-bootstrap";
import TopAddressBar from "../TopAddressBar/TopAddressBar";
import TopLogoBar from "../TopLogoBar/TopLogoBar";
import './Navigationbar.css'

const Navigationbar = () => {
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
              <Link className="nav-item" to="/services">
                Services
              </Link>
              <Link className="nav-item" to="/blog">
                Blog
              </Link>
              <Link className="nav-item" to="/contact">
                Contact Us
              </Link>
            </Nav>
            <Nav>
              <Link className="nav-item" to="/login">Log In</Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
  );
};

export default Navigationbar;
