import {
  CREATE_TEAM_MEMBER_REQUEST,
  CREATE_TEAM_MEMBER_SUCCESS,
  FETCH_TEAM_MEMBERS_REQUEST,
  FETCH_TEAM_MEMBERS_SUCCESS,
  SORT_TEAM_MEMBERS_BY_FIELD,
  SORT_TEAM_MEMBERS_DIRECTION
} from './actions';

const initialState = {
  items: [],
  isLoading: false,
  hasError: '',
  sortDirection: true
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

    case SORT_TEAM_MEMBERS_BY_FIELD:
      return {
        ...state,
        sortByField: payload
      };

    case SORT_TEAM_MEMBERS_DIRECTION:
      return {
        ...state,
        sortDirection: !state.sortDirection
      };

    default:
      return state;
  }
};
