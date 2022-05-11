import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../assets/icons/clock.svg';
import marker from '../../assets/icons/marker.svg';
import phone from '../../assets/icons/phone.svg';

const Info = () => {

    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 mt-20 lg:mt-0 px-2 md:px-12'>
            <InfoCard cardbg='bg-gradient-to-r from-secondary to-primary' cardTitle='Opening Hours' text='Click the button to listen on Spotiwhy app.' img={clock}></InfoCard>

            <InfoCard cardbg='bg-accent' cardTitle='Visit Our Location' text='Shamoly Square, Dhaka' img={marker}></InfoCard>

            <InfoCard cardbg='bg-gradient-to-r from-primary to-secondary' cardTitle='Contact Us Now' text='+123 6543 09842' img={phone}></InfoCard>
        </div>
    );
};

export default Info;