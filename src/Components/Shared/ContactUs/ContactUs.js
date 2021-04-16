import React from "react";
import "./ContactUs.css";
import contactpic from "../../../images/contactCover.png";
import { Button, Form } from "react-bootstrap";

const ContactUs = () => {
  return (
    <div className="contactUs-container">
      <div className="title-container">
        <div className="section-title">
          <h1>
            <span>CONTACT US</span>
          </h1>
          <h6>Connect with us</h6>
        </div>
      </div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <img className="img-fluid" src={contactpic} alt="" />
          </div>
          <div className="col-md-6">
            <Form>
              <Form.Row>
                <Form.Group className="col" controlId="formGridEmail">
                  <Form.Control type="text" placeholder="First Name" />
                </Form.Group>

                <Form.Group className="col" controlId="formGridPassword">
                  <Form.Control type="text" placeholder="Last Name" />
                </Form.Group>
              </Form.Row>

              <Form.Group controlId="formGridAddress1">
                <Form.Control placeholder="Email" />
              </Form.Group>

              <Form.Group controlId="formGridAddress1">
                <Form.Control placeholder="Subject" />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Control as="textarea" rows={3} />
              </Form.Group>

              <Form.Group id="formGridCheckbox">
                <Form.Check
                  type="checkbox"
                  label="Send me latest offer by mail"
                />
              </Form.Group>

              <Button variant="warning" type="submit">
                Submit
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
