import { combineReducers } from 'redux';
import questions from './questions';
import users from './users';
import authedUser from './authedUser';
import { connectRouter } from 'connected-react-router'


const createRootReducer = (history) => combineReducers({
  router: connectRouter(history),
  questions,
  users,
  authedUser,
});

export default createRootReducer;
