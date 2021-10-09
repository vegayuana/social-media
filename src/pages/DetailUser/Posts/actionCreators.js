import { ACTIONS } from '../../../constants';

export function getPostRequest() {
  return {
    type: ACTIONS.GET_POST_REQUEST,
  };
}

export function getPostError(payload) {
  return {
    type: ACTIONS.GET_POST_ERROR,
    payload
  };
}

export function getPostsSuccess(payload) {
  return {
    type: ACTIONS.GET_POSTS_SUCCESS,
    payload
  };
}

export function getPostSuccess(payload) {
  return {
    type: ACTIONS.GET_POST_SUCCESS,
    payload
  };
}

export function getCommentsRequest(payload) {
  return {
    type: ACTIONS.GET_COMMENTS_REQUEST,
    payload
  };
}

export function getCommentsSuccess(payload) {
  return {
    type: ACTIONS.GET_COMMENTS_SUCCESS,
    payload
  };
}

export function getCommentsError(payload) {
  return {
    type: ACTIONS.GET_COMMENTS_SUCCESS,
    payload
  };
}