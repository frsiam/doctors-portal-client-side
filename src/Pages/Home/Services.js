import React from 'react';
import cavity from '../../assets/images/cavity.png';
import fluoride from '../../assets/images/fluoride.png';
import whitening from '../../assets/images/whitening.png';
import ServicesCard from './ServicesCard';

const Services = () => {
    const services = [
        {
            _id: 1,
            title: 'Fluride Treatment',
            info: 'If a dog chews shoes whose shoes does he choose 1',
            img: fluoride
        },
        {
            _id: 2,
            title: 'Cavity Filling',
            info: 'If a dog chews shoes whose shoes does he choose 2',
            img: cavity
        },
        {
            _id: 1,
            title: 'Teeth Whitening',
            info: 'If a dog chews shoes whose shoes does he choose 3',
            img: whitening
        }
    ];
    return (
        <div className='my-32'>
            <div className='text-center'>
                <h1 className='text-primary uppercase text-xl font-bold'>Our Services</h1>
                <h1 className='text-4xl mt-2 text-accent'>Services We Provide</h1>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 mt-16'>
                {
                    services.map(service => <ServicesCard key={service.id} service={service} />)
                }
            </div>
        </div>
    );
};

export default Services;