import {
  REQUEST_TIME_ENTRIES,
  REQUEST_TIME_ENTRIES_SUCCESS,
  REQUEST_TIME_ENTRIES_FAILURE
} from '.';

export const requestTimeEntries = () => ({
  type: REQUEST_TIME_ENTRIES
});

export const requestTimeEntriesSuccess = items => ({
  type: REQUEST_TIME_ENTRIES_SUCCESS,
  payload: items
});

export const requestTimeEntriesFailure = error => ({
  type: REQUEST_TIME_ENTRIES_FAILURE,
  payload: error
});
