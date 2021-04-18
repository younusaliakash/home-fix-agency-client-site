import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { UserContext } from "../../../App";
import DashboardHeader from "../DashboardHeader/DashboardHeader";
import Sidebar from "../Sidebar/Sidebar";

const ReviewForm = () => {
  const [successText, setSuccessText] = useState(false);
  const [unSuccessText, setUnSuccessText] = useState(false);
  const [review, setReview] = useState({
    name: "",
    title: "",
    description: "",
  });

  const [loggedInUser,setLoggedInUser] = useContext(UserContext)

  const formClear = () => {
    setReview({
      name: "",
      title: "",
      description: "",
    })
  } 

  const handleChange = (e) => {
    const newReview = { ...review };
    newReview[e.target.name] = e.target.value;
    setReview(newReview);
  };

  const handleSubmit = (e) => {
      e.preventDefault();
      const reviewData = {...review, ...loggedInUser}
      formClear()

      fetch("http://localhost:5000/addReview",{
        method : "POST",
        headers: {"Content-Type" : "application/json" },
        body: JSON.stringify(reviewData)
      })
      .then((res) => {
        setSuccessText(true);
        setUnSuccessText(false);
      })
      .catch((error) => {
        setSuccessText(false);
        setUnSuccessText(true);
      });
  }

  return (
    <section className="container">
      <div className="row">
        <div className="col-md-2 col-sm-6 col-12">
          <Sidebar></Sidebar>
        </div>
        <div className="col-md-10 col-sm-12 col-12">
          <DashboardHeader pageName="Review" />
          <div className="container">
            <div className="dashboard-action-area">
            {successText && (
                <h6 className="text-success">Review added</h6>
              )}
              {unSuccessText && (
                <h6 className="text-danger">Review added Unsuccessful..!</h6>
              )}
              <Form onSubmit={handleSubmit}>
                <Form.Row>
                  <Form.Group className="col-md-7" controlId="formGridEmail">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control
                      onChange={handleChange}
                      name="name"
                      value={review.name}
                      type="text"
                      placeholder="Enter Name"
                      required
                    />
                  </Form.Group>
                  <Form.Group className="col-md-7" controlId="formGridEmail">
                    <Form.Label>Title or company</Form.Label>
                    <Form.Control
                      onChange={handleChange}
                      name="title"
                      value={review.title}
                      type="text"
                      placeholder="Enter Title"
                      required
                    />
                  </Form.Group>
                  <Form.Group
                    className="col-md-6"
                    controlId="exampleForm.ControlTextarea1"
                  >
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                      onChange={handleChange}
                      name="description"
                      value={review.description}
                      as="textarea"
                      rows={3}
                      required
                    />
                  </Form.Group>
                </Form.Row>
                <Button variant="warning" type="submit">
                  Submit
                </Button>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewForm;
