import { SET_AUTHEDUSER } from '../actions/authedUser';


export default function authedUser(state = {}, action) {
  switch (action.type) {
    case SET_AUTHEDUSER:
      return {
        ...state,
        authedUser: action.authedUser,
      }
    default:
      return state;
  }
}