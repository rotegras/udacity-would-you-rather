import { getInitialData } from '../../utils/api';
import { receiveQuestions, addQuestion, answerQuestion } from './questions';
import { receiveUsers, addQuestionToUser, addAnswerToUser } from './users';
import { _saveQuestion, _saveQuestionAnswer } from '../../utils/handleData';


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
    // TODO: implement optimistic update?
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
    dispatch(addAnswerToUser(authedUser, qid, answer));
    dispatch(answerQuestion(authedUser, qid, answer));
    return _saveQuestionAnswer({
      authedUser,qid,answer
    })
  }
}


export { handleInitialData, handleAddQuestion, handleSaveQuestionAnswer };
