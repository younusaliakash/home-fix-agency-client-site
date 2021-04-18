import React, { useContext, useEffect, useState } from 'react';

import { UserContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';

const containerStyle = {
    // backgroundColor: "black",
    border: '1px solid white'
}

const Dashboard = () => {
    return (
        <section className="container">
            <div style={containerStyle} className="row">
                <div className="col-md-2 col-sm-6 col-12">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-10 col-sm-12 col-12">
                    <h1>Dashboard</h1>
                </div>
            </div>
        </section>
    );
};

export default Dashboard;