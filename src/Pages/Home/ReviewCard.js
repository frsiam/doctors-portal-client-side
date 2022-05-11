import React from 'react';

const ReviewCard = ({ review }) => {
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <div className="card-body">
                <p>{review.reviews}</p>
                <div className="flex items-center justify-start">
                    <div className="avatar">
                        <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 mr-5">
                            <img src={review.img} alt='' />
                        </div>
                    </div>
                    <div>
                        <h3 className='text-xl font-bold'>{review.name}</h3>
                        <p>{review.city}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;