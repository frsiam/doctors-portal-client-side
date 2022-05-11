import React from 'react';
import doctor from '../../assets/images/doctor-small.png';
import appoinmentbg from '../../assets/images/appointment.png'
import PrimaryButton from '../Shared/PrimaryButton';

const MakeAppoinment = () => {
    return (
        <section className='flex justify-center items-center mt-16 lg:mt-40 mb-5' style={{ background: `url(${appoinmentbg})` }}>
            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-300px]' src={doctor} alt="" />
            </div>
            <div className='flex-1 px-6 py-12 lg:pl-7 lg:pr-32 lg:my-28'>
                <h3 className='text-xl text-primary font-bold mb-4'>Appoinment</h3>
                <h2 className='text-3xl text-white mb-4'>Make an Appoinment Today</h2>
                <p className='text-white mb-7'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur ipsa quae porro dicta fugiat harum aut. Mollitia assumenda magni veritatis! Impedit mollitia iusto quas. Quas nam hic reprehenderit est magnam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita perspiciatis velit, tenetur doloremque quibusdam quo sed tempora quam</p>
                <PrimaryButton>Get Started 3</PrimaryButton>
            </div>
        </section>
    );
};

export default MakeAppoinment;