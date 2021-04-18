import React from "react";
import { Button, Form } from "react-bootstrap";
import DashboardHeader from "../DashboardHeader/DashboardHeader";
import Sidebar from "../Sidebar/Sidebar";
import { useState } from "react";

const AddServices = () => {
  const [successText, setSuccessText] = useState(false);
  const [unSuccessText, setUnSuccessText] = useState(false);
  const [serviceInfo, setServiceInfo] = useState({
    serviceTitle : "",
    description : "",
    price : ""
  });
  const [file,setFile] = useState({})

  const clearForm = () => {
    setServiceInfo({
      serviceTitle : "",
      description : "",
      price: ""
    })
  }

  const handelChange = (e) => {
    const newInfo = { ...serviceInfo };
    newInfo[e.target.name] = e.target.value;
    setServiceInfo(newInfo);
  };

  const handleImage = e => {
    const newFile = e.target.files[0]
    setFile(newFile)
  }

  const handleSubmit = (e) => {
      e.preventDefault();
      clearForm()
      const formData = new FormData();
      formData.append('file', file)
      formData.append('serviceTitle', serviceInfo.serviceTitle)
      formData.append('description', serviceInfo.description)
      formData.append('price', serviceInfo.price)

      fetch('http://localhost:5000/addService', {
        method: 'POST',
        body: formData
      })
      .then(response => {
          setSuccessText(true)
          setUnSuccessText(false)
      })
      .catch(error => {
        setUnSuccessText(true)
        setSuccessText(false)
      })
  }
      
  return (
    <section className="container">
      <div className="row">
        <div className="col-md-2 col-sm-6 col-12">
          <Sidebar></Sidebar>
        </div>
        <div className="col-md-10 col-sm-12 col-12">
          <DashboardHeader pageName="Add Services" />
          <div className="container">
            <div className="dashboard-action-area">
            {successText && (
                <h6 className="text-success">Service added Successful!</h6>
              )}
              {unSuccessText && (
                <h6 className="text-danger">Error! Service added Unsuccessful</h6>
              )}
              <Form onSubmit={handleSubmit} >
                <Form.Row>
                  <Form.Group className="col" controlId="formGridEmail">
                    <Form.Label>Service Title</Form.Label>
                    <Form.Control
                      onChange={handelChange}
                      type="text"
                      name="serviceTitle"
                      value={serviceInfo.serviceTitle}
                      placeholder="Enter Title"
                      required
                    />
                  </Form.Group>

                  <Form.Group className="col" controlId="formGridPassword">
                    <Form.Label>Image</Form.Label>
                    <Form.Control onChange={handleImage} type="file" required />
                  </Form.Group>
                </Form.Row>
                <Form.Row>
                  <Form.Group
                    className="col-md-6"
                    controlId="exampleForm.ControlTextarea1"
                  >
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                      onChange={handelChange}
                      type="text"
                      name="description"
                      value={serviceInfo.description}
                      as="textarea"
                      rows={3}
                      placeholder="Enter Description"
                      required
                    />
                  </Form.Group>
                  <Form.Group className="col-md-3" controlId="formGridEmail">
                    <Form.Label>Price</Form.Label>
                    <Form.Control
                      onChange={handelChange}
                      type="number"
                      name="price"
                      value={serviceInfo.price}
                      placeholder="Enter Price"
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

export default AddServices;
