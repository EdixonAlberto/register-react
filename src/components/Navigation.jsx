import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
/* COMPONENTS */
import LinkRepo from './LinkRepo';

/* COMPONENT PRESENTATIONAL */
const Navigation = ({ path }) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
            <div className="container">
                <span className="navbar-brand">Registro de Usuarios</span>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">

                        <li className={(window.location.pathname === '/form') ? "nav-bar active" : ""}>
                            <Link className="nav-link" to="/form">Formulario</Link>
                        </li>

                        <li className={(window.location.pathname === '/users') ? "nav-bar active" : ""}>
                            <Link className="nav-link" to="/users">Lista</Link>
                        </li>

                        <LinkRepo />
                    </ul>
                </div>
            </div>
        </nav>
    );
}

const mapStateToProps = state => {
    return {
        path: state.path
    }
}

export default connect(mapStateToProps)(Navigation);
