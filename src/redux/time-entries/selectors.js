import { createSelector } from 'reselect';

import { clientsItemsSelector } from '../clients/selectors';

export const timeEntriesRootSelector = createSelector(
  state => state,
  ({ timeEntries }) => timeEntries
);

export const timeEntriesItemsSelector = createSelector(
  timeEntriesRootSelector,
  clientsItemsSelector,
  (timeEntries, clients) => {
    return timeEntries.items
      .map(timeEntry => ({
        ...timeEntry,
        client: clients.find(client => client.id === timeEntry.client)
      }))
      .sort((a, b) => (b.stopTimestamp < a.startTimestamp ? 1 : -1));
  }
);

export const timeEntriesByClientSelector = createSelector(
  timeEntriesItemsSelector,
  timeEntriesRootSelector,
  (items, { filterByClient }) => {
    return items.filter(
      item => filterByClient === null || item.client.id === filterByClient
    );
  }
);

export const timeEntriesIsLoadingSelector = createSelector(
  timeEntriesRootSelector,
  ({ isLoading }) => isLoading
);

export const timeEntriesErrorSelector = createSelector(
  timeEntriesRootSelector,
  ({ error }) => error
);
