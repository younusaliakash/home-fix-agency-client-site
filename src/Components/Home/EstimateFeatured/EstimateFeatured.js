import React from "react";
import "./EstimateFeatured.css";
import estimateCover from "../../../images/estimateCover.jpg";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";

const EstimateFeatured = () => {
  const { register, formState: { errors }, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);
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
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Row>
              <Form.Group className="col" controlId="formGridEmail">
                <Form.Control type="text" placeholder="First Name" {...register("name", { required: true })}/>
                {errors.name && <span className="text-danger">First Name is required</span> }
              </Form.Group>

              <Form.Group className="col" controlId="formGridPassword">
                <Form.Control type="text" placeholder="Last Name" {...register("lastName", { required: true })}/>
                {errors.lastName && <span className="text-danger">Last Name is required</span> }
              </Form.Group>
            </Form.Row>

            <Form.Group controlId="formGridAddress1">
              <Form.Control placeholder="Email" {...register("email", { required: true , pattern: /\S+@\S+\.\S+/ })}/>
              {errors.email && <span className="text-danger">Provide a valid email</span> }
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
