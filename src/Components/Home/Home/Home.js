import React from 'react';
import ContactUs from '../../Shared/ContactUs/ContactUs';
import Footer from '../../Shared/Footer/Footer';
import EstimateFeatured from '../EstimateFeatured/EstimateFeatured';
import Header from '../Header/Header';
import RecentProjects from '../RecentProjects/RecentProjects';
import Services from '../../Shared/Services/Services';
import SuccessRating from '../SuccessRating/SuccessRating';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
            <Header/>
            <Services/>
            <SuccessRating/>
            <EstimateFeatured/>
            <Testimonials/>
            <RecentProjects/>
            <ContactUs/>
            <Footer/>
        </div>
    );
};

export default Home;