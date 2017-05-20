import React, { Component } from 'react';
import { createStore } from 'redux'
import ReactDOM from 'react-dom';
import expect, { createSpy, spyOn, isSpy } from 'expect'
import deepFreeze from 'deep-freeze';

const todos = (state = [], action) => {
    switch (action.type) {
        case 'TOGGLE_TODO':
            return state.map((todo) => {
                if (todo.id !== action.id) {
                    return todo;
                }


                /**
                 * override completed in todo object
                 * return _extends({}, todo, {
	                    completed: !todo.completed
	                });
                 */
                return {
                    ...todo,
                    completed: !todo.completed,
                }
            });
        default:
            return state;
    }
};

const testToggleTodo = () => {
    const stateBefore = [
        {
            id: 0,
            text: 'Learn Redux',
            completed: false
        },
        {
            id: 1,
            text: 'Go shopping',
            completed: false
        }
    ];

    const action = {
        type: 'TOGGLE_TODO',
        id: 1
    };

    const stateAfter = [
        {
            id: 0,
            text: 'Learn Redux',
            completed: false
        },
        {
            id: 1,
            text: 'Go shopping',
            completed: true
        }
    ];

    deepFreeze(stateBefore);
    deepFreeze(action);

    expect(
        todos(stateBefore, action)
    ).toEqual(stateAfter);
};

testToggleTodo();
console.log('All test passed');