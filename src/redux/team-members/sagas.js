import { all, fork, call, put, takeLatest } from 'redux-saga/effects';
import { fetchTeamMembers } from '../../services/team-members-api';

import {
  FETCH_TEAM_MEMBERS_REQUEST,
  fetchTeamMembersFailure,
  fetchTeamMembersSuccess
} from '.';

function* fetchTeamMembersRequest() {
  try {
    const response = yield call(fetchTeamMembers);
    yield put(fetchTeamMembersSuccess(response));
  } catch (error) {
    yield put(fetchTeamMembersFailure(error));
  }
}

export function* watchFetchTeamMembersRequest() {
  yield takeLatest(FETCH_TEAM_MEMBERS_REQUEST, fetchTeamMembersRequest);
}

export function* teamMembersSagas() {
  yield all([fork(watchFetchTeamMembersRequest)]);
}
