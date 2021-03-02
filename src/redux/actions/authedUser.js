export const SET_AUTHEDUSER = 'SET_AUTHEDUSER';

export function setAuthedUser(authedUser) {
  return {
    type: SET_AUTHEDUSER,
    id: authedUser,
  }
}

// export function handleSetAuthedUser(authedUser) {
  // return (dispatch) => {

  // }
// }
