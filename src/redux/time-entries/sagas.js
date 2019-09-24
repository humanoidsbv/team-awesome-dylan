import { all, fork, call, put, takeLatest } from 'redux-saga/effects';
import {
  fetchTimeEntries,
  deleteTimeEntry
} from '../../services/time-entries-api';

import {
  FETCH_TIME_ENTRIES_REQUEST,
  fetchTimeEntriesRequestSuccess,
  fetchTimeEntriesRequestFailure,
  DELETE_TIME_ENTRY_REQUEST,
  deleteTimeEntryRequestSuccess,
  deleteTimeEntryRequestFailure
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

export function* timeEntriesSagas() {
  yield all([fork(watchRequestTimeEntries), fork(watchDeleteTimeEntry)]);
}
