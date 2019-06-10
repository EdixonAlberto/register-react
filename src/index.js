import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(<App />, document.getElementById('root'));

// Si desea que su aplicación funcione sin conexión y se cargue más rápido, puede cambiar
// unregister() para register() a continuación.Tenga en cuenta que esto viene con algunas trampas
// Aprenda más sobre los trabajadores de servicios: http://bit.ly/CRA-PWA
serviceWorker.register();
