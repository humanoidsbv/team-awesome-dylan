export interface TimeEntryInterface {
  client: number;
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
