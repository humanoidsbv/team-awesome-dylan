import { all, fork, call, put, takeLatest } from 'redux-saga/effects';
import {
  fetchTimeEntries,
  deleteTimeEntry,
  postTimeEntry
} from '../../services/time-entries-api';

import {
  FETCH_TIME_ENTRIES_REQUEST,
  fetchTimeEntriesSuccess,
  fetchTimeEntriesFailure,
  DELETE_TIME_ENTRY_REQUEST,
  deleteTimeEntrySuccess,
  deleteTimeEntryFailure,
  CREATE_TIME_ENTRY_REQUEST,
  createTimeEntrySuccess,
  createTimeEntryFailure
} from '.';

function* fetchTimeEntriesRequest() {
  try {
    const response = yield call(fetchTimeEntries);
    yield put(fetchTimeEntriesSuccess(response));
  } catch (error) {
    yield put(fetchTimeEntriesFailure(error));
  }
}

export function* watchFetchTimeEntriesRequest() {
  yield takeLatest(FETCH_TIME_ENTRIES_REQUEST, fetchTimeEntriesRequest);
}

function* deleteTimeEntryRequest({ payload }) {
  try {
    yield call(deleteTimeEntry, payload);
    yield put(deleteTimeEntrySuccess(payload));
  } catch (error) {
    yield put(deleteTimeEntryFailure(error));
  }
}

export function* watchDeleteTimeEntry() {
  yield takeLatest(DELETE_TIME_ENTRY_REQUEST, deleteTimeEntryRequest);
}

function* createTimeEntryRequest({ payload }) {
  try {
    yield call(postTimeEntry, payload);
    yield put(createTimeEntrySuccess(payload));
  } catch (error) {
    yield put(createTimeEntryFailure(error));
  }
}

export function* watchCreateTimeEntry() {
  yield takeLatest(CREATE_TIME_ENTRY_REQUEST, createTimeEntryRequest);
}

export function* timeEntriesSagas() {
  yield all([
    fork(watchFetchTimeEntriesRequest),
    fork(watchDeleteTimeEntry),
    fork(watchCreateTimeEntry)
  ]);
}
