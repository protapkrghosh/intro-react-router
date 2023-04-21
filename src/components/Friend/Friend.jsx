import React from 'react';
import "./Friend.css"
import { Link } from 'react-router-dom';

const Friend = ({ friend }) => {
    // console.log(friend);
    const {id, name, email, company, phone, website} = friend;

    return (
        <div className="friend">
            <h2>{name}</h2>
            <p>E-mail: {email}</p>
            <p>Company: {company.name}</p>
            <p>Phone: {phone}</p>
            <p>Website: <em><a href="">{website}</a></em></p>
            <p className="details"><Link to={`/friend/${id}`} className="show-me">Show details</Link></p>
        </div>
    );
};

export default Friend;