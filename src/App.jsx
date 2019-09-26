import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
// COMPONENTS
import Navigation from './components/Navigation';
import Form from './components/Form';
import UsersList from './components/UsersList';

export default () => (
    <Router>
        <Route path="/" exact render={() => (
            <div>
                <Navigation path="/" />
                <Form />
            </div>
        )} />

        <Route path="/users" render={() => (
            <div>
                <Navigation path="/users" />
                <UsersList />
            </div>
        )} />
    </Router>
);
