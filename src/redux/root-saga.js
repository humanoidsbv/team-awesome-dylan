import { all, fork } from 'redux-saga/effects';

import { timeEntriesSagas } from './time-entries';

export default function* root() {
  yield all([fork(timeEntriesSagas)]);
}
