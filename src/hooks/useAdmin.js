import React, { useEffect, useState } from 'react';

const useAdmin = (user) => {
    const [admin, setAdmin] = useState(false);
    const [adminLoadning, setAdminLoading] = useState(true);
    useEffect(() => {
        const email = user?.email;
        if (email) {
            fetch(`http://localhost:4000/admin/${email}`, {
                method: 'get',
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    setAdmin(data.admin)
                    setAdminLoading(false)
                })
        }
    }, [user])
    return [admin, adminLoadning]
};

export default useAdmin;