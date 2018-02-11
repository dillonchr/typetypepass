import { h } from 'preact';
import App from './components/app';
import './style';
import store from './store';
import { Provider } from 'preact-redux';

export default () => {
    return (
        <Provider store={store}>
            <App />
        </Provider>
    );
};
