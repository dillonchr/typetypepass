import { h, Component } from 'preact';
import { Router } from 'preact-router';
import store from '../store';
import { Provider } from 'preact-redux';
import Register from '../routes/register';
import Profile from '../routes/profile';
import Story from '../routes/story';
import Wait from '../routes/wait';
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
                    <Router onChange={this.handleRoute}>
                        <Register path="/" />
                        <Wait path="/wait" />
                        <Story path="/story" />
                    </Router>
                    <Footer />
                </div>
            </Provider>
        );
    }
}
