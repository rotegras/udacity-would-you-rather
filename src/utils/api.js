import { _getQuestions } from './handleData';

export function getInitialData() {
  return Promise.all([
    _getQuestions(),
  ]).then(([questions]) => ({
    questions,
  }))
}
