import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Form, Table } from "react-bootstrap";
import DashboardHeader from "../DashboardHeader/DashboardHeader";
import Sidebar from "../Sidebar/Sidebar";

const OrderList = () => {
  const [totalOrders, setTotalOrsers] = useState([]);

  useEffect(() => {
    fetch("https://pure-ocean-97370.herokuapp.com/totalOrders")
      .then((res) => res.json())
      .then((result) => setTotalOrsers(result));
  }, []);

  return (
    <section className="container">
      <div className="row">
        <div className="col-md-2 col-sm-6 col-12">
          <Sidebar></Sidebar>
        </div>
        <div className="col-md-10 col-sm-12 col-12">
          <DashboardHeader pageName="Order List" />
          <div className="container">
            <div className="dashboard-action-area">
              <Table>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Service</th>
                    <th>Price</th>
                    <th>Pay With</th>
                    <th>Status</th>
                  </tr>
                </thead>
                {totalOrders?.map((order) => (
                  <tbody>
                    <tr>
                      <td>{order.bookingHolder}</td>
                      <td>{order.email}</td>
                      <td>{order.serviceTitle}</td>
                      <td>${order.price}</td>
                      <td>Credit Card</td>
                      <td>
                        <Form.Group controlId="formGridState">
                          <Form.Control
                            as="select"
                          >
                            <option value="Pending">{order.bookingStatus}</option>
                            <option value="On-going">On-going</option>
                            <option value="Done">Done</option>
                          </Form.Control>
                        </Form.Group>
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

export default OrderList;
