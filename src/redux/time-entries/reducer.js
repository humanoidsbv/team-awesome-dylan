import {
  CREATE_TIME_ENTRY_REQUEST,
  CREATE_TIME_ENTRY_SUCCESS,
  DELETE_TIME_ENTRY_REQUEST,
  DELETE_TIME_ENTRY_SUCCESS,
  FETCH_TIME_ENTRIES_REQUEST,
  FETCH_TIME_ENTRIES_SUCCESS
} from './actions';

const initialState = {
  items: [],
  isLoading: false,
  hasError: ''
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case CREATE_TIME_ENTRY_REQUEST:
      return {
        ...state,
        isLoading: true
      };

    case CREATE_TIME_ENTRY_SUCCESS:
      return {
        ...state,
        items: [payload, ...state.items],
        isLoading: false
      };

    case DELETE_TIME_ENTRY_REQUEST:
      return {
        ...state,
        isLoading: true
      };

    case DELETE_TIME_ENTRY_SUCCESS:
      return {
        ...state,
        items: state.items.filter(item => item.id !== payload),
        isLoading: false
      };

    case FETCH_TIME_ENTRIES_REQUEST:
      return {
        ...state,
        items: [],
        isLoading: true
      };

    case FETCH_TIME_ENTRIES_SUCCESS:
      return {
        ...state,
        items: payload,
        isLoading: false
      };

    default:
      return state;
  }
};