import {
  all, fork, call, put, takeLatest
} from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';
import {
  deleteTimeEntry,
  fetchTimeEntries,
  postTimeEntry
} from '../../services/time-entries-api';

import {
  CREATE_TIME_ENTRY_REQUEST,
  DELETE_TIME_ENTRY_REQUEST,
  FETCH_TIME_ENTRIES_REQUEST,
  createTimeEntryFailure,
  createTimeEntrySuccess,
  deleteTimeEntryFailure,
  deleteTimeEntrySuccess,
  fetchTimeEntriesFailure,
  fetchTimeEntriesSuccess
} from '.';

function* createTimeEntryRequest({ payload }: any): SagaIterator {
  try {
    yield call(postTimeEntry, payload);
    yield put(createTimeEntrySuccess(payload));
  } catch (error) {
    yield put(createTimeEntryFailure(error));
  }
}

export function* watchCreateTimeEntry(): SagaIterator{
  yield takeLatest(CREATE_TIME_ENTRY_REQUEST, createTimeEntryRequest);
}

function* deleteTimeEntryRequest({ payload }: any): SagaIterator{
  try {
    yield call(deleteTimeEntry, payload);
    yield put(deleteTimeEntrySuccess(payload));
  } catch (error) {
    yield put(deleteTimeEntryFailure(error));
  }
}

export function* watchDeleteTimeEntry(): SagaIterator {
  yield takeLatest(DELETE_TIME_ENTRY_REQUEST, deleteTimeEntryRequest);
}

function* fetchTimeEntriesRequest(): SagaIterator {
  try {
    const response = yield call(fetchTimeEntries);
    yield put(fetchTimeEntriesSuccess(response));
  } catch (error) {
    yield put(fetchTimeEntriesFailure(error));
  }
}

export function* watchFetchTimeEntriesRequest(): SagaIterator{
  yield takeLatest(FETCH_TIME_ENTRIES_REQUEST, fetchTimeEntriesRequest);
}

export function* timeEntriesSagas(): SagaIterator {
  yield all([
    fork(watchFetchTimeEntriesRequest),
    fork(watchDeleteTimeEntry),
    fork(watchCreateTimeEntry)
  ]);
}
