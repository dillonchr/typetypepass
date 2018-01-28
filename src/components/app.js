import { h, Component } from 'preact';
import store from '../store';
import { Provider } from 'preact-redux';
import Router from '../routes/index';
import Footer from './footer';

export default class App extends Component {
    /** Gets fired when the route changes.
     *  @param {Object} event       "change" event from [preact-router](http://git.io/preact-router)
     *  @param {string} event.url   The newly routed URL
     */
    handleRoute = e => {
        this.currentUrl = e.url;
    };

    render() {
        return (
            <Provider store={store}>
                <div id="app">
                    <Router />
                    <Footer />
                </div>
            </Provider>
        );
    }
}
