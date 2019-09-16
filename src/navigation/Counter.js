import React from 'react';

export default function Counter(props) {
    return (
        <div className="bg-white rounded-lg p-1 float-left">
            <span className="text-dark mr-2">Usuarios</span>
            <span className="badge badge-success">{props.users.length}</span>
        </div>
    );
}
