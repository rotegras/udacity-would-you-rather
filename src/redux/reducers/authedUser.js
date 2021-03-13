import { SET_AUTHEDUSER, RESET_AUTHEDUSER } from '../actions/authedUser';


export default function authedUser(state = {id: null}, action) {
  switch (action.type) {
    case SET_AUTHEDUSER:
      return {
        id: action.id,
      }
    case RESET_AUTHEDUSER:
      return {
        id: null,
      }
    default:
      return state;
  }
}
