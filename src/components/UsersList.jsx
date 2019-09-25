import React, { Component } from 'react'

import Couter from './Counter'
import Search from './Search'
import User from './User';

import dbUsers from '../assets/users.json'

export default class UsersList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            users: []
        }
    }

    componentDidMount = () => {
        const users = dbUsers;

        this.setState({
            users
        });
    }

    update = id => {
        console.log(id);
    }

    destroy = id => {
        console.log(id);
    }

    render() {
        return (
            <section className="container px-0 py-4">
                <div className="card border-success">
                    <h3 className="text-success text-center py-2">Lista de Usuarios</h3>

                    <div className="row card-header mx-0">
                        <div className="col-md-8 mt-2">
                            <Couter />
                        </div>

                        <div className="col-md-4">
                            <Search />
                        </div>
                    </div>

                    <div className="row card-body">
                        {
                            this.state.users.map(user => (
                                <UserCard
                                    key={user.id}
                                    user={user}
                                    update={this.update}
                                    destroy={this.destroy} />
                            ))
                        }
                    </div>
                </div>
            </section>
        )
    }
}
