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

export const teamMembersByFieldSelector = createSelector(
  teamMembersRootSelector,
  ({ items, sortByField, sortDirection }) =>
    [...items].sort((a, b) => {
      if (sortDirection) {
        return a[sortByField] > b[sortByField] ? 1 : -1;
      }
      return a[sortByField] > b[sortByField] ? -1 : 1;
    })
);

export const teamMembersSortDirectionSelector = createSelector(
  teamMembersRootSelector,
  ({ sortDirection }) => sortDirection
);
