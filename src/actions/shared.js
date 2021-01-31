import { getInitialData } from '../utils/api';
import { receiveQuestions } from './questions';

// const AUTHED_ID = 'tylermcginnis';

function handleInitialData() {
  return (dispatch) => {
    return getInitialData()
      .then(({ questions }) => {
        dispatch(receiveQuestions(questions));
    })
  }
}

export default handleInitialData;
