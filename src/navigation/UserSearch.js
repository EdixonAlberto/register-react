import React, { Component } from 'react'

export default class UserSearch extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: ''
        }
    }

    change = e => {
        const name = e.target.value;

        if(name === '') this.props.search('reset');
        else this.setState({
            name
        });
    }

    submit = e => {
        e.preventDefault();
        this.props.search(this.state.name);
    }

    render() {
        return (
            <form className="form-inline" onSubmit={this.submit}>
                <input
                    className="form-control mr-sm-2"
                    type="search"
                    name="name"
                    placeholder="Nombre"
                    onChange={this.change} />

                <button
                    className="btn btn-outline-success my-2"
                    type="submit">
                    <span>Buscar</span>
                </button>
            </form>
        )
    }
}
