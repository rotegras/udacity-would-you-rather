import { createBrowserHistory } from 'history';
import { applyMiddleware, createStore, compose } from 'redux';
import { routerMiddleware } from 'connected-react-router'
import rootReducer from '../reducers';
// import ApplyMiddleware from '../middlewares';
import logger from '../middlewares/logger';
import thunk from 'redux-thunk';


const history = createBrowserHistory({ forceRefresh: true });

function configureStore() {
  const store = createStore(
    // preloadedState,
    rootReducer(history),
    compose(
      applyMiddleware(
        routerMiddleware(history), // for dispatching history actions
        logger,
        thunk,
      ),
      // eslint-disable-next-line no-underscore-dangle
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    )
  );

  return store;
}

export default configureStore;
export { history };
