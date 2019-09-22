import { all, takeLatest, call, put } from 'redux-saga/effects';
import api from '~/services/api';
import { updateUserSuccess } from './actions';
import { toast } from 'react-toastify';
import history from '~/services/history';

export function* updateUser({ payload }) {
  try {
    const response = yield call(api.put, 'users', payload.user);
    toast.success('Dados atualizados com sucesso');
    put(updateUserSuccess(response.data));
  } catch (e) {
    const { error } = e.response.data;
    toast.error(error);
  }
}

export function* createUserRequest({ payload }) {
  try {
    yield call(api.post, 'users', payload.user);
    toast.success('Usuário cadastrado com sucesso');
    history.push('/');
  } catch (e) {
    const { error } = e.response.data;
    toast.error(error);
  }
}

export default all([
  takeLatest('@user/UPDATE_REQUEST', updateUser),
  takeLatest('@user/CREATE_REQUEST', createUserRequest),
]);
