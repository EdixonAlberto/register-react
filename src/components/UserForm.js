import React, { Component } from 'react';

export default class UserForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {},
            error: false
        }
    }

    change = e => {
        const { name, value } = e.target;

        this.setState({
            user: { ...this.state.user, [name]: value },
            error: false
        });
    }

    submit = e => {
        e.preventDefault();

        const form = e.target;
        let fieldsFull = true;

        // Se usa forOf porque form.element es un array asociativo
        for(var field of form.elements) {
            if(field.value === '') {
                fieldsFull = false;
                break;
            }
        }

        if(fieldsFull) {
            // Se crea nuevo usuario
            this.props.create(this.state.user);
            this.resetForm(form);
        } else {
            this.setState({ error: true });
            form.classList.add('was-validated');
        }
    }

    showError = () => this.state.error ?
        { display: 'block' } : { display: 'none' }

    resetForm = form => {
        this.setState({
            user: {},
            error: false
        });

        form.classList.remove('was-validated');
        form.reset();
    }

    render() {
        return (
            <div className="card border-success">

                {/* FORM */}
                <form className="card-footer" noValidate autoComplete="off" onSubmit={this.submit}>
                    <h5 className="text-success pb-3">Registrar Usuario</h5>

                    {/* ERROR */}
                    <div
                        className="text-center bg-danger rounded-lg mb-3 p-2"
                        style={this.showError()}>
                        <span className="text-white">
                            Los campos con (*) son requeridos.
                        </span>
                    </div>

                    {/* NAME AND LASTNAME */}
                    <div className="form-row mb-3">
                        <div className="col">
                            <strong className="d-block text-dark mb-1">Nombre
                                <span className="text-danger"> *</span>
                            </strong>
                            <input
                                className="form-control"
                                type="text"
                                name="name"
                                defaultValue=""
                                placeholder="Nombre"
                                required
                                onChange={this.change} />
                        </div>

                        <div className="col">
                            <strong className="d-block text-dark mb-1">Apellido
                                <span className="text-danger"> *</span>
                            </strong>
                            <input
                                className="form-control"
                                type="text"
                                name="lastname"
                                defaultValue=""
                                placeholder="Apellido"
                                required
                                onChange={this.change} />
                        </div>
                    </div>

                    {/* AGE */}
                    <div className="form-group">
                        <strong className="d-block text-dark mb-1">Edad
                            <span className="text-danger"> *</span>
                        </strong>
                        <input
                            className="form-control"
                            type="text"
                            name="age"
                            defaultValue=""
                            placeholder="Ingresa tu Edad"
                            required
                            onChange={this.change} />
                    </div>

                    {/* SEX */}
                    <div className="form-group">
                        <strong className="d-block text-dark mb-1">Sexo
                            <span className="text-danger"> *</span>
                        </strong>
                        <select
                            className="custom-select"
                            name="sex"
                            required
                            onChange={this.change}>
                            <option value="">Escojer...</option>
                            <option>Mujer</option>
                            <option>Hombre</option>
                            <option>Otro</option>
                            <option>Prefiero no decirlo</option>
                        </select>
                    </div>

                    {/* EMAIL */}
                    <div className="form-group">
                        <strong className="d-block text-dark mb-1">Correo Electrónico
                            <span className="text-danger"> *</span>
                        </strong>
                        <input
                            className="form-control"
                            type="text"
                            name="email"
                            defaultValue=""
                            placeholder="Ingresa tu Correo Electrónico"
                            required
                            onChange={this.change} />
                    </div>

                    {/* PHONE */}
                    <div className="form-group">
                        <strong className="d-block text-dark mb-1">Teléfono
                            <span className="text-danger"> *</span>
                        </strong>
                        <input
                            className="form-control"
                            type="text"
                            name="phone"
                            defaultValue=""
                            placeholder="Ingresa tu Teléfono"
                            required
                            onChange={this.change} />
                    </div>

                    {/* COUNTRY */}
                    <div className="form-group">
                        <strong className="d-block text-dark mb-1">País
                            <span className="text-danger"> *</span>
                        </strong>
                        <select
                            className="form-control"
                            name="country"
                            required
                            onChange={this.change}>
                            <option value="">Escojer...</option>
                            <option>Venezuela</option>
                            <option>Colombia</option>
                            <option>Peru</option>
                            <option>Chile</option>
                        </select>
                    </div>

                    {/* REGISTER */}
                    <button
                        className="btn btn-success float-right"
                        name="button"
                        value="empty"
                        type="submit">
                        <span className="font-white">Registrar</span>
                    </button>

                </form>

            </div >
        );
    }
}
