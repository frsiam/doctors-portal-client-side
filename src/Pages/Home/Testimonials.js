import React from 'react';
import qoute from '../../assets/icons/quote.svg';
import people1 from '../../assets/images/people1.png'
import people2 from '../../assets/images/people2.png'
import people3 from '../../assets/images/people3.png'
import ReviewCard from './ReviewCard';

const Testimonials = () => {
    const reviews = [
        {
            _id: 1,
            name: 'Winson Herry',
            reviews: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            img: people1,
            city: 'Californiya'
        },
        {
            _id: 2,
            name: 'Mike Hassy',
            reviews: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            img: people2,
            city: 'Istambul'
        },
        {
            _id: 3,
            name: 'David Karl',
            reviews: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            img: people3,
            city: 'New York'
        }
    ]
    return (
        <section className='my-20 px-2 md:px-12'>
            <div className='flex justify-between'>
                <div>
                    <h4 className='text-xl text-secondary font-bold'>Testimonial</h4>
                    <h1 className='text-3xl'>What Our Patients Says</h1>
                </div>
                <div>
                    <img className='w-24 lg:w-48' src={qoute} alt="" />
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:mt-20'>
                {
                    reviews.map(review => <ReviewCard key={review._id} review={review} />)
                }
            </div>
        </section>
    );
};

export default Testimonials;