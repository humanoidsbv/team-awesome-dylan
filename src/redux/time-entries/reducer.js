import {
  FETCH_TIME_ENTRIES_REQUEST,
  FETCH_TIME_ENTRIES_REQUEST_SUCCESS,
  DELETE_TIME_ENTRY_REQUEST,
  DELETE_TIME_ENTRY_REQUEST_SUCCESS
} from './actions';

const initialState = {
  items: [],
  isLoading: false,
  hasError: ''
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_TIME_ENTRIES_REQUEST:
      return {
        ...state,
        items: [],
        isLoading: true
      };

    case FETCH_TIME_ENTRIES_REQUEST_SUCCESS:
      return {
        ...state,
        items: payload,
        isLoading: false
      };

    case DELETE_TIME_ENTRY_REQUEST:
      return {
        ...state,
        isLoading: true
      };

    case DELETE_TIME_ENTRY_REQUEST_SUCCESS:
      return {
        ...state,
        items: state.items.filter(item => item.id !== payload),
        isLoading: false
      };

    default:
      return state;
  }
};
