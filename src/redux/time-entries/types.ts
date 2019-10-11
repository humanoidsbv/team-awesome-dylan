import { ClientInterface } from '../clients/types';

export interface TimeEntryInterface {
  client: string | number;
  id: number;
  startTimestamp: string;
  stopTimestamp: string;
}
export interface TimeEntryStateInterface {
  items: TimeEntryInterface[];
  hasError: string;
  filterByClient: string | null;
  isLoading: boolean;
}
export interface ActionInterface {
  type: string;
  payload?: any;
}

export interface TimeEntriesStateInterface {
  clients: ClientInterface[];
  timeEntries: TimeEntryInterface[];
}
export interface TimeEntriesPropsInterface {
  clients: ClientInterface[];
  timeEntries: TimeEntryInterface[];
  createTimeEntry: () => {};
  deleteTimeEntry: () => {};
  fetchClients: () => [];
  fetchTimeEntries: () => TimeEntryInterface[] ;
  filterTimeEntriesByClient: (number) => TimeEntryInterface[];
}
