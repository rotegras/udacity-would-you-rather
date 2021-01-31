import { createStore, compose } from 'redux';
import reducer from '../reducers';
import middleware from '../middlewares';

const store = createStore(
  reducer, compose(
    middleware,
    // eslint-disable-next-line no-underscore-dangle
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  )
);


export default store;
