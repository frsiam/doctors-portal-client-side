import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';

const AvailableAppointments = ({ date, setDate }) => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <div>
                <h1 className='text-xl text-secondary font-semibold text-center'>Available Appointments on {format(date, 'PP')}</h1>
            </div>
            <div>

            </div>
        </div>
    );
};

export default AvailableAppointments;