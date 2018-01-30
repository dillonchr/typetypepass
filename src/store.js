import { createStore } from 'redux';
import io from 'socket.io-client';
import identity from './identity';

const socket = io(`https://${window.location.hostname}:${window.location.port}`);

const initialState = {
    name: identity.getPlayerName(),
    players: [],
    waiting: true
};

const store = createStore((state = initialState, action) => {
    switch(action.type) {
        case 'connection':
            return {...state, online: true};
        case 'disconnect':
            return {...state, online: false, waiting: true};
        case 'wait':
            return {...state, waiting: true};
        case 'set-name':
            socket.emit('add-player', action.value);
            identity.savePlayerName(action.value);
            return {...state, name: action.value, waiting: true};
        case 'list-players':
            return {...state, players: action.value};
        case 'add-line':
            socket.emit('add-line', action.value);
            return {...state, waiting: true};
        case 'end-story':
            socket.emit('end-story', action.value);
            return {...state, waiting: true};
        case 'receive-prompt':
            const { cycle, prompt } = action.value;
            return {...state, cycle, prompt, waiting: false};
        case 'storytime':
            return {...state, waiting: false, story: action.value};
        case 'restart':
            socket.emit('restart', identity.getAll());
            return {...state, waiting: true, story: null, cycle: null, prompt: null};
        default:
            return state;
    }
});

socket.on('connect', () => {
    store.dispatch({type: 'connection', value: true});
    socket.emit('register-uuid', identity.getUuid());
    if (initialState.name) {
        socket.emit('add-player', initialState.name);
    }
});

socket.on('disconnect', () => {
    store.dispatch({type: 'disconnect'});
});

socket.on('list-players', players => {
    store.dispatch({type: 'list-players', value: players});
});

socket.on('your-turn', turn => {
    store.dispatch({type: 'receive-prompt', value: turn});
});

socket.on('storytime', story => {
    store.dispatch({type: 'storytime', value: story});
});

socket.on('wait', () => {
    store.dispatch({type: 'wait'});
});

socket.on('early-bird', () => {
    store.dispatch({type: 'early-bird'});
    console.warn('Slow down tiger. Round has not begun.');
});

export default store;
