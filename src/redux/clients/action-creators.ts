import {
  CREATE_CLIENT_FAILURE,
  CREATE_CLIENT_REQUEST,
  CREATE_CLIENT_SUCCESS,
  FETCH_CLIENTS_FAILURE,
  FETCH_CLIENTS_REQUEST,
  FETCH_CLIENTS_SUCCESS
} from '.';

import { ActionInterface } from './types';

export const fetchClientsFailure = (error): ActionInterface => ({
  type: FETCH_CLIENTS_FAILURE,
  payload: error
});

export const fetchClientsRequest = (): ActionInterface => ({
  type: FETCH_CLIENTS_REQUEST
});

export const fetchClientsSuccess = (items): ActionInterface => ({
  type: FETCH_CLIENTS_SUCCESS,
  payload: items
});

export const createClientFailure = (error): ActionInterface => ({
  type: CREATE_CLIENT_FAILURE,
  payload: error
});

export const createClientRequest = (newClient): ActionInterface => ({
  type: CREATE_CLIENT_REQUEST,
  payload: newClient
});

export const createClientSuccess = (newClient): ActionInterface => ({
  type: CREATE_CLIENT_SUCCESS,
  payload: newClient
});
