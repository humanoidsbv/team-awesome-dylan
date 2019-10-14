import {
  CREATE_TEAM_MEMBER_FAILURE,
  CREATE_TEAM_MEMBER_REQUEST,
  CREATE_TEAM_MEMBER_SUCCESS,
  FETCH_TEAM_MEMBERS_FAILURE,
  FETCH_TEAM_MEMBERS_REQUEST,
  FETCH_TEAM_MEMBERS_SUCCESS,
  SORT_TEAM_MEMBERS_BY_FIELD,
  SORT_TEAM_MEMBERS_DIRECTION
} from '.';

import { ActionInterface } from './types';

export const fetchTeamMembersFailure = (error): ActionInterface => ({
  type: FETCH_TEAM_MEMBERS_FAILURE,
  payload: error
});

export const fetchTeamMembersRequest = (): ActionInterface => ({
  type: FETCH_TEAM_MEMBERS_REQUEST
});

export const fetchTeamMembersSuccess = (items): ActionInterface => ({
  type: FETCH_TEAM_MEMBERS_SUCCESS,
  payload: items
});

export const createTeamMemberFailure = (error): ActionInterface => ({
  type: CREATE_TEAM_MEMBER_FAILURE,
  payload: error
});

export const createTeamMemberRequest = (newTeamMember): ActionInterface => ({
  type: CREATE_TEAM_MEMBER_REQUEST,
  payload: newTeamMember
});

export const createTeamMemberSuccess = (newTeamMember): ActionInterface => ({
  type: CREATE_TEAM_MEMBER_SUCCESS,
  payload: newTeamMember
});

export const sortTeamMembersByField = (teamMemberSorter): ActionInterface => ({
  type: SORT_TEAM_MEMBERS_BY_FIELD,
  payload: teamMemberSorter
});

export const sortTeamMembersDirection = (): ActionInterface => ({
  type: SORT_TEAM_MEMBERS_DIRECTION
});
