"use strict";
import React from 'react';
import ReactDOM from 'react-dom';
import Async from './component/Async';
import Fetch from './reducers/FetchReducer';
import { logger } from './middleware/logger';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

const createStoreWithMiddleware = applyMiddleware(logger, thunk)(createStore);
const store = createStoreWithMiddleware(Fetch);

ReactDOM.render(
    <Provider store={store}>
        <Async />
    </Provider>,
    document.getElementById("content")
)
