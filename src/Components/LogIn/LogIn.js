import React from 'react';
import LogInForm from '../LogInForm/LogInForm';
import Footer from '../Shared/Footer/Footer';
import Navigationbar from '../Shared/Navbar/Navigationbar';

const LogIn = () => {
    return (
        <div>
            <Navigationbar/>
            <LogInForm/>
            <Footer/>
        </div>
    );
};

export default LogIn;