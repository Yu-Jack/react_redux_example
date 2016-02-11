"use strict";
import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './component/TodoList';
import Todo from './reducers/Reducers';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';

const store = createStore(Todo);

ReactDOM.render(
    <Provider store={store}>
        <TodoList />
    </Provider>,
    document.getElementById("content")
)
