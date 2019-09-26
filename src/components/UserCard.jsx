import React from 'react';

export default (props) => {
    return (
        <div className="col-md-4">
            <div className="card mb-4">

                {/* HEADER */}
                <div className="card-header text-white bg-success">
                    <h6>{`${props.user.name} ${props.user.lastname}`}</h6>
                </div>

                {/* BODY */}
                <div className="card-body">
                    <span className="d-block"><b>Edad:</b> {props.user.age}</span>
                    <span className="d-block"><b>Sexo:</b> {props.user.sex}</span>
                    <span className="d-block"><b>Correo:</b> {props.user.email}</span>
                    <span className="d-block"><b>Telefono:</b> {props.user.phone}</span>
                    <span className="d-block"><b>País:</b> {props.user.country}</span>
                </div>

                {/* FOOTER */}
                <div className="card-footer">
                    {/* TODO: Implementar boton de update */}
                    {/* <button
                        className="btn btn-outline-info mr-2"
                        onClick={() => props.update(props.user.id)}>
                        Editar
                    </button> */}

                    <button
                        className="btn btn-outline-danger"
                        onClick={() => props.destroy(props.userId)}>
                        Eliminar
                    </button>
                </div>

            </div>
        </div>
    );
}
