import React from "react";
import { Table } from "react-bootstrap";
import DashboardHeader from "../DashboardHeader/DashboardHeader";
import Sidebar from "../Sidebar/Sidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import "./MangaeOrder.css";
import { useState } from "react";
import { useEffect } from "react";

const ManageOrder = () => {
  const [servicesData, setServicesData] = useState([]);
  const [successText, setSuccessText] = useState(false);
  const [unSuccessText, setUnSuccessText] = useState(false);

  useEffect(() => {
    fetch("https://pure-ocean-97370.herokuapp.com/services")
      .then((response) => response.json())
      .then((data) => setServicesData(data));
  }, []);

  const handleDelete = (id) => {
    console.log(id);
    fetch(`https://pure-ocean-97370.herokuapp.com/deleteService/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        setSuccessText(true);
        setUnSuccessText(false);
        fetch("https://pure-ocean-97370.herokuapp.com/services")
          .then((response) => response.json())
          .then((data) => setServicesData(data));
      })
      .catch((error) => {
        setUnSuccessText(true);
        setSuccessText(false);
      });
  };
  return (
    <section className="container">
      <div className="row">
        <div className="col-md-2 col-sm-6 col-12">
          <Sidebar></Sidebar>
        </div>
        <div className="col-md-10 col-sm-12 col-12">
          <DashboardHeader pageName="Manage Orders" />
          <div className="container">
            <div className="dashboard-action-area">
              {successText && (
                <h6 className="text-success">One Service Deleted</h6>
              )}
              {unSuccessText && (
                <h6 className="text-danger">Error! Unsuccessful</h6>
              )}
              <Table hover>
                <thead>
                  <tr>
                    <th>Service Name</th>
                    <th>Price</th>
                    <th>Action</th>
                  </tr>
                </thead>
                {servicesData?.map((service) => (
                  <tbody>
                    <tr>
                      <td>{service.serviceTitle}</td>
                      <td>${service.price}</td>
                      <td onClick={() => handleDelete(service._id)}>
                        <FontAwesomeIcon
                          className="delete-icon"
                          icon={faTrash}
                        />
                      </td>
                    </tr>
                  </tbody>
                ))}
              </Table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManageOrder;
