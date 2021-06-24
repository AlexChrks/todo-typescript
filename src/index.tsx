import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.scss';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import {todosReducer} from './store/reducers/reducers';
import thunk from 'redux-thunk';

const store = createStore(todosReducer, applyMiddleware(thunk));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
