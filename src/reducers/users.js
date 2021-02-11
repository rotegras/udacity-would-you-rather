import { RECEIVE_USERS, ADD_QUESTION_TO_USER } from '../actions/users';


export default function users(state = {}, action) {
  switch (action.type) {
    case RECEIVE_USERS :
      return {
        ...state,
        ...action.users,
      }
    case ADD_QUESTION_TO_USER:
      // eslint-disable-next-line
      const { userId, questionId } = action;
      return {
        ...state,
        [userId]: {
          ...state[userId],
          questions: [ ...state[userId].questions, questionId],
        }
      }
    default:
      return state;
  }
}
