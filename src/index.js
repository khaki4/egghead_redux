import expect from 'expect';
import React from 'react';
import {createStore} from 'redux';
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
}

expect(counter(0, {type: 'INCREMENT'})).toEqual(1);
expect(counter(1, {type: 'INCREMENT'})).toEqual(2);
expect(counter(2, {type: 'DECREMENT'})).toEqual(1);
expect(counter(2, {type: 'SOMETHING'})).toEqual(2);
expect(counter(undefined, {})).toEqual(0);