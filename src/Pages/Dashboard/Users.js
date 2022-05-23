import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import UserRow from './UserRow';

const Users = () => {

    const { data: users, isLoading } = useQuery(['users'], () =>
        fetch('http://localhost:4000/user')
            .then(res => res.json())
    )
    if (isLoading) {
        return <Loading />
    }
    return (
        <div>
            <h1>All users herer: {users.length}</h1>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <!-- row 1 --> */}
                        {
                            users.map((user, index) => <UserRow index={index} key={user._id} user={user} />)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;