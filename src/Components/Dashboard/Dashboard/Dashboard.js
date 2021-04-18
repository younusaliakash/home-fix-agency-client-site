import React from "react";
import DashboardHeader from "../DashboardHeader/DashboardHeader";
import Sidebar from "../Sidebar/Sidebar";

const containerStyle = {
  border: "1px solid white",
};

const Dashboard = () => {
  return (
    <section className="container">
      <div style={containerStyle} className="row">
        <div className="col-md-2 col-sm-6 col-12">
          <Sidebar></Sidebar>
        </div>
        <div className="col-md-10 col-sm-12 col-12">
          <DashboardHeader pageName="Dashboard" />
          <div className="container">
            <div className="dashboard-action-area">
              <h1>Welcome to Dashboard</h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
