import { REQUEST_TIME_ENTRIES, REQUEST_TIME_ENTRIES_SUCCESS } from './actions';

const initialState = {
  items: [],
  isLoading: false,
  hasError: ''
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case REQUEST_TIME_ENTRIES:
      return {
        ...state,
        items: [],
        isLoading: true
      };

    case REQUEST_TIME_ENTRIES_SUCCESS:
      return {
        ...state,
        items: payload,
        isLoading: false
      };

    default:
      return state;
  }
};
