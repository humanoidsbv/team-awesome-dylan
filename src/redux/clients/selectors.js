import { createSelector } from 'reselect';

export const clientsRootSelector = createSelector(
  state => state,
  ({ clients }) => clients
);

export const clientsItemsSelector = createSelector(
  clientsRootSelector,
  ({ items }) => items
);

export const clientsIsLoadingSelector = createSelector(
  clientsRootSelector,
  ({ isLoading }) => isLoading
);

export const clientsErrorSelector = createSelector(
  clientsRootSelector,
  ({ error }) => error
);
