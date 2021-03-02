import { createStore, compose } from 'redux';
import middleware from '../middlewares';
import { createBrowserHistory } from 'history';
import rootReducer from '../reducers';
// import logger from '../middlewares/logger';
// import thunk from 'redux-thunk';


const history = createBrowserHistory()

  const store = createStore(
    rootReducer(history),
    compose(
      middleware,
      // eslint-disable-next-line no-underscore-dangle
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    )
  );

export default store;
// export { history };
