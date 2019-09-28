import React, { Component } from 'react';
import { connect } from "react-redux";
/* MODULES */
import { updateList, showInList, showLoading } from "../modules/redux/actionCreators";
import { getUsers } from '../modules/firebase/apiFirebase';
/* COMPONENTS */
import Couter from './Counter';
import Search from './Search';

class ToolsList extends Component {
    search = async email => {
        this.props.showLoading();
        const users = await getUsers();

        if(email === 'reset') this.props.updateList(users);
        else {
            const index = users.findIndex(user => user.data.email === email);

            if(index >= 0) this.props.showInList(users[index]);
            else {
                alert('Usuario no Encontrado');
                this.props.updateList(users);
            }
        }
    }

    render() {
        return (
            <div className="row card-header mx-0">
                <div className="col-md-8 mt-2">
                    <Couter nroUsers={this.props.nroUsers} />
                </div>

                <div className="col-md-4">
                    <Search search={this.search} />
                </div>
            </div>
        );
    }
}

/* STATE-REDUX */
const mapStateToProps = state => {
    return {
        users: state.users,
        nroUsers: state.nroUsers
    }
}

/* DISPATCH-REDUX */
const mapDispatchToProps = dispatch => {
    return {
        updateList(users) {
            dispatch(updateList(users));
        },
        showInList(user) {
            dispatch(showInList(user));
        },
        showLoading() {
            dispatch(showLoading());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ToolsList);
