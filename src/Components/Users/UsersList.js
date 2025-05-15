import React from 'react';
import Card from '../UI/Card';
import clases from './UserList.module.css';

const UsersList = props => {
    return (
        <Card className = {clases.users}>
            <ul>
                {props.users.map((user) => (
                <li key ={user.id}>
                    {user.name} ({user.age}  years old)
                </li>
                ))}
            </ul>
        </Card>
    );
};


export default UsersList;