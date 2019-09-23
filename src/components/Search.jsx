import React from 'react';

export default () => (
    <form className="form-inline float-right">
        <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Nombre"
            aria-label="Buscar" />
        <button className="btn btn-success my-2" type="submit">
            Buscar
        </button>
    </form>
);
