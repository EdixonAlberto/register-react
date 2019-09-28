import React, { Component } from 'react';

export default class Search extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: ''
        }
    }

    change = e => {
        const email = e.target.value;

        if(email === '') this.props.search('reset');
        this.setState({ email });
    }

    submit = e => {
        e.preventDefault();

        const email = this.state.email;
        if(email !== '') this.props.search(email);
    }

    render() {
        return (
            <form className="form-inline" onSubmit={this.submit}>
                <input
                    className="form-control mr-sm-2"
                    type="search"
                    name="email"
                    defaultValue=""
                    placeholder="Correo"
                    onChange={this.change} />

                <button
                    className="btn btn-success my-2"
                    type="submit">
                    Buscar
                </button>
            </form>
        );
    }
}
