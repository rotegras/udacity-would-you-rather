import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
// import store from './store';
import { ConnectedRouter } from 'connected-react-router/immutable';
import configureStore, { history } from './redux/store';

// const store = configureStore(/* provide initial state if any */);
const store = configureStore(history);

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
