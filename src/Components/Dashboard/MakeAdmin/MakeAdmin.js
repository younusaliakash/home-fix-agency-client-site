import React from "react";
import { Button, Form } from "react-bootstrap";
import DashboardHeader from "../DashboardHeader/DashboardHeader";
import Sidebar from "../Sidebar/Sidebar";
import "./MakeAdmin.css";
import { useForm } from "react-hook-form";
import { useState } from "react";

const MakeAdmin = () => {
  const [successText, setSuccessText] = useState(false);
  const [unSuccessText, setUnSuccessText] = useState(false);
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const onSubmit = (data) => {
    fetch("https://pure-ocean-97370.herokuapp.com/addAdmin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => {
        reset({});
        setSuccessText(true);
        setUnSuccessText(false);
      })
      .catch((error) => {
        setSuccessText(false);
        setUnSuccessText(true);
      });
  };

  return (
    <section className="container">
      <div className="row">
        <div className="col-md-2 col-sm-6 col-12">
          <Sidebar></Sidebar>
        </div>
        <div className="col-md-10 col-sm-12 col-12">
          <DashboardHeader pageName="Make Admin" />
          <div className="container">
            <div className="col-md-6 dashboard-action-area">
              {successText && (
                <h6 className="text-success">Admin added Successful!</h6>
              )}
              {unSuccessText && (
                <h6 className="text-danger">Admin added Unsuccessful..!</h6>
              )}
              <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    {...register("email", {
                      required: true,
                      pattern: /\S+@\S+\.\S+/,
                    })}
                  />
                  {errors.email && (
                    <span className="text-danger">Provide a valid email</span>
                  )}
                  <Form.Text className="text-muted">
                    Remember : An admin can do anything on this site
                  </Form.Text>
                </Form.Group>
                <Button variant="warning" type="submit">
                  Add Admin
                </Button>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MakeAdmin;
