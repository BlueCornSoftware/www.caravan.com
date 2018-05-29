import { createStore, applyMiddleware, compose } from 'redux';
import AppReducer from './App.reducer';
import InitialState from './InitialState';

/* eslint-disable */

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    })
    : compose;

/* eslint-enable */

const enhancer = composeEnhancers(applyMiddleware(...[]));

export default createStore(AppReducer, InitialState, enhancer);
