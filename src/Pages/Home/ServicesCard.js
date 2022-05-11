import React from 'react';

const ServicesCard = ({ service }) => {
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-md">
            <figure className="px-10 pt-10">
                <img className='w-28 h-28' src={service.img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{service.title}</h2>
                <p>{service.info}</p>
            </div>
        </div>
    );
};

export default ServicesCard;