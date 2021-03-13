export const SET_AUTHEDUSER = 'SET_AUTHEDUSER';
export const RESET_AUTHEDUSER = 'RESET_AUTHEDUSER';


export function setAuthedUser(authedUser) {
  return {
    type: SET_AUTHEDUSER,
    id: authedUser,
  }
}

export function resetAuthedUser() {
  return {
    type: RESET_AUTHEDUSER,
    id: null,
  }
}
