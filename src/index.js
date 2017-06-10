import expect from 'expect';
import React from 'react';
import { createStore } from 'redux';
import ReactDOM from 'react-dom';

const counter = (state = 0, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state;
    }
};

const store = createStore(counter);
const render = () => {
    document.body.innerHTML = store.getState();
};
render();
store.subscribe(render);

document.addEventListener('click', () => {
    store.dispatch({ type: 'INCREMENT' });
});
