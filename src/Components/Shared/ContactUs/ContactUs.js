import React from "react";
import "./ContactUs.css";
import contactpic from "../../../images/contactCover.png";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";

const ContactUs = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => console.log(data);

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
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Form.Row>
                <Form.Group className="col" controlId="formGridEmail">
                  <Form.Control
                    name="name"
                    type="text"
                    placeholder="First Name"
                    {...register("name", { required: true })}
                  />
                  {errors.name && (
                    <span className="text-danger">First Name is required</span>
                  )}
                </Form.Group>

                <Form.Group className="col" controlId="formGridPassword">
                  <Form.Control
                    type="text"
                    placeholder="Last Name"
                    {...register("lastName", { required: true })}
                  />
                  {errors.lastName && (
                    <span className="text-danger">Last Name is required</span>
                  )}
                </Form.Group>
              </Form.Row>

              <Form.Group controlId="formGridAddress1">
                <Form.Control
                  type="text"
                  placeholder="Email"
                  {...register("email", {
                    required: true,
                    pattern: /\S+@\S+\.\S+/,
                  })}
                />
                {errors.email && (
                  <span className="text-danger">Provide a valid email</span>
                )}
              </Form.Group>

              <Form.Group controlId="formGridAddress1">
                <Form.Control
                  type="text"
                  placeholder="Subject"
                  {...register("subject", { required: true })}
                />
                {errors.subject && (
                  <span className="text-danger">Subject is required</span>
                )}
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Control
                  as="textarea"
                  rows={3}
                  {...register("description", { required: true })}
                />
                {errors.description && (
                  <span className="text-danger">Description is required</span>
                )}
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
