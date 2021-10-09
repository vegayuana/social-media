import { ACTIONS } from '../../../constants';

const initialState = {
  posts: [],
  post: null,
  fetching: false,
  comments: [],
  fetchingComments: false,
  update: false,
  fetchingUpdate: false,
  deletePost: false,
  fetchingDelete: false,
  error: null
};

export default function reducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case ACTIONS.GET_POST_REQUEST:
      return {
        ...state,
        fetching: true
      };
    case ACTIONS.GET_POST_ERROR:
      return {
        ...state,
        error: payload,
        fetching: false,
      };
    case ACTIONS.GET_POSTS_SUCCESS:
      return {
        ...state,
        posts: payload,
        fetching: false,
      };
    case ACTIONS.GET_POST_SUCCESS:
      return {
        ...state,
        post: payload,
        fetching: false,
      };
    case ACTIONS.GET_COMMENTS_REQUEST:
      return {
        ...state,
        fetchingComments: true
      };
    case ACTIONS.GET_COMMENTS_SUCCESS:
      return {
        ...state,
        comments: payload,
        fetchingComments: false,
      };
    case ACTIONS.GET_COMMENTS_ERROR:
      return {
        ...state,
        error: payload,
        fetchingComments: false,
      };
    default:
      return state;
  }
}
