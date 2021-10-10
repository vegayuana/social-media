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

export function getCommentsRequest() {
  return {
    type: ACTIONS.GET_COMMENTS_REQUEST
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
    type: ACTIONS.GET_COMMENTS_ERROR,
    payload
  };
}

export function createPostRequest() {
  return {
    type: ACTIONS.CREATE_POST_REQUEST
  };
}

export function createPostSuccess(payload) {
  return {
    type: ACTIONS.CREATE_POST_SUCCESS,
    payload
  };
}

export function createPostError(payload) {
  return {
    type: ACTIONS.CREATE_POST_ERROR,
    payload
  };
}

export function updatePostRequest() {
  return {
    type: ACTIONS.UPDATE_POST_REQUEST
  };
}

export function updatePostSuccess(payload) {
  return {
    type: ACTIONS.UPDATE_POST_SUCCESS,
    payload
  };
}

export function updatePostError() {
  return {
    type: ACTIONS.UPDATE_POST_ERROR,
  };
}

export function deletePostRequest() {
  return {
    type: ACTIONS.DELETE_POST_REQUEST
  };
}

export function deletePostSuccess(payload) {
  return {
    type: ACTIONS.DELETE_POST_SUCCESS,
    payload
  };
}

export function deletePostError() {
  return {
    type: ACTIONS.DELETE_POST_ERROR,
  };
}

export function createCommentRequest() {
  return {
    type: ACTIONS.CREATE_COMMENT_REQUEST
  };
}

export function createCommentSuccess(payload) {
  return {
    type: ACTIONS.CREATE_COMMENT_SUCCESS,
    payload
  };
}

export function createCommentError() {
  return {
    type: ACTIONS.CREATE_COMMENT_ERROR,
  };
}

export function updateCommentRequest() {
  return {
    type: ACTIONS.UPDATE_COMMENT_REQUEST
  };
}

export function updateCommentSuccess(payload) {
  return {
    type: ACTIONS.UPDATE_COMMENT_SUCCESS,
    payload
  };
}

export function updateCommentError() {
  return {
    type: ACTIONS.UPDATE_COMMENT_ERROR,
  };
}

export function deleteCommentRequest() {
  return {
    type: ACTIONS.DELETE_COMMENT_REQUEST
  };
}

export function deleteCommentSuccess(payload) {
  return {
    type: ACTIONS.DELETE_COMMENT_SUCCESS,
    payload
  };
}

export function deleteCommentError() {
  return {
    type: ACTIONS.DELETE_COMMENT_ERROR,
  };
}
