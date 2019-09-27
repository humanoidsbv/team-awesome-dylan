import {
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
