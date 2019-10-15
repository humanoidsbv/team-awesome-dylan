import { ClientInterface } from '../clients/types';

export interface TimeEntryInterface {
  client?: ClientInterface;
  id?: number;
  startTimestamp?: string;
  stopTimestamp?: string;
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
export interface TimeEntriesStatePropsInterface {
  clients: ClientInterface[];
  timeEntries?: TimeEntryInterface[];
}

export interface TimeEntriesDispatchPropsInterface {
  createTimeEntry: (newTimeEntry: {}) => ActionInterface;
  deleteTimeEntry?: (timeEntryID: number) => ActionInterface;
  fetchClients?: () => ActionInterface;
  fetchTimeEntries?: () => ActionInterface;
  filterTimeEntriesByClient?: (timeEntryFilter: number) => ActionInterface;
}

export type TimeEntriesProps = TimeEntriesStatePropsInterface & TimeEntriesDispatchPropsInterface
