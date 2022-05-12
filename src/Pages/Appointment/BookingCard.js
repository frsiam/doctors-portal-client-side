import React from 'react';

const BookingCard = ({ booking, setTreatment }) => {
    return (
        <div className="card lg:max-w-lg shadow-md">
            <div className="card-body items-center text-center">
                <h2 className="card-title text-secondary">{booking.name}</h2>
                <p>
                    {
                        booking.slots.length > 0
                            ? <span>{booking.slots[0]}</span>
                            : <span className='text-red-400'>Try Another Date</span>
                    }
                </p>
                <p>{booking.slots.length} {booking.slots.length > 1 ? 'Spaces' : 'Space'} are available</p>
                <div className="card-actions justify-center">
                    <label for='booking-modal' onClick={() => setTreatment(booking)} disabled={booking.slots.length === 0} className="btn btn-secondary bg-gradient-to-r from-secondary to-primary text-white uppercase">Booking Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default BookingCard;