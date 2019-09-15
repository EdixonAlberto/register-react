import React, { Component } from 'react';

export default class UserForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: '',
            name: '',
            lastname: ''
            age: '',
            email: '',
            phone: '',
            country: '',
            created_at: ''
        }
    }

    change = e => {
        const { name, value } = e.target;
        console.log(name, value);
    }

    submit = e => {
        console.log(this.state);
        e.preventDefault();
    }

    render() {
        return (
            <div className="card border-success">

                {/* FORM */}
                <form className="card-body" onSubmit={this.submit}>
                    <h5 className="text-success">Registrar Usuario</h5>

                    {/* NAME */}
                    <div className="form-group">
                        <span className="d-block font-weight-bold mb-1">Nombre</span>
                        <input
                            className="form-control"
                            type="text"
                            name="name"
                            placeholder="Ingresa tu Nombre"
                            onChange={this.change} />

                    </div>

                    {/* LASTNAME */}
                    <div className="form-group">
                        <span className="d-block font-weight-bold mb-1">Apellido</span>
                        <input
                            className="form-control"
                            type="text"
                            name="lastname"
                            placeholder="Ingresa tu Apellido"
                            onChange={this.change} />
                    </div>

                    {/* AGE */}
                    <div className="form-group">
                        <span className="d-block font-weight-bold mb-1">Edad</span>
                        <input
                            className="form-control"
                            type="text"
                            name="age"
                            placeholder="Ingresa tu Edad"
                            onChange={null} />
                    </div>

                    {/* SEX */}
                    <div className="form-group">
                        <span className="d-block font-weight-bold mb-1">Sexo</span>
                        <select
                            className="form-control"
                            name="sex"
                            onChange={null}>
                            <option>Mujer</option>
                            <option>Hombre</option>
                            <option>Otro</option>
                            <option>Prefiero no decirlo</option>
                        </select>
                    </div>

                    {/* EMAIL */}
                    <div className="form-group">
                        <span className="d-block font-weight-bold mb-1">Correo Electrónico</span>
                        <input
                            className="form-control"
                            type="text"
                            name="email"
                            placeholder="Ingresa tu Correo Electrónico"
                            onChange={null} />
                    </div>

                    {/* PHONE */}
                    <div className="form-group">
                        <span className="d-block font-weight-bold mb-1">Teléfono</span>
                        <input
                            className="form-control"
                            type="text"
                            name="phone"
                            placeholder="Ingresa tu Teléfono"
                            onChange={null} />
                    </div>

                    {/* COUNTRY */}
                    <div className="form-group">
                        <span className="d-block font-weight-bold mb-1">País</span>
                        <select
                            className="form-control"
                            name="country"
                            onChange={null}>
                            <option>Venezuela</option>
                            <option>Colombia</option>
                            <option>Peru</option>
                            <option>Chile</option>
                        </select>
                    </div>

                    {/* REGISTER */}
                    <button
                        className="btn btn-primary float-right"
                        type="submit">
                        <span>Registrar</span>
                    </button>

                </form>
            </div>
        );
    }
}
