import React, { Component } from 'react';
import uuid from 'uuid/v4';

// NAVIGATION
import Counter from './navigation/Counter';
import UserSearch from './navigation/UserSearch';
import LinkRepo from './navigation/LinkRepo';

// COMPONENTS
import UserList from './components/UserList';
import UserForm from './components/UserForm';

// ASSETS
import './assets/css/app.css';
// import users from './assets/users.json';

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            users: []
        }
    }

    create = newUser => {
        newUser.id = uuid();

        this.setState({
            users: [...this.state.users, newUser]
        });
    }

    update = id => {
        console.log(id, 'Editado');
    }

    delete = id => {
        console.log(id, 'Eliminado');
    }

    render() {
        return (
            <div>

                {/* NAVIGATION */}
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top py-2">
                    <div className="container">

                        <div className="collapse navbar-collapse">
                            <h4 className="text-white mr-4">Registro de Usuarios</h4>
                            <Counter users={this.state.users} />
                        </div>

                        <UserSearch />

                        <LinkRepo />
                    </div>
                </nav>

                {/* BODY */}
                <div className="container my-4">
                    <div className="row">

                        {/* USER-LIST */}
                        <section className="col-md-8">
                            <h4 className="p-2 mb-2">Lista</h4>
                            <UserList
                                users={this.state.users}
                                update={this.update}
                                delete={this.delete} />
                        </section>

                        {/* USER-FORM */}
                        <aside className="col-md-4">
                            <h4 className="p-2 text-center mb-2">Formulario</h4>
                            <UserForm create={this.create} />
                        </aside>

                    </div>
                </div>

            </div>
        );
    }
}
