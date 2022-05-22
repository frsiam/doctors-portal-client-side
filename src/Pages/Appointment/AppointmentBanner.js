import { format } from 'date-fns';
import React from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import chair from '../../assets/images/chair.png';
import bgchair from '../../assets/images/bg.png';

const AppointmentBanner = ({ date, setDate }) => {
    return (
        <div className="hero min-h-screen px-2 md:px-12" style={{ backgroundImage: `url(${bgchair})` }}>
            <div className="hero-content flex-col lg:flex-row">
                <div className='md:mr-28'>
                    <DayPicker
                        mode="single"
                        selected={date}
                        onDayClick={setDate}
                    />
                    <p>You Have selected : {format(date, 'PP')}</p>
                </div>
                <img src={chair} className="max-w-full lg:max-w-sm rounded-lg shadow-2xl" alt='dentist chair' />
            </div>
        </div>
    );
};

export default AppointmentBanner;