import React from 'react';
import Blog from '../Blog/Blog';
import Footer from '../Shared/Footer/Footer';
import Navigationbar from '../Shared/Navbar/Navigationbar';

const Blogs = () => {
    return (
        <div>
            <Navigationbar/>
            <Blog/>
            <Footer/>
        </div>
    );
};

export default Blogs;