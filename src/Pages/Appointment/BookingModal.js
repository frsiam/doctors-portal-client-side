import { format } from 'date-fns';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const BookingModal = ({ treatment, date, setTreatment, refetch }) => {
    const { name, slots, _id } = treatment;
    const [user] = useAuthState(auth);
    const formattedDate = format(date, 'PP')

    const handleBooking = (event) => {
        event.preventDefault();
        const slot = event.target.timeSlot.value;
        // console.log(slot)
        const booking =
        {
            treatmentId: _id,
            treatmentName: name,
            date: formattedDate,
            slot: slot,
            patient: user.email,
            patientName: user.displayName,
            phone: event.target.phone.value
        }

        fetch('http://localhost:4000/booking', {
            method: 'post',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    toast(`Appointment is set, ${formattedDate} at ${slot}`)
                }
                else {
                    toast.error(`You already have an appointment on ${data.booking?.date} at ${data.booking?.slot}`)
                }
                // availableAppoinment er fetch ta reload korar jonno state take update kora 
                refetch()
                // for close the modal
                setTreatment(null)
            })
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
                                slots.map((slot, index) => <option key={index} value={slot}>{slot}</option>)
                            }
                        </select>
                        <input name='name' disabled type="text" placeholder="Your Name" className="input input-bordered w-full max-w-xs" value={user?.displayName || ''} />

                        <input name='email' disabled value={user?.email || ''} type="email" placeholder="Your Email" className="input input-bordered w-full max-w-xs" />
                        <input name='phone' type="number" placeholder="Phone Number" className="input input-bordered w-full max-w-xs" />
                        <input type="submit" value='Submit' placeholder="Type here" className="btn btn-secondary w-full max-w-xs" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;