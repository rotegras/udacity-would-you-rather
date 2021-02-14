import { RECEIVE_QUESTIONS, ADD_QUESTION, ANSWER_QUESTION } from '../actions/questions';


export default function questions(state = {}, action) {
  switch (action.type) {
    case RECEIVE_QUESTIONS :
      return {
        ...state,
        ...action.questions,
      }
    case ADD_QUESTION:
      return {
        ...state,
        [action.question.id]: {
          ...action.question,
        }
      }
    case ANSWER_QUESTION:
      // eslint-disable-next-line
      const voted = [...state[action.qid][action.answer].votes];
      // eslint-disable-next-line
      const addVotes = voted.includes(action.authedUser) ? voted : voted.concat(action.authedUser);
      return {
        ...state,
        [action.qid]: {
          ...state[action.qid],
          [action.answer]: {
            ...state[action.qid][action.answer],
            votes: addVotes,
          }
        }
      }

    default:
      return state;
  }
}

// TODO: check user in all options
// TODO: repeat method on add question and answer to user