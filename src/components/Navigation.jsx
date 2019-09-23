import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import LinkRepo from './LinkRepo'

export default class Navigation extends Component {
    constructor(props) {
        super(props);

        this.state = {
            path: this.props.path
        }
    }

    visible = () => (this.state.path === '/users') ? {} : { display: 'none' };

    active = to => (this.state.path === to) ? "nav-bar active" : "";

    render() {
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

                            <li className={this.active('/')}>
                                <Link className="nav-link" to="/">Formulario</Link>
                            </li>

                            <li className={this.active('/users')}>
                                <Link className="nav-link" to="/users">Lista</Link>
                            </li>

                            <LinkRepo />
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}
