import React, { Component } from 'react';
/* MODULES */
import firebaseDb from '../modules/firebaseDb';

export default class Form extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {},
            error: false
        }
    }

    create = () => {
        firebaseDb.ref('users/').push(this.state.user)
            .then(() => {
                // Se redirecciona a la lista de usuarios
                window.location.href = '/users';
            }).catch(error => {
                alert('Error al crear usuario: ' + error);
            });
    }

    resetForm = form => {
        this.setState({
            user: {},
            error: false
        });

        form.classList.remove('was-validated');
        form.reset();
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

        // Se verifica que todos los campos esten llenos
        const form = e.target;
        let fieldsFull = true;

        // Se usa forOf porque form.element es un array asociativo
        for(var field of form.elements) {
            if(field.value === '') {
                fieldsFull = false;
                break;
            }
        }

        // Se crea un nuevo usuario
        if(fieldsFull) {
            this.create();
            this.resetForm(form);
        } else {
            this.setState({ error: true });
            form.classList.add('was-validated');
        }
    }

    showError = () => this.state.error ? {} : { display: 'none' }

    render() {
        return (
            <section className="container px-0 py-4">
                <div className="card border-success col-md-5 px-0 mx-auto">
                    <h3 className="text-success text-center py-2">Formulario</h3>

                    {/* FORM */}
                    <form className="card-footer" noValidate autoComplete="on" onSubmit={this.submit}>
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
                                <strong className="d-block text-dark mb-1">
                                    Nombre <span className="text-danger">*</span>
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
                                <strong className="d-block text-dark mb-1">
                                    Apellido <span className="text-danger">*</span>
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
                            <strong className="d-block text-dark mb-1">
                                Edad <span className="text-danger">*</span>
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
                            <strong className="d-block text-dark mb-1">
                                Sexo <span className="text-danger">*</span>
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
                            <strong className="d-block text-dark mb-1">
                                Correo Electrónico <span className="text-danger">*</span>
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
                            <strong className="d-block text-dark mb-1">
                                Teléfono <span className="text-danger">*</span>
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
                            <strong className="d-block text-dark mb-1">
                                País <span className="text-danger">*</span>
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
                        <div className="d-flex justify-content-center pb-1">
                            <button
                                className="btn btn-success px-5 py-2"
                                name="button"
                                value="empty"
                                type="submit">
                                <span className="font-white h5">Registrar</span>
                            </button>
                        </div>
                    </form>

                </div>
            </section>
        );
    }
}
