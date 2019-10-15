import {
  all, fork, call, put, takeLatest
} from 'redux-saga/effects';
import { fetchClients, postClient } from '../../services/clients-api';
import { SagaIterator } from 'redux-saga';

import {
  CREATE_CLIENT_REQUEST,
  FETCH_CLIENTS_REQUEST,
  createClientFailure,
  createClientSuccess,
  fetchClientsFailure,
  fetchClientsSuccess
} from '.';

function* createClientRequest({ payload }: any): {} {
  try {
    yield call(postClient, payload);
    yield put(createClientSuccess(payload));
  } catch (error) {
    yield put(createClientFailure(error));
  }
}

export function* watchCreateClient(): SagaIterator {
  yield takeLatest(CREATE_CLIENT_REQUEST, createClientRequest);
}

function* fetchClientsRequest(): SagaIterator {
  try {
    const response = yield call(fetchClients);
    yield put(fetchClientsSuccess(response));
  } catch (error) {
    yield put(fetchClientsFailure(error));
  }
}

export function* watchFetchClientsRequest(): SagaIterator {
  yield takeLatest(FETCH_CLIENTS_REQUEST, fetchClientsRequest);
}

export function* clientsSagas(): SagaIterator {
  yield all([fork(watchFetchClientsRequest), fork(watchCreateClient)]);
}
