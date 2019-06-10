import React, { Component } from 'react';

class UserForm extends Component {
   constructor(props) {
      super(props);
      this.state = {
         name: '',
         profession: '',
         age: 0,
         email: '',
         country: 'Venezuela',
         'lista': []
      }

      this.handleInput = this.handleInput.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
   }

   // componentDidMount() { }

   // componentWillMount() { }

   handleInput(e) {
      const { value, name } = e.target;
      this.setState({
         [name]: value
      });
   }

   handleSubmit(e) {
      e.preventDefault();
      this.props.onAddUser(this.state);
      e.target.reset();

      // this.setState({
      //    lista: [this.lista, e]
      // });

      // this.reset();
      // alert(this.state);
      // console.log(this.state);c
   }


   reset = () => {
      // console.log(this.state.name);
      // console.log(this.props);
      // this.setState(this.initialState);
      this.setState({
         name: '',
         profession: '',
         age: 0,
         email: '',
         country: 'Venezuela'
      });

      // console.log(this.state.name);
      // this.render();
   }

   /*
      get initialState() {
         return {
            name: '',
            profession: '',
            age: 0,
            email: '',
            country: 'Venezuela'
         }
      }

      handleFormReset = () => {
         this.setState(() => this.initialState);
         console.log('listo');
      }
    */
   render() {
      return (
         <div className="card">
            <form className="card-body" onSubmit={this.handleSubmit}>
               <h5 className="text-success">Registrar Usuario:</h5>
               <div className="form-group">
                  <input
                     type="text"
                     name="fullname"
                     // value={this.state.name} TODO: estudiar esta forma
                     onChange={this.handleInput}
                     className="form-control"
                     placeholder="Nombre Completo"
                  />
               </div>

               <div className="form-group">
                  <input
                     type="text"
                     name="profession"
                     onChange={this.handleInput}
                     className="form-control"
                     placeholder="Profesión"
                  />
               </div>

               <div className="form-group">
                  <input
                     type="text"
                     name="age"
                     onChange={this.handleInput}
                     className="form-control"
                     placeholder="Edad"
                  />
               </div>

               <div className="form-group">
                  <input
                     type="text"
                     name="email"
                     onChange={this.handleInput}
                     className="form-control"
                     placeholder="Correo"
                  />
               </div>
               País de Origen
               <div className="form-group">

                  <select
                     name="country"
                     onChange={this.handleInput}
                     className="form-control">
                     >
                     <option>Venezuela</option>
                     <option>Colombia</option>
                     <option>Peru</option>
                     <option>Chile</option>
                  </select>
               </div>

               <button
                  type="submit"
                  className="btn btn-primary"
               >Registrar
               </button>
            </form>
         </div>
      );
   }
}

export default UserForm;
