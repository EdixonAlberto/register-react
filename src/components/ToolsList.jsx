import React, { Component } from 'react';
/* MODULES */
import store from '../modules/redux/store';
import { getUsers } from '../modules/firebase/apiFirebase';
/* COMPONENTS */
import Couter from './Counter';
import Search from './Search';

export default class ToolsList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            users: [],
            nroUsers: 0
        }
    }

    componentDidMount = () => {
        this.unsubscribe = store.subscribe(() => {
            this.setState({
                users: store.getState().users,
                nroUsers: store.getState().nroUsers
            });
        });
    }

    componentWillUnmount = () => this.unsubscribe();

    search = async email => {
        this.showLoading();
        const users = await getUsers();

        if(email === 'reset') this.loadList(users);
        else {
            const index = users.findIndex(user => user.data.email === email);

            if(index >= 0) this.showInList(users[index]);
            else {
                alert('Usuario no Encontrado');
                this.loadList(users);
            }
        }
    }

    /* DISPATCH-REDUX */
    loadList = users => {
        store.dispatch({
            type: 'LOAD_LIST',
            users,
            nro: users.length
        });
    }

    showInList = user => {
        store.dispatch({
            type: 'SHOW_IN_LIST',
            user: [user]
        });
    }

    showLoading = () => {
        store.dispatch({
            type: 'SHOW_LOADING'
        });
    }

    render() {
        return (
            <div className="row card-header mx-0">
                <div className="col-md-8 mt-2">
                    <Couter nroUsers={this.state.nroUsers} />
                </div>

                <div className="col-md-4">
                    <Search search={this.search} />
                </div>
            </div>
        );
    }
}
