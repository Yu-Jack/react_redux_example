"use strict";
import React from 'react';
import ReactDOM from 'react-dom';

// Example 1
import CounterButton from './example1/component/CounterButton';
import Counter from './example1/reducers/Reducers';

// Example 2
import TodoList from './example2/component/TodoList';
import Todo from './example2/reducers/Reducers';

import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';

// Usage
// change two places
// 1. createStore(Todo), Todo -> Counter
// 2. <TodoList /> -> <CounterButton />
// Then webpack

const store = createStore(Todo);
ReactDOM.render(
    <Provider store={store}>
        <TodoList />
    </Provider>,
    document.getElementById("content")
)
