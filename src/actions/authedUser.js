export const SET_AUTHEDUSER = 'SET_AUTHEDUSER';

export function setAuthedUser(authedUser) {
  return {
    type: SET_AUTHEDUSER,
    authedUser,
  }
}
