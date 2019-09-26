import React, { Component } from 'react'
/* MODULES */
import firebaseDb from '../modules/firebaseDb';
/* COMPONENTS */
import Couter from './Counter'
import Search from './Search'
import UserCard from './UserCard';

export default class UsersList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isMounted: true,
            users: [],
            loading: false,
            nroUsers: 0
        }
    }

    componentDidMount = async () => {
        try {
            await this.loadUsers();

            await firebaseDb.ref('users/').on('child_removed', async snap => {
                const users = this.state.users.filter(user => user.id !== snap.key);

                await setTimeout(() => {
                    if(this.state.isMounted) {
                        this.setState({
                            users,
                            loading: true,
                            nroUsers: users.length,
                        });
                    }
                }, 500);
            });
        } catch(error) {
            alert('Error al obtener la lista de usuarios: ' + error);
        }
    }

    // TODO: UPDATE
    // update = id => {
    //     try {
    //     } catch(error) {
    //         alert('Error al actualizar usuario: ' + error);
    //     }
    // }

    loadUsers = async () => {
        const users = [];
        await firebaseDb.ref('users/').on('child_added', snap => {
            users.push({
                id: snap.key,
                data: snap.val()
            });

            if(this.state.isMounted) {
                this.setState({
                    users,
                    loading: true,
                    nroUsers: users.length,
                });
            }
        });
    }

    destroy = async id => {
        this.setState({ loading: false });

        try {
            await firebaseDb.ref('users/').child(id).remove();
        } catch(error) {
            alert('Error al eliminar usuario: ' + error);
        }
    }

    search = async email => {
        if(email === 'reset') await this.loadUsers();
        else {
            const users = this.state.users;
            const index = users.findIndex(user => user.data.email === email);

            if(index >= 0) {
                this.setState({
                    users: [users[index]]
                });
            } else alert('Usuario no Encontrado');
        }
    }

    list = () => {
        const users = this.state.users;

        if(this.state.loading) {
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
        } else {
            return (
                <div className="col-md-12 text-center">
                    <div className="spinner-border text-success" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>
            );
        }
    }

    render() {
        return (
            <section className="container px-0 py-4">
                <div className="card border-success">
                    <h3 className="text-success text-center py-2">Lista de Usuarios</h3>

                    {/* LIST TOOLS */}
                    <div className="row card-header mx-0">
                        <div className="col-md-8 mt-2">
                            <Couter nroUsers={this.state.nroUsers} />
                        </div>

                        <div className="col-md-4">
                            <Search search={this.search} />
                        </div>
                    </div>

                    {/* LIST */}
                    <div className="row card-body mx-0">
                        {this.list()}
                    </div>
                </div>
            </section>
        );
    }
}
