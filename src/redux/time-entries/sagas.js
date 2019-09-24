import { all, fork, call, put, takeLatest } from 'redux-saga/effects';
import { fetchTimeEntries } from '../../services/time-entries-api';

import {
  REQUEST_TIME_ENTRIES,
  requestTimeEntriesSuccess,
  requestTimeEntriesFailure
} from '.';

function* requestTimeEntries() {
  try {
    const response = yield call(fetchTimeEntries);
    yield put(requestTimeEntriesSuccess(response));
  } catch (error) {
    yield put(requestTimeEntriesFailure(error));
  }
}

export function* watchGetDomainResultsAction() {
  yield takeLatest(REQUEST_TIME_ENTRIES, requestTimeEntries);
}

export function* timeEntriesSagas() {
  yield all([fork(watchGetDomainResultsAction)]);
}
