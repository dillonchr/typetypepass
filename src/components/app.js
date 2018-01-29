import { h, Component } from 'preact';
import store from '../store';
import { Provider } from 'preact-redux';
import Router from '../routes';
import Footer from './footer';

export default props => {
    return (
        <Provider store={store}>
            <div id="app">
                <Router />
                <Footer />
            </div>
        </Provider>
    );
}
