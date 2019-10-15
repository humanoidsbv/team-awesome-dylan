import {
  all, fork, call, put, takeLatest
} from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';

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

function* createTeamMemberRequest({ payload }: any): SagaIterator {
  try {
    yield call(postTeamMember, payload);
    yield put(createTeamMemberSuccess(payload));
  } catch (error) {
    yield put(createTeamMemberFailure(error));
  }
}

export function* watchCreateTimeEntry(): SagaIterator {
  yield takeLatest(CREATE_TEAM_MEMBER_REQUEST, createTeamMemberRequest);
}

function* fetchTeamMembersRequest(): SagaIterator {
  try {
    const response = yield call(fetchTeamMembers);
    yield put(fetchTeamMembersSuccess(response));
  } catch (error) {
    yield put(fetchTeamMembersFailure(error));
  }
}

export function* watchFetchTeamMembersRequest(): SagaIterator {
  yield takeLatest(FETCH_TEAM_MEMBERS_REQUEST, fetchTeamMembersRequest);
}

export function* teamMembersSagas(): SagaIterator {
  yield all([fork(watchFetchTeamMembersRequest), fork(watchCreateTimeEntry)]);
}
