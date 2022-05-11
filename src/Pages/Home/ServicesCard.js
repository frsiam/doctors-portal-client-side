import React from 'react';

const ServicesCard = ({ service }) => {
    return (
        <div class="card lg:max-w-lg bg-base-100 shadow-md">
            <figure class="px-10 pt-10">
                <img className='w-28 h-28' src={service.img} alt="Shoes" class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title">{service.title}</h2>
                <p>{service.info}</p>
            </div>
        </div>
    );
};

export default ServicesCard;