import { getInitialData } from '../../utils/api';
import { receiveQuestions, addQuestion, answerQuestion } from './questions';
import { receiveUsers, addQuestionToUser, addAnswerToUser } from './users';
import { _saveQuestion, _saveQuestionAnswer } from "../../utils/handleData";
import { push } from 'connected-react-router';

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


function handleSaveQuestionAnswer(authedUser, qid, answer) {
  return (dispatch) => {
    return _saveQuestionAnswer({
      authedUser,qid,answer
    })
      .then(() => {
        dispatch(answerQuestion(authedUser, qid, answer));
        dispatch(addAnswerToUser(authedUser, qid, answer));
    })
    .then(() => dispatch(push('/home')))
  }
}


export { handleInitialData, handleAddQuestion, handleSaveQuestionAnswer };
