import { h, Component } from 'preact';
import { Router } from 'preact-router';
import store from '../store';
import { Provider } from 'preact-redux';
import Home from '../routes/home';
import Profile from '../routes/profile';
import Start from '../routes/start';

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
                    <Router onChange={this.handleRoute}>
                        <Home path="/" />
                        <Start path="/start" />
                        <Profile path="/profile/:user" />
                    </Router>
                </div>
            </Provider>
        );
    }
}
