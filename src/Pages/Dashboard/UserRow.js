import React from 'react';
import { toast } from 'react-toastify';

const UserRow = ({ user, index, refetch }) => {
    const { email, role } = user;
    const handleAdmin = () => {
        fetch(`http://localhost:4000/user/admin/${email}`, {
            method: 'put',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 403) {
                    toast.error('You have not to permit to make other admin !!!')
                }
                return res.json()
                res.json()
            })
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    refetch()
                    toast.success('Successfully make an admin !!')
                }
            })
    }
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{user.email}</td>
            <td>{role === 'admin' ? <h2 className='btn btn-xs'>Admin</h2> : <button onClick={handleAdmin} className="btn btn-xs">Make Admin</button>}</td>
            <td><button className="btn btn-xs">Remove Admin</button></td>
        </tr>

    );
};

export default UserRow;