"use strict";
import React from 'react';
import ReactDOM from 'react-dom';
import CounterButton from './component/CounterButton';
import Counter from './reducers/Reducers';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';

const store = createStore(Counter);

ReactDOM.render(
    <Provider store={store}>
        <CounterButton />
    </Provider>,
    document.getElementById("content")
)
