import {
  CREATE_CLIENT_FAILURE,
  CREATE_CLIENT_REQUEST,
  CREATE_CLIENT_SUCCESS,
  FETCH_CLIENTS_FAILURE,
  FETCH_CLIENTS_REQUEST,
  FETCH_CLIENTS_SUCCESS
} from '.';

export const fetchClientsFailure = error => ({
  type: FETCH_CLIENTS_FAILURE,
  payload: error
});

export const fetchClientsRequest = () => ({
  type: FETCH_CLIENTS_REQUEST
});

export const fetchClientsSuccess = items => ({
  type: FETCH_CLIENTS_SUCCESS,
  payload: items
});

export const createClientFailure = error => ({
  type: CREATE_CLIENT_FAILURE,
  payload: error
});

export const createClientRequest = newClient => ({
  type: CREATE_CLIENT_REQUEST,
  payload: newClient
});

export const createClientSuccess = newClient => ({
  type: CREATE_CLIENT_SUCCESS,
  payload: newClient
});
