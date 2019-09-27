import { all, fork } from 'redux-saga/effects';

import { timeEntriesSagas } from './time-entries';
import { teamMembersSagas } from './team-members';

export default function* root() {
  yield all([fork(timeEntriesSagas, teamMembersSagas)]);
}
