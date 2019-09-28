import React, { Component } from 'react';
/* MODULES */
import store from '../modules/redux/store';
<<<<<<< HEAD
=======
import { updateNavigation, updateList } from "../modules/redux/actionCreators";
>>>>>>> actions-reducers
import { getUsers, destroyUser } from '../modules/firebase/apiFirebase';
/* COMPONENTS */
import UserCard from './UserCard';

export default class UsersList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            users: [],
            loading: true
        }
    }

    componentDidMount = async () => {
        this.updateNavigation('/users');

        this.unsubscribe = store.subscribe(() => {
            this.setState({
                users: store.getState().users,
                loading: store.getState().loading
            });
        });

        const users = await getUsers();
        this.updateList(users);
    }

    // Se cancela el evento subscribe de la store
    componentWillUnmount = () => this.unsubscribe();

    // TODO: UPDATE
    // update = id => {
    //     try {
    //     } catch(error) {
    //         alert('Error al actualizar usuario: ' + error);
    //     }
    // }

    destroy = async id => {
        const users = this.state.users.filter(user => user.id !== id);

        await this.setState({ loading: true });
        await destroyUser(id);
        this.updateList(users);
    }

    list = () => {
        if(this.state.loading) {
            return (
                <div className="col-md-12 text-center">
                    <div className="spinner-border text-success" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>
            );
        } else {
            const users = this.state.users;

            if(users.length > 0) {
                return users.map(user => (
                    <UserCard
                        key={user.id}
                        userId={user.id}
                        user={user.data}
                        update={this.update}
                        destroy={this.destroy} />
                ));
            } else {
                return (
                    <div className="col-md-12">
                        <div className="text-center bg-danger rounded-lg p-2">
                            <span className="text-white">
                                No existen usuarios registrados
                            </span>
                        </div>
                    </div>
                );
            }
        }
    }

    /* DISPATCH-REDUX */
    updateNavigation = path => {
<<<<<<< HEAD
        store.dispatch({
            type: 'UPDATE_NAVIGATION',
            path
        });
    }

    updateList = users => {
        store.dispatch({
            type: 'UPDATE_LIST',
            users,
            nro: users.length
        });
=======
        store.dispatch(updateNavigation(path));
    }

    updateList = users => {
        store.dispatch(updateList(users));
>>>>>>> actions-reducers
    }

    render() {
        return (
            <section className="container px-0 py-4">
                <div className="card border-success">
                    <h3 className="text-success text-center py-2">Lista de Usuarios</h3>

                    <div className="row card-body mx-0">
                        {this.list()}
                    </div>
                </div>
            </section>
        );
    }
}
