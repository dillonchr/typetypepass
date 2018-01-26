import { createStore } from 'redux';
import io from 'socket.io-client';

const socket = io(`https://${window.location.hostname}:7715`);

const initialState = {
    name: window.localStorage.getItem('ttp-player-name')
};

const store = createStore((state = initialState, action) => {
    switch(action.type) {
        case 'connection':
            return {...state, online: action.value};
        case 'set-name':
            window.localStorage.setItem('ttp-player-name', action.value);
            return {...state, name: action.value};
        case 'list-players':
            return {...state, players: action.value};
        case 'add-line':
            socket.emit('add-line', action.value);
            return {...state, lastSentSentence: action.value};
        case 'receive-prompt':
            const { cycle, prompt } = action.value;
            return {...state, cycle, prompt, lastSentSentence: null };
        default:
            return state;
    }
});

socket.on('connect', () => {
    store.dispatch({type: 'connection', value: true});
});

socket.on('disconnect', () => {
    store.dispatch({type: 'connection', value: false});
});

socket.on('list-players', players => {
    store.dispatch({type: 'list-players', value: players});
});

socket.on('your-turn', turn => {
    store.dispatch({type: 'receive-prompt', value: turn});
});

export default store;
