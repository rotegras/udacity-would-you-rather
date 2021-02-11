import { getInitialData } from '../utils/api';
import { receiveQuestions, addQuestion } from './questions';
import { receiveUsers, addQuestionToUser } from './users';
import { _saveQuestion } from "../utils/handleData";

// const AUTHED_ID = 'tylermcginnis';

function handleInitialData() {
  return (dispatch) => {
    return getInitialData()
      .then(({ questions, users }) => {
        dispatch(receiveQuestions(questions));
        dispatch(receiveUsers(users));
    })
  }
}

function handleAddQuestion(question) {
  return (dispatch) => {
    return _saveQuestion({
      question,
    })
      .then((res) => {
        dispatch(addQuestion(res));
        dispatch(addQuestionToUser(res));
      })
  }
}


export { handleInitialData, handleAddQuestion };
