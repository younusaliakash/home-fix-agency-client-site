import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ServiceCard from "../../Shared/ServiceCard/ServiceCard";
import "./Services.css";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((response) => response.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div className="services-container">
      <div className="title-container">
        <div className="section-title">
          <h1>
            <span>OUR SERVICES </span>
          </h1>
          <h6>What We have Done</h6>
        </div>
      </div>
      <div className="container">
        <div className="row">
          {services.map((service) => (
            <ServiceCard service={service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
