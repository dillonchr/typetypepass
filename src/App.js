import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/HeaderComponent';
import Home from './components/HomeComponent';
import Play from './components/PlayRoute';

export default () => {
    return (
        <Router>
            <div>
                <Header />
                <Switch>
                    <Route path={`/play`} exact component={Play} />
                    <Route path={`/`} exact component={Home} />
                </Switch>
            </div>
        </Router>
    );
};
