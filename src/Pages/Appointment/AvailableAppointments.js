import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import BookingCard from './BookingCard';
import BookingModal from './BookingModal';

const AvailableAppointments = ({ date, setDate }) => {
    // const [bookings, setBookings] = useState([]);
    const [treatment, setTreatment] = useState(null);

    const formattedDate = format(date, 'PP')

    // useEffect(() => {
    //     fetch(`http://localhost:4000/available?date=${formattedDate}`)
    //         .then(res => res.json())
    //         .then(data => setBookings(data))
    // }, [formattedDate, isReload])
    const { data: bookings, isLoading, refetch } = useQuery(['available', formattedDate], () =>
        fetch(`http://localhost:4000/available?date=${formattedDate}`)
            .then(res => res.json())
    )

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className='mt-14 lg:mt-16'>
            <div className='mb-14 lg:mb-24'>
                <h1 className='text-xl text-secondary font-semibold text-center'>Available Appointments on {format(date, 'PP')}</h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-40 lg:mb-32'>
                {
                    bookings?.map(booking => <BookingCard key={booking._id} booking={booking} setTreatment={setTreatment} />)
                }
            </div>
            {
                treatment && <BookingModal refetch={refetch} date={date} treatment={treatment} setTreatment={setTreatment} />
            }
        </div>
    );
};

export default AvailableAppointments;