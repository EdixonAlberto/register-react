import React from 'react';
import { BrowserRouter as Router, Route, } from "react-router-dom";
/* COMPONENTS */
import Navigation from './components/Navigation';
import Form from './components/Form';
import ToolsLis from './components/ToolsList';
import UsersList from './components/UsersList';

export default () => (
    <Router>
        <Navigation />

        <Route path="/" exact component={Form} />

        <Route path="/users" render={() => (
            <div>
                <ToolsLis />
                <UsersList />
            </div>
        )} />
    </Router>
);
