import React, { Component } from 'react';

class UserCard extends Component {

   constructor(props) {
      super(props);
      this.deleteUser = this.deleteUser.bind(this);
   }

   deleteUser() {
      this.props.delete(this.props.index);
   }

   render() {
      return (
         <div className="col-md-6">
            <div className="card mt-4" key={this.props.index}>

               <div className="card-header text-white bg-dark">
                  {this.props.user.fullname} <br />
                  <span className="badge badge-pill badge-info ml-2">
                     {this.props.user.profession}
                  </span>
               </div>

               <div className="card-body text-left">
                  <b>Edad: </b> {this.props.user.age}<br />
                  <b>Correo: </b> {this.props.user.email}<br />
                  <b>País: </b> {this.props.user.country}<br />
               </div>

               <div className="card-footer">
                  <button
                     className="btn btn-danger"
                     onClick={this.deleteUser}
                  >Eliminar
                  </button>
               </div>

            </div>
         </div>
      );
   }
}

export default UserCard;
