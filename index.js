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

const { createStore } = Redux;
const store = createStore(counter);

// store has 3 important methods.

// 1> store.getState()
console.log(store.getState());

// 2> store.dispatch()
store.dispatch({ type: 'INCREMENT' });
console.log(store.getState());

// 3> store.subscribe()
const render = () => {
    document.body.innerText = store.getState();
};
store.subscribe(render);
// this is for init

window.onload = () => render();

document.addEventListener('click', () => {
    store.dispatch({ type: 'INCREMENT' });
});