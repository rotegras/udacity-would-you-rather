import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
// import store from './store';
import { ConnectedRouter } from 'connected-react-router';
import configureStore, { history } from './store';

const store = configureStore(/* provide initial state if any */);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
