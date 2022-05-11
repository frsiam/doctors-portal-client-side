import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingCard from './BookingCard';

const AvailableAppointments = ({ date, setDate }) => {
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/services.json')
            .then(res => res.json())
            .then(data => setBookings(data))
    }, [])
    return (
        <div>
            <div>
                <h1 className='text-xl text-secondary font-semibold text-center'>Available Appointments on {format(date, 'PP')}</h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    bookings.map(booking => <BookingCard key={booking._id} booking={booking} />)
                }
            </div>
        </div>
    );
};

export default AvailableAppointments;