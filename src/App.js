import React, { Component } from 'react';
import './App.css';
import UserCard from './components/UserCard';
import Navigation from './components/Navigation';
import UserForm from './components/UserForm';
// import { users } from './users';

class App extends Component {
   constructor(props) {
      super(props);
      this.state = {
         title: 'Usuarios:',
         users: []
      }
      this.handleAddUser = this.handleAddUser.bind(this);
      this.deleteUser = this.deleteUser.bind(this);
   }

   handleAddUser(user) {
      this.setState({
         users: [...this.state.users, user]
      })
   }

   deleteUser(index) {
      if (window.confirm('¿ Esta seguro de eliminar a este usuario ?')) {
         this.setState({
            users: this.state.users.filter((element, i) => {
               return i !== index
            })
         })
      }
   }

   render() {
      const userCard = this.state.users.map((user, i) => {
         return (
            <UserCard user={user} index={i} key="" delete={this.deleteUser} />
         );
      });

      return (
         <div className="App">
            <Navigation title={this.state.title} users={this.state.users} />
            <p className="mt-2 h4">Registro de Usuarios</p>

            <div className="container-flow ml-4 mr-4 mb-4">

               {/*
               TODO: Agregar mensaje de acccion realizada

               <div className="row">
                  <h1 className="col-2 text-success">Registrado</h1>
                  <h3 className="text-darger" msj="">Eliminado</h3>
               </div>
               */}

               <div className="row">
                  <div className="col-8">
                     <div className="row">
                        {userCard}
                     </div>
                  </div>
                  <div className="col-4 mt-4">
                     <UserForm onAddUser={this.handleAddUser} />
                  </div>
               </div>
            </div>

         </div >
      );
   }
}

export default App;
