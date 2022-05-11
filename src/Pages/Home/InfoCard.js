import React from 'react';

const InfoCard = ({ img, cardTitle, text, cardbg }) => {
    return (
        <div className={`card lg:card-side shadow-xl ${cardbg}`}>
            <figure className='pl-4 mt-6'>
                <img src={img} alt="Album" />
            </figure>
            <div className="card-body text-white">
                <h2 className="card-title">{cardTitle}</h2>
                <p>{text}</p>
            </div>
        </div>
    );
};

export default InfoCard;