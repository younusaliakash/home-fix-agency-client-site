import React from 'react';
import ContactUs from '../Shared/ContactUs/ContactUs';
import Footer from '../Shared/Footer/Footer';
import Navigationbar from '../Shared/Navbar/Navigationbar';

const ContactUsPage = () => {
    return (
        <div>
            <Navigationbar/>
            <ContactUs/>
            <Footer/>
        </div>
    );
};

export default ContactUsPage;