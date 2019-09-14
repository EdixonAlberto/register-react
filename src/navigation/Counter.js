import React from 'react';
import users from '../assets/users.json';

export default function Counter() {
    return (
        <div className="bg-white rounded-lg p-2 float-left">
            <span className="text-dark mr-2">Usuarios</span>
            <span className="badge badge-success">{users.length}</span>
        </div>
    );
}
