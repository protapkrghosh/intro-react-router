import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FriendDetail = () => {
    const friend = useLoaderData();
    // console.log(friend);

    return (
        <div>
            <h3>Everything about this person is here</h3>
            <h3>Name: {friend.name}</h3>
            <p>E-mail: {friend.email}</p>
            <p>Phone: {friend.phone}</p>
        </div>
    );
};

export default FriendDetail;