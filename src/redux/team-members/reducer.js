import {
  CREATE_TEAM_MEMBER_REQUEST,
  CREATE_TEAM_MEMBER_SUCCESS,
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

    case CREATE_TEAM_MEMBER_REQUEST:
      return {
        ...state,
        isLoading: true
      };

    case CREATE_TEAM_MEMBER_SUCCESS:
      return {
        ...state,
        items: [payload, ...state.items],
        isLoading: false
      };

    default:
      return state;
  }
};
