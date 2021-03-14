import { createStore, compose } from 'redux';
// import middleware from '../middlewares';
import rootReducer from '../reducers';
import { applyMiddleware } from 'redux';
import logger from '../middlewares/logger';
import thunk from 'redux-thunk';


const ConfigureStore = () => {

  let initialState = {};

  try {
    initialState = sessionStorage.getItem('wouldYouRatherState')
      ? JSON.parse(sessionStorage.getItem('wouldYouRatherState'))
      : {};
  } catch (error) {
    console.log('getError', error)
  }

  const saveToLocalStorage = (store) => (next) => (action) => {
    const stateToSave = store.getState();
    sessionStorage.setItem('wouldYouRatherState', JSON.stringify({
      ...stateToSave
    }));
    return next(action);
  }

  const store = createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(
        thunk,
        saveToLocalStorage,
        logger,
      ),
      // eslint-disable-next-line no-underscore-dangle
      // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    )
  );
  return store;
}

export default ConfigureStore;
