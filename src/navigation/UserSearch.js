import React from 'react';

export default function UserSearch() {
    return (
        <form className="form-inline">
            <input className="form-control mr-sm-2" type="search" placeholder="Nombre" aria-label="Buscar" />
            <button className="btn btn-outline-success my-2" type="submit">Buscar</button>
        </form>
    );
}
