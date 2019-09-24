import { all, fork, call, put, takeLatest } from 'redux-saga/effects';
import {
  fetchTimeEntries,
  deleteTimeEntry,
  postTimeEntry
} from '../../services/time-entries-api';

import {
  FETCH_TIME_ENTRIES_REQUEST,
  fetchTimeEntriesRequestSuccess,
  fetchTimeEntriesRequestFailure,
  DELETE_TIME_ENTRY_REQUEST,
  deleteTimeEntryRequestSuccess,
  deleteTimeEntryRequestFailure,
  POST_TIME_ENTRY_REQUEST,
  postTimeEntryRequestSuccess,
  postTimeEntryRequestFailure
} from '.';

function* requestTimeEntries() {
  try {
    const response = yield call(fetchTimeEntries);
    yield put(fetchTimeEntriesRequestSuccess(response));
  } catch (error) {
    yield put(fetchTimeEntriesRequestFailure(error));
  }
}

export function* watchRequestTimeEntries() {
  yield takeLatest(FETCH_TIME_ENTRIES_REQUEST, requestTimeEntries);
}

function* deleteTimeEntryRequest({ payload }) {
  try {
    yield call(deleteTimeEntry, payload);
    yield put(deleteTimeEntryRequestSuccess(payload));
  } catch (error) {
    yield put(deleteTimeEntryRequestFailure(error));
  }
}

export function* watchDeleteTimeEntry() {
  yield takeLatest(DELETE_TIME_ENTRY_REQUEST, deleteTimeEntryRequest);
}

function* postTimeEntryRequest({ payload }) {
  try {
    yield call(postTimeEntry, payload);
    yield put(postTimeEntryRequestSuccess(payload));
  } catch (error) {
    yield put(postTimeEntryRequestFailure(error));
  }
}

export function* watchPostTimeEntry() {
  yield takeLatest(POST_TIME_ENTRY_REQUEST, postTimeEntryRequest);
}

export function* timeEntriesSagas() {
  yield all([
    fork(watchRequestTimeEntries),
    fork(watchDeleteTimeEntry),
    fork(watchPostTimeEntry)
  ]);
}
