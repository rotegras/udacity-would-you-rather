import { createStore, compose } from 'redux';
import rootReducer from '../reducers';
import { applyMiddleware } from 'redux';
import logger from '../middlewares/logger';
import thunk from 'redux-thunk';
import { persistStore } from 'redux-persist';


const configureStore = () => {
  const store = createStore(
    rootReducer,
    compose(
      applyMiddleware(
        thunk,
        logger,
      ),
      // eslint-disable-next-line no-underscore-dangle
      // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    )
  );

  const persistor = persistStore(store);

  return { store, persistor };
}

export default configureStore;
