import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';
import Loading from '../Shared/Loading';

const RequireAdmin = ({ children }) => {
    const [user, loading, error] = useAuthState(auth);
    const [admin, adminLoadning] = useAdmin(user)

    const [sendEmailVerification] = useSendEmailVerification(auth);
    let location = useLocation();

    if (loading || adminLoadning) {
        return <Loading />
    }

    if (!user || !admin) {
        signOut(auth)
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

export default RequireAdmin;