import { ClientsStateInterface } from './types';

import {
  CREATE_CLIENT_REQUEST,
  CREATE_CLIENT_SUCCESS,
  FETCH_CLIENTS_REQUEST,
  FETCH_CLIENTS_SUCCESS
} from './actions';

const initialState: ClientsStateInterface = {
  items: [],
  isLoading: false,
  hasError: ''
};

export default (state: ClientsStateInterface = initialState,
  { type, payload }): ClientsStateInterface => {
  switch (type) {
    case FETCH_CLIENTS_REQUEST:
      return {
        ...state,
        items: [],
        isLoading: true
      };

    case FETCH_CLIENTS_SUCCESS:
      return {
        ...state,
        items: payload,
        isLoading: false
      };

    case CREATE_CLIENT_REQUEST:
      return {
        ...state,
        isLoading: true
      };

    case CREATE_CLIENT_SUCCESS:
      return {
        ...state,
        items: [payload, ...state.items],
        isLoading: false
      };

    default:
      return state;
  }
};
