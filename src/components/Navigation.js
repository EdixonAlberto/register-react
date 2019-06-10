import React, { Component } from 'react';
import logo from '../logo.svg';
import Clock from './Clock';

// require('bootstrap');

class Navigation extends Component {
   render() {
      return (
         <nav className="navbar navbar-dark bg-dark">
            <img src={logo} className="App-logo" alt="logo" />
            <p className="text-white h5">{<Clock />}</p>

            {/* <p className="text-white h1">React</p> */}

            <p className="text-white h5">
               {this.props.title}
               <span className="badge badge-pill badge-danger ml-2">
                  {this.props.users.length}
               </span>
            </p>
         </nav>
      );
   }
}

export default Navigation;
