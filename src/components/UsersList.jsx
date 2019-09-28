import React, { Component } from 'react';
import { connect } from "react-redux";
/* MODULES */
import { updateNavigation, updateList, showLoading } from "../modules/redux/actionCreators";
import { getUsers, destroyUser } from '../modules/firebase/apiFirebase';
/* COMPONENTS */
import UserCard from './UserCard';

class UsersList extends Component {
    componentDidMount = async () => {
        this.props.updateNavigation('/users');
        this.props.showloading();

        const users = await getUsers();
        this.props.updateList(users);
    }

    destroy = async id => {
        this.confirm = window.confirm('Esta seguro de eliminar este usuario');

        if(this.confirm) {
            const users = this.props.users.filter(user => user.id !== id);

            this.props.showloading();
            await destroyUser(id);
            this.props.updateList(users);
            alert('Usuario eliminado satisfactoriamente');
        }
    }

    list = () => {
        if(this.props.loading) {
            return (
                <div className="col-md-12 text-center">
                    <div className="spinner-border text-success" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>
            );
        } else {
            const users = this.props.users;

            if(users.length > 0) {
                return users.map(user => (
                    <UserCard
                        key={user.id}
                        userId={user.id}
                        user={user.data}
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

/* STATE-REDUX */
const mapStateToProps = state => {
    return {
        users: state.users,
        loading: state.loading
    }
}

/* DISPATCH-REDUX */
const mapDispatchToProps = dispatch => {
    return {
        updateNavigation(path) {
            dispatch(updateNavigation(path));
        },
        updateList(users) {
            dispatch(updateList(users));
        },
        showloading() {
            dispatch(showLoading());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersList);
