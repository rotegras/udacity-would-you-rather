import { createStore, compose } from 'redux';
import middleware from '../middlewares';
import rootReducer from '../reducers';



  const store = createStore(
    rootReducer,
    compose(
      middleware,
      // eslint-disable-next-line no-underscore-dangle
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    )
  );

export default store;
// export { history };
