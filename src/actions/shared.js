import { _getQuestions } from '../utils/handleData';

const AUTHED_ID = 'tylermcginnis';

export default function handleInitialData() {
  return (dispatch) {
    return _getQuestions()
      .then(({ questions }) => {
        // dispatch(receiveUsers(users));
        dispatch(receiveQuestions(questions));
    })
  }
}
