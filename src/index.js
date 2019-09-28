import React from 'react';
import ReactDOM from 'react-dom';
import store from './modules/redux/store';
import { Provider } from 'react-redux';
/* COMPONENTS */
import App from './App';
// ASSETS
import './assets/css/index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
