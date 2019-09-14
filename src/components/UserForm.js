import React, { Component } from 'react'

export default class UserForm extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div className="card border-success">

                {/* FORM */}
                <form className="card-body" onSubmit={null}>
                    <h5 className="text-success">Registrar Usuario</h5>

                    {/* NAME */}
                    <div className="form-group">
                        <input
                            className="form-control"
                            type="text"
                            name="name"
                            placeholder="Nombre"
                            onChange={null}
                            // value={this.state.name} TODO: estudiar esta forma
                        />
                    </div>

                    {/* PROFESSION */}
                    <div className="form-group">
                        <input
                            className="form-control"
                            type="text"
                            name="profession"
                            placeholder="Profesión"
                            onChange={null}
                        />
                    </div>

                    {/* AGE */}
                    <div className="form-group">
                        <input
                            className="form-control"
                            type="text"
                            name="age"
                            placeholder="Edad"
                            onChange={null}
                        />
                    </div>

                    {/* EMAIL */}
                    <div className="form-group">
                        <input
                            className="form-control"
                            type="text"
                            name="email"
                            placeholder="Correo"
                            onChange={null} />
                    </div>

                    {/* COUNTRY */}
                    <div className="form-group">
                        <span className="d-block m-2">País</span>
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
                        type="submit">Registrar
                    </button>

                </form>
            </div>
        )
    }
}
