import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './redux/reducers';
import { createLogger } from 'redux-logger';
import apiMiddleware from './redux/middlewares/apiMiddleware';
import { loadState, saveState } from './redux/localStorage'
// import registerServiceWorker from './registerServiceWorker';

const logger = createLogger();
const persistedState = loadState();
const Store = createStore(
  reducer,
  persistedState,
  compose(
    applyMiddleware(logger, apiMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
Store.subscribe(() => {
  saveState(Store.getState());
});

ReactDOM.render(
  <Provider store={Store}>
  <App />
  </Provider>,
  document.getElementById('root'));
  // registerServiceWorker();
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
