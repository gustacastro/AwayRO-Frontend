/* eslint-disable camelcase */
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
    toast.error('Falha na autenticação, verifique seus dados');
    yield put(signFailure());
  }
}

export function* signUp({ payload }) {
  try {
    const { userid, user_pass, email, birthdate, sex } = payload;

    yield call(api.post, 'users', {
      userid,
      user_pass,
      email,
      birthdate,
      sex,
    });

    history.push('/signin');
    toast.success('Usuário criado com sucesso!');
  } catch (err) {
    toast.error('Falha no cadastro, verifique seus dados!');

    yield put(signFailure());
  }
}

export default all([
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_UP_REQUEST', signUp),
]);
