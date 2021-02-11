import { _saveQuestion } from "../utils/handleData";

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const ADD_QUESTION = 'ADD_QUESTION';

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  }
}

export function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    question,
  }
}

export function handleAddQuestion(question) {
  return (dispatch) => {
    return _saveQuestion({
      question,
    })
      .then((res) => dispatch(addQuestion(res)));
  }
}