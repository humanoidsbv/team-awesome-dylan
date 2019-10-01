import {
  CREATE_TEAM_MEMBER_FAILURE,
  CREATE_TEAM_MEMBER_REQUEST,
  CREATE_TEAM_MEMBER_SUCCESS,
  FETCH_TEAM_MEMBERS_FAILURE,
  FETCH_TEAM_MEMBERS_REQUEST,
  FETCH_TEAM_MEMBERS_SUCCESS
} from '.';

export const fetchTeamMembersFailure = error => ({
  type: FETCH_TEAM_MEMBERS_FAILURE,
  payload: error
});

export const fetchTeamMembersRequest = () => ({
  type: FETCH_TEAM_MEMBERS_REQUEST
});

export const fetchTeamMembersSuccess = items => ({
  type: FETCH_TEAM_MEMBERS_SUCCESS,
  payload: items
});

export const createTeamMemberFailure = error => ({
  type: CREATE_TEAM_MEMBER_FAILURE,
  payload: error
});

export const createTeamMemberRequest = newTeamMember => ({
  type: CREATE_TEAM_MEMBER_REQUEST,
  payload: newTeamMember
});

export const createTeamMemberSuccess = newTeamMember => ({
  type: CREATE_TEAM_MEMBER_SUCCESS,
  payload: newTeamMember
});
