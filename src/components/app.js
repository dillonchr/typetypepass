import { h } from 'preact';
import { Router } from 'preact-router';
import store from '../store';
import { Provider } from 'preact-redux';
import Header from './header';
import Home from '../routes/home';
import Play from '../routes';

export default () => {
    return (
        <Provider store={store}>

            <div id="app">
                <Header />
                <Router>
                    <Home exact path="/" />
                    <Play path="/play" />
                </Router>
            </div>
        </Provider>
    );
}
