import React from "react";
import ServiceCard from "../ServiceCard/ServiceCard";
import "./Services.css";

const servicesData = [
    {
        serviceTitle: "Plumbing Services",
        image: '',
        price: '488',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda fuga obcaecati eos ipsam aspernatur id officia dolor fugiat, eum ducimus!"
    },
    {
        serviceTitle: "Electrical Services",
        price: '488',
        image: '',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda fuga obcaecati eos ipsam aspernatur id officia dolor fugiat, eum ducimus!"
    },
    {
        serviceTitle: "Roofing Services",
        price: '488',
        image: '',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda fuga obcaecati eos ipsam aspernatur id officia dolor fugiat, eum ducimus!"
    },
    {
        serviceTitle: "Carpentry Services",
        price: '488',
        image: '',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda fuga obcaecati eos ipsam aspernatur id officia dolor fugiat, eum ducimus!"
    },
    {
        serviceTitle: "Renovation Services",
        price: '488',
        image: '',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda fuga obcaecati eos ipsam aspernatur id officia dolor fugiat, eum ducimus!"
    },
    {
        serviceTitle: "Plumbing Services",
        price: '488',
        image: '',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda fuga obcaecati eos ipsam aspernatur id officia dolor fugiat, eum ducimus!"
    }
]

const Services = () => {
  return (
    <div className="services-container">
      <div className="title-container">
        <div className="section-title">
          <h1><span>OUR SERVICES </span></h1>
          <h6>What We have Done</h6>
        </div>
      </div>
      <div className="container">
          <div className="row">
            {
                servicesData.map(service => <ServiceCard service={service}/>)
            }
          </div>
      </div>
    </div>
  );
};

export default Services;
