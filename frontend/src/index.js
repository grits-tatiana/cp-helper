import React from 'react';
import ReactDOM from 'react-dom';
import MainComponent from './components/main-component';
import { createStore, applyMiddleware } from 'redux';
import { reducer } from './reducer';
import { Provider } from 'react-redux';
import middleware from './components/search-section/search-middleware';

const store = createStore(reducer, {globalStore: []}, applyMiddleware(middleware));

ReactDOM.render(
    <Provider store={store}>
        <MainComponent />
    </Provider>, 
    document.getElementById('root'));


