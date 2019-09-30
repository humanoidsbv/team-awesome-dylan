import { all, fork, call, put, takeLatest } from 'redux-saga/effects';
import {
  fetchTeamMembers,
  postTeamMember
} from '../../services/team-members-api';

import {
  CREATE_TEAM_MEMBER_REQUEST,
  FETCH_TEAM_MEMBERS_REQUEST,
  createTeamMemberFailure,
  createTeamMemberSuccess,
  fetchTeamMembersFailure,
  fetchTeamMembersSuccess
} from '.';

function* createTeamMemberRequest({ payload }) {
  try {
    yield call(postTeamMember, payload);
    yield put(createTeamMemberSuccess(payload));
  } catch (error) {
    yield put(createTeamMemberFailure(error));
  }
}

export function* watchCreateTimeEntry() {
  yield takeLatest(CREATE_TEAM_MEMBER_REQUEST, createTeamMemberRequest);
}

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
  yield all([fork(watchFetchTeamMembersRequest), fork(watchCreateTimeEntry)]);
}
