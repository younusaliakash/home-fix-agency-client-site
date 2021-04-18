import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Table } from "react-bootstrap";
import DashboardHeader from "../DashboardHeader/DashboardHeader";
import Sidebar from "../Sidebar/Sidebar";

const OrdersData = [
  {
    name: "Younus Ali Akash",
    email: "younusaliakash8@gmail.com",
    service: "Plumbing services",
    payWith: "credit card",
    status: "pending",
  },
  {
    name: "Younus Ali Akash",
    email: "younusaliakash8@gmail.com",
    service: "Plumbing services",
    payWith: "credit card",
    status: "pending",
  },
  {
    name: "Younus Ali Akash",
    email: "younusaliakash8@gmail.com",
    service: "Plumbing services",
    payWith: "credit card",
    status: "pending",
  },
  {
    name: "Younus Ali Akash",
    email: "younusaliakash8@gmail.com",
    service: "Plumbing services",
    payWith: "credit card",
    status: "pending",
  },
];

const OrderList = () => {
  const [totalOrders, setTotalOrsers] = useState([])

  useEffect(() => {
    fetch("http://localhost:5000/totalOrders")
    .then(res => res.json())
    .then(result => setTotalOrsers(result))
  },[])

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
              <Table >
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
                {
                    totalOrders?.map( order => <tbody>
                        <tr>
                          <td>{order.bookingHolder}</td>
                          <td>{order.email}</td>
                          <td>{order.serviceTitle}</td>
                          <td>${order.price}</td>
                          <td>Credit Card</td>
                          <td>{order.bookingStatus}</td>
                        </tr>
                      </tbody>)
                }
              </Table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderList;
