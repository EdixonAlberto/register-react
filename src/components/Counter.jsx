import React from 'react';

export default (props) => (
    <div className="float-left bg-dark rounded-lg p-2">
        <span className="text-white mr-2">Usuarios</span>
        <span className="badge badge-success">{props.nroUsers}</span>
    </div>
);
