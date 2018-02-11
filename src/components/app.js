import { h, Component } from 'preact';
import store from '../store';
import { Provider } from 'preact-redux';
import Router from '../routes';
import Header from './header';

export default props => {
    return (
        <Provider store={store}>
            <div id="app">
                <Header />
                <Router />
            </div>
        </Provider>
    );
}
