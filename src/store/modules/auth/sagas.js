import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import { signInSuccess, signFailure } from './action';

import history from '../../../services/history';
import api from '../../../services/api';

export function* signIn({ payload }) {
  try {
    // eslint-disable-next-line camelcase
    const { userid, user_pass } = payload;

    const response = yield call(api.post, 'sessions', {
      userid,
      user_pass,
    });

    const { token, user } = response.data;

    yield put(signInSuccess(token, user));
    toast.success('Autenticado com sucesso');
    history.push('/dashboard');
  } catch (err) {
    toast.error('Falha na autenticação, verifique sus dados');
    yield put(signFailure());
  }
}

export default all([takeLatest('@auth/SIGN_IN_REQUEST', signIn)]);
