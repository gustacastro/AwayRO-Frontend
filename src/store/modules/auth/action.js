/* eslint-disable camelcase */
export function signInRequest(userid, user_pass) {
  return {
    type: '@auth/SIGN_IN_REQUEST',
    payload: { userid, user_pass },
  };
}

export function signInSuccess(token, user) {
  return {
    type: '@auth/SIGN_IN_SUCCESS',
    payload: { token, user },
  };
}

export function signUpRequest(userid, user_pass, email, birthdate, sex) {
  return {
    type: '@auth/SIGN_UP_REQUEST',
    payload: {
      userid,
      user_pass,
      email,
      birthdate,
      sex,
    },
  };
}

export function signFailure() {
  return {
    type: '@auth/SIGN_FAILURE',
  };
}
