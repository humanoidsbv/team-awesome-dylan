import {
  CREATE_TIME_ENTRY_FAILURE,
  CREATE_TIME_ENTRY_REQUEST,
  CREATE_TIME_ENTRY_SUCCESS,
  DELETE_TIME_ENTRY_FAILURE,
  DELETE_TIME_ENTRY_REQUEST,
  DELETE_TIME_ENTRY_SUCCESS,
  FETCH_TIME_ENTRIES_FAILURE,
  FETCH_TIME_ENTRIES_REQUEST,
  FETCH_TIME_ENTRIES_SUCCESS,
  FILTER_TIME_ENTRIES_BY_CLIENT
} from '.';

import { ActionInterface } from './types';

export const createTimeEntryFailure = (error): ActionInterface => ({
  type: CREATE_TIME_ENTRY_FAILURE,
  payload: error
});

export const createTimeEntryRequest = (newTimeEntry): ActionInterface => ({
  type: CREATE_TIME_ENTRY_REQUEST,
  payload: newTimeEntry
});

export const createTimeEntrySuccess = (newTimeEntry): ActionInterface => ({
  type: CREATE_TIME_ENTRY_SUCCESS,
  payload: newTimeEntry
});

export const fetchTimeEntriesFailure = (error): ActionInterface => ({
  type: FETCH_TIME_ENTRIES_FAILURE,
  payload: error
});

export const fetchTimeEntriesRequest = (): ActionInterface => ({
  type: FETCH_TIME_ENTRIES_REQUEST
});

export const fetchTimeEntriesSuccess = (items): ActionInterface => ({
  type: FETCH_TIME_ENTRIES_SUCCESS,
  payload: items
});

export const filterTimeEntriesByClient = (timeEntryFilter): ActionInterface => ({
  type: FILTER_TIME_ENTRIES_BY_CLIENT,
  payload: timeEntryFilter
});

export const deleteTimeEntryFailure = (error): ActionInterface => ({
  type: DELETE_TIME_ENTRY_FAILURE,
  payload: error
});

export const deleteTimeEntryRequest = (timeEntryID): ActionInterface => ({
  type: DELETE_TIME_ENTRY_REQUEST,
  payload: timeEntryID
});

export const deleteTimeEntrySuccess = (timeEntryID): ActionInterface => ({
  type: DELETE_TIME_ENTRY_SUCCESS,
  payload: timeEntryID
});
