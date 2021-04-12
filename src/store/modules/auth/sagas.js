import { takeLatest, call, put, all } from 'redux-saga/effects';

import { signInSuccess } from './action';

import history from '../../../services/history';
import api from '../../../services/api';

export function* signIn({ payload }) {
  // eslint-disable-next-line camelcase
  const { userid, user_pass } = payload;

  const response = yield call(api.post, 'sessions', {
    userid,
    user_pass,
  });

  const { token, user } = response.data;

  yield put(signInSuccess(token, user));

  history.push('/dashboard');
}

export default all([takeLatest('@auth/SIGN_IN_REQUEST', signIn)]);
