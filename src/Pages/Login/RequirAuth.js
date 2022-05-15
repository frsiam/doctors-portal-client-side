import React from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const RequirAuth = ({ children }) => {
    const [user, loading, error] = useAuthState(auth);
    const [sendEmailVerification] = useSendEmailVerification(auth);
    let location = useLocation();

    if (loading) {
        return <Loading />
    }

    if (!user) {
        // Redirect them to the /login page, but save the current location they were
        // trying to go to when they were redirected. This allows us to send them
        // along to that page after they login, which is a nicer user experience
        // than dropping them off on the home page.
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    if (user.providerData[0]?.providerId === 'password' && !user.emailVerified) {
        return (<div className='container mx-auto h-screen flex justify-center items-center flex-col gap-5'>
            <h2 className='text-3xl text-yellow-500'>Your Email is not verified</h2>
            <h1 className='text-2xl text-success'>Please Verify your email</h1>
            <button
                className='btn'
                onClick={async () => {
                    await sendEmailVerification();
                    alert('Sent email');
                }}
            >
                Verify email
            </button>
        </div>)
    }

    return children;
};

export default RequirAuth;