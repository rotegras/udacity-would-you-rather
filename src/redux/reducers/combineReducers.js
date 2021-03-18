import { combineReducers } from 'redux';
import questions from './questions';
import users from './users';
import authedUser from './authedUser';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage/session';
import hardSet from 'redux-persist/lib/stateReconciler/hardSet'


const persistConfig = {
  key: 'root',
  storage,
  stateReconciler: hardSet,
}

const reducer = combineReducers({
  questions,
  users,
  authedUser,
});


export default persistReducer(persistConfig, reducer);
