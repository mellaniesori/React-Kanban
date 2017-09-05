/* jshint esversion:6 */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './containers/App';
import cards from './reducers';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(cards);

ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
