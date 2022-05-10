import React from 'react';
import treatement from '../../assets/images/treatment.png';

const ServiceDetails = () => {
    return (
        <div class="hero min-h-screen  pl-44 pr-28 mt-36">
            <div class="hero-content flex-col lg:flex-row gap-24">
                <img src={treatement} class="max-w-sm rounded-lg shadow-xl" alt='' />
                <div>
                    <h1 class="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                    <p class="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <button class="btn btn-primary uppercase text-sm text-white font-bold bg-gradient-to-r from-secondary to-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;