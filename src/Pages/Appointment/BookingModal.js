import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({ treatment, date, setTreatment }) => {
    const { name, slots, _id } = treatment;

    const handleBooking = (event) => {
        event.preventDefault();
        const slot = event.target.timeSlot.value;
        console.log(slot)
        setTreatment(null)
    }
    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg">{name}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-4 justify-items-center mt-5'>
                        <input type="text" value={format(date, 'PP')} placeholder="Type here" className="input input-bordered w-full max-w-xs" disabled />

                        <select name='timeSlot' className="select select-bordered w-full max-w-xs">
                            {
                                slots.map(slot => <option key={_id} value={slot}>{slot}</option>)
                            }
                        </select>
                        <input name='name' type="text" placeholder="Your Name" className="input input-bordered w-full max-w-xs" />

                        <input name='email' type="email" placeholder="Your Email" className="input input-bordered w-full max-w-xs" />
                        <input name='phone' type="number" placeholder="Phone Number" className="input input-bordered w-full max-w-xs" />
                        <input type="submit" value='Submit' placeholder="Type here" className="btn btn-secondary w-full max-w-xs" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;