import React from 'react';

const ReviewCard = ({ review }) => {
    return (
        <div class="card lg:max-w-lg bg-base-100 shadow-xl">
            <div class="card-body">
                <p>{review.reviews}</p>
                <div class="flex items-center justify-start">
                    <div class="avatar">
                        <div class="w-16 rounded-full ring ring-primary ring-offset-base-100 mr-5">
                            <img src={review.img} alt='' />
                        </div>
                    </div>
                    <div>
                        <h3>{review.name}</h3>
                        <p>{review.city}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;