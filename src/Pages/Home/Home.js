import React from 'react';
import Banner from './Banner';
import Info from './Info';
import MakeAppoinment from './MakeAppoinment';
import Services from './Services';
import Testimonials from './Testimonials';

const Home = () => {
    return (
        <div className='px-12'>
            <Banner />
            <Info />
            <Services />
            <MakeAppoinment />
            <Testimonials />
        </div>
    );
};

export default Home;