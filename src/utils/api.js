import { _getQuestions, _getUsers } from './handleData';

export function getInitialData() {
  return Promise.all([
    _getQuestions(),
    _getUsers(),
  ]).then(([questions, users]) => ({
    questions, users,
  }))
}
