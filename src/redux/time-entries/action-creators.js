import {
  FETCH_TIME_ENTRIES_REQUEST,
  FETCH_TIME_ENTRIES_REQUEST_SUCCESS,
  FETCH_TIME_ENTRIES_REQUEST_FAILURE,
  DELETE_TIME_ENTRY_REQUEST,
  DELETE_TIME_ENTRY_REQUEST_SUCCESS,
  DELETE_TIME_ENTRY_REQUEST_FAILURE
} from '.';

export const fetchTimeEntriesRequest = () => ({
  type: FETCH_TIME_ENTRIES_REQUEST
});

export const fetchTimeEntriesRequestSuccess = items => ({
  type: FETCH_TIME_ENTRIES_REQUEST_SUCCESS,
  payload: items
});

export const fetchTimeEntriesRequestFailure = error => ({
  type: FETCH_TIME_ENTRIES_REQUEST_FAILURE,
  payload: error
});

export const deleteTimeEntryRequest = timeEntryID => ({
  type: DELETE_TIME_ENTRY_REQUEST,
  payload: timeEntryID
});

export const deleteTimeEntryRequestSuccess = timeEntryID => ({
  type: DELETE_TIME_ENTRY_REQUEST_SUCCESS,
  payload: timeEntryID
});

export const deleteTimeEntryRequestFailure = error => ({
  type: DELETE_TIME_ENTRY_REQUEST_FAILURE,
  payload: error
});
