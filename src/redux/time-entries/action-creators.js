import {
  CREATE_TIME_ENTRY_FAILURE,
  CREATE_TIME_ENTRY_REQUEST,
  CREATE_TIME_ENTRY_SUCCESS,
  DELETE_TIME_ENTRY_FAILURE,
  DELETE_TIME_ENTRY_REQUEST,
  DELETE_TIME_ENTRY_SUCCESS,
  FETCH_TIME_ENTRIES_FAILURE,
  FETCH_TIME_ENTRIES_REQUEST,
  FETCH_TIME_ENTRIES_SUCCESS
} from '.';

export const createTimeEntryFailure = error => ({
  type: CREATE_TIME_ENTRY_FAILURE,
  payload: error
});

export const createTimeEntryRequest = newTimeEntry => ({
  type: CREATE_TIME_ENTRY_REQUEST,
  payload: newTimeEntry
});

export const createTimeEntrySuccess = newTimeEntry => ({
  type: CREATE_TIME_ENTRY_SUCCESS,
  payload: newTimeEntry
});

export const fetchTimeEntriesFailure = error => ({
  type: FETCH_TIME_ENTRIES_FAILURE,
  payload: error
});

export const fetchTimeEntriesRequest = () => ({
  type: FETCH_TIME_ENTRIES_REQUEST
});

export const fetchTimeEntriesSuccess = items => ({
  type: FETCH_TIME_ENTRIES_SUCCESS,
  payload: items
});

export const deleteTimeEntryFailure = error => ({
  type: DELETE_TIME_ENTRY_FAILURE,
  payload: error
});

export const deleteTimeEntryRequest = timeEntryID => ({
  type: DELETE_TIME_ENTRY_REQUEST,
  payload: timeEntryID
});

export const deleteTimeEntrySuccess = timeEntryID => ({
  type: DELETE_TIME_ENTRY_SUCCESS,
  payload: timeEntryID
});
