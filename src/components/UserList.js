import React, { Component } from 'react';
import users from '../assets/users.json';

export default class UserList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            users
        }
    }

    delete = (e) => {
        const id = e.target.id;
        console.log(id);
    }

    render() {
        const userCard = this.state.users.map(user => {
            return (
                <div className="col-md-6" key={user.id}>
                    <div className="card mb-4">

                        {/* HEADER */}
                        <div className="card-header text-white bg-success">
                            <span>{user.name}</span>
                        </div>

                        {/* BODY */}
                        <div className="card-body">
                            <span className="d-block"><b>Edad:</b> {user.age}</span>
                            <span className="d-block"><b>Correo:</b> {user.email}</span>
                            <span className="d-block"><b>País:</b> {user.country}</span>
                        </div>

                        {/* FOOTER */}
                        <div className="card-footer">
                            <button
                                className="btn btn-outline-info mr-2"
                                id={user.id}
                            >Editar
                            </button>

                            <button
                                className="btn btn-outline-danger"
                                id={user.id}
                                onClick={this.delete}
                            >Eliminar
                            </button>
                        </div>

                    </div>
                </div>
            );
        });

        return (
            <div className="row border-dark">
                {userCard}
            </div>
        );
    }
}
