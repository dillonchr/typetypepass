import { h } from 'preact';
import { Router } from 'preact-router';
import { connect } from 'preact-redux';
import store from '../store';
import { Provider } from 'preact-redux';
import Header from './header';
import Home from '../routes/home';
import Play from '../routes';

const App = ({ changeUrl }) => {
    const onRouteChange = ({url}) => changeUrl(url);

    return (
        <div id="app">
            <Header />
            <Router onChange={onRouteChange}>
                <Home exact path="/" />
                <Play path="/play" />
            </Router>
        </div>
    );
};

export default connect(() => ({}),
    d => ({
        changeUrl: value => d({type: 'url-change', value})
    }))(App);
