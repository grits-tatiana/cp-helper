import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import MainComponent from './components/main-component';
import {reducer} from './reducer';
import middleware from './components/search-section/search-middleware';

const store = createStore(reducer, {globalStore: []}, applyMiddleware(middleware));

ReactDOM.render(
    <Provider store={store}>
        <MainComponent />
    </Provider>,
    document.getElementById('root'));

