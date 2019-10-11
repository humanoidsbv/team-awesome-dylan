import { all, fork } from 'redux-saga/effects';

import { timeEntriesSagas } from './time-entries';
import { teamMembersSagas } from './team-members';
import { clientsSagas } from './clients';

export default function* root() {
  yield all([
    fork(timeEntriesSagas),
    fork(teamMembersSagas),
    fork(clientsSagas)
  ]);
}
