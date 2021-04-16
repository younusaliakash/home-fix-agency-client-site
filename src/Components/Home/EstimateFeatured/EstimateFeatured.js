import React from "react";
import "./EstimateFeatured.css";
import estimateCover from "../../../images/estimateCover.jpg";
import { Button, Form } from "react-bootstrap";

const EstimateFeatured = () => {
  return (
    <div className="container estimateFeatured">
      <div className="row">
        <div className="col-md-6">
          <img className="img-fluid" src={estimateCover} alt="" />
        </div>
        <div className="col-md-6 featured-right">
          <div className="title-container">
            <div className="section-title Featured">
              <h1>
                <span>GET ESTIMATE</span>
              </h1>
              <h6>For Your Convenience</h6>
            </div>
          </div>
          <p className="mt-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
            assumenda quisquam, maiores illo maxime natus ullam ipsam similique
            dolore hic laboriosam excepturi vel et atque unde. Quam harum porro
            cupiditate?
          </p>
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

            <Form.Group controlId="formGridState">
              <Form.Control as="select" defaultValue="Type Of services">
                <option>Type Of services</option>
                <option>Plumbing Services</option>
                <option>Electrical Services</option>
                <option>Roofing Services</option>
                <option>Carpentry Services</option>
                <option>Renovation Services</option>
              </Form.Control>
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
  );
};

export default EstimateFeatured;
