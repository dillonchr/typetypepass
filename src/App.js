import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/HeaderComponent';
import Home from './components/HomeComponent';
import Play from './components/PlayRoute';

export default () => {
    return (
        <Router>
            <div>
                <Header />
                <Route path={`/`} exact component={Home} />
                <Route path={`/play`} exact component={Play} />
            </div>
        </Router>
    );
};
