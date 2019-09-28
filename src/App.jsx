import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
/* COMPONENTS */
import Navigation from './components/Navigation';
import Form from './components/Form';
import ToolsLis from './components/ToolsList';
import UsersList from './components/UsersList';

export default () => (
    <Router basename={process.env.PUBLIC_URL}>
        <Navigation />

        <Switch>
            <Route exact path="/" component={Form} />
            <Route path="/users" render={() => (
                <div>
                    <ToolsLis />
                    <UsersList />
                </div>
            )} />
            <Route render={() => (
                <div className="container col-md-6 my-5">
                    <h2 className="text-center text-danger">
                        404 Not found
                    </h2>
                </div>
            )} />
        </Switch>
    </Router>
);
