"use strict";
import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './component/TodoList';
import Todo from './reducers/Reducers';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

function logger({getState}) {
    return (next) => (action) => {
        console.log('action', action);
        let returnValue = next(action);
        console.log('state', getState());
        return returnValue;
    }
}
const createStoreWithMiddleware = applyMiddleware(logger)(createStore);
const store = createStoreWithMiddleware(Todo);

ReactDOM.render(
    <Provider store={store}>
        <TodoList />
    </Provider>,
    document.getElementById("content")
)
