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
            .then(res => res.json())
            .then(data => {
                console.log(data)
                refetch()
                toast.success('Successfully make an admin !!')
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