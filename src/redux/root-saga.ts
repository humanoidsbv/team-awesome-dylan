import { all, fork } from 'redux-saga/effects';

import { timeEntriesSagas } from './time-entries';
import { teamMembersSagas } from './team-members';
import { clientsSagas } from './clients';
import { SagaIterator } from 'redux-saga';

export default function* root(): SagaIterator {
  yield all([
    fork(timeEntriesSagas),
    fork(teamMembersSagas),
    fork(clientsSagas)
  ]);
}
