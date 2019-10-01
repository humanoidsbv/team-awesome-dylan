import { createSelector } from 'reselect';

export const teamMembersRootSelector = createSelector(
  state => state,
  ({ teamMembers }) => teamMembers
);

export const teamMembersItemsSelector = createSelector(
  teamMembersRootSelector,
  ({ items }) => items
);

export const teamMembersIsLoadingSelector = createSelector(
  teamMembersRootSelector,
  ({ isLoading }) => isLoading
);

export const teamMembersErrorSelector = createSelector(
  teamMembersRootSelector,
  ({ error }) => error
);
