import {
  FETCH_TEAM_MEMBERS_REQUEST,
  FETCH_TEAM_MEMBERS_SUCCESS
} from './actions';

const initialState = {
  items: [],
  isLoading: false,
  hasError: ''
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_TEAM_MEMBERS_REQUEST:
      return {
        ...state,
        items: [],
        isLoading: true
      };

    case FETCH_TEAM_MEMBERS_SUCCESS:
      return {
        ...state,
        items: payload,
        isLoading: false
      };

    default:
      return state;
  }
};
