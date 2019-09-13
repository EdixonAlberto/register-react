import React, { Component } from 'react';
import './assets/css/App.css';
import logo from './assets/logo.svg';

class App extends Component {
    constructor(props) {
       super(props);

       this.state = null;
    }
    render() {
        return (
            <div>
                <div className="App">
                    <img className="App-logo" src={logo} alt="Logo"/>
                </div>
                <h1 className="title">Hello React</h1>
            </div>
        );
    }
}

export default App;