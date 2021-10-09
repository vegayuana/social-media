import { ACTIONS } from '../../constants';

const initialState = {
  users: [],
  fetching: false,
  error: null,
  user: null,
};

export default function reducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case ACTIONS.USER_REQUEST:
      return {
        ...state,
        fetching: true
      };
    case ACTIONS.USER_ERROR:
      return {
        ...state,
        error: payload,
        fetching: false,
      };
    case ACTIONS.USERS_SUCCESS:
      return {
        ...state,
        users: payload,
        fetching: false,
      };
    case ACTIONS.USER_SUCCESS:
      return {
        ...state,
        user: payload,
        fetching: false,
      };
    default:
      return state;
  }
}
