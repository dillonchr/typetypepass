import { createStore } from 'redux';
import io from 'socket.io-client';

const initialState = {

};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        default:
            return state;
    }
};

const store = createStore(reducer);

const getName = () => {
    const storedName = window.localStorage.getItem('user-name');
    if (!storedName) {
        const name = prompt('What is your name?');
        window.localStorage.setItem('user-name', name);
        return name;
    }
    return storedName;
};

const socket = io(`${window.location.protocol}//${window.location.hostname}:7715`);

socket.on('connect', () => {
    socket.emit('add-player', getName());
});

socket.on('list-players', players => {
    document.querySelector('#players-list').innerHTML = players.reduce((html, name) => `${html}<li>${name}</li>`, '');
});

socket.on('your-turn', turn => {
    const precedingSentence = (turn ? turn.prompt : undefined) || 'BEGIN STORY!';
    socket.emit('add-line', prompt(precedingSentence));
});

export default store;
