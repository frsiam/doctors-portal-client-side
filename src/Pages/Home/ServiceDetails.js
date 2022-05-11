import React from 'react';
import treatement from '../../assets/images/treatment.png';
import PrimaryButton from '../Shared/PrimaryButton';

const ServiceDetails = () => {
    return (
        <div class="hero min-h-screen mt-14 lg:mt-36">
            <div class="hero-content flex-col lg:flex-row gap-24">
                <img src={treatement} class="max-w-full lg:max-w-sm rounded-lg shadow-xl" alt='' />
                <div>
                    <h1 class="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                    <p class="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <PrimaryButton>Get Started 2</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;