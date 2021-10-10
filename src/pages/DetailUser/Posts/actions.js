import * as actions from './actionCreators';
import axios from 'axios';
import { API } from '../../../configs';

export function getAllPosts(payload) {
  const { id } = payload;
  return async (dispatch) => {
    try {
      dispatch(actions.getPostRequest());
      const { data } = await axios(API.axiosOptions({
        method: 'GET',
        url: API.postsByUser(id),
      }));

      dispatch(actions.getPostsSuccess(data));
    } catch ({ response }) {
      dispatch(actions.getPostError(response));
    }
  };
}

export function getPostById(payload) {
  const { id } = payload;
  return async (dispatch) => {
    try {
      dispatch(actions.getPostRequest());
      const { data } = await axios(API.axiosOptions({
        method: 'GET',
        url: API.postById(id),
      }));

      dispatch(actions.getPostSuccess(data));
    } catch ({ response }) {
      dispatch(actions.getPostError(response));
    }
  };
}

export function getComments(payload) {
  const { id } = payload;
  return async (dispatch) => {
    try {
      dispatch(actions.getCommentsRequest());
      const { data } = await axios(API.axiosOptions({
        method: 'GET',
        url: API.commentsByPost(id),
      }));

      dispatch(actions.getCommentsSuccess(data));
    } catch ({ response }) {
      dispatch(actions.getCommentsError(response));
    }
  };
}

export function createPost(payload) {
  return async (dispatch) => {
    try {
      dispatch(actions.createPostRequest());
      const { data } = await axios(API.axiosOptions({
        method: 'POST',
        url: API.posts,
        data: payload
      }));
      dispatch(actions.createPostSuccess(data));
    } catch ({ response }) {
      dispatch(actions.createPostError());
    }
  };
}

export function updatePost(payload) {
  return async (dispatch) => {
    try {
      dispatch(actions.updatePostRequest());
      const { data } = await axios(API.axiosOptions({
        method: 'PUT',
        url: API.postById(payload.id),
        data: payload
      }));
      dispatch(actions.updatePostSuccess(data));
    } catch ({ response }) {
      dispatch(actions.updatePostError());
    }
  };
}

export function deletePost(payload) {
  return async (dispatch) => {
    try {
      dispatch(actions.deletePostRequest());
      await axios(API.axiosOptions({
        method: 'DELETE',
        url: API.postById(payload),
      }));

      dispatch(actions.deletePostSuccess(payload));
    } catch ({ response }) {
      dispatch(actions.deletePostError());
    }
  };
}

export function createComment(payload) {
  return async (dispatch) => {
    try {
      dispatch(actions.createCommentRequest());
      const { data } = await axios(API.axiosOptions({
        method: 'POST',
        url: API.comments,
        data: payload
      }));
      dispatch(actions.createCommentSuccess(data));
    } catch ({ response }) {
      dispatch(actions.createCommentError());
    }
  };
}

export function updateComment(payload) {
  return async (dispatch) => {
    try {
      dispatch(actions.updateCommentRequest());
      const { data } = await axios(API.axiosOptions({
        method: 'PUT',
        url: API.commentById(payload.id),
        data: payload
      }));
      dispatch(actions.updateCommentSuccess(data));
    } catch ({ response }) {
      dispatch(actions.updateCommentError());
    }
  };
}

export function deleteComment(payload) {
  return async (dispatch) => {
    try {
      dispatch(actions.deleteCommentRequest());
      await axios(API.axiosOptions({
        method: 'DELETE',
        url: API.commentById(payload),
      }));

      dispatch(actions.deleteCommentSuccess(payload));
    } catch ({ response }) {
      dispatch(actions.deleteCommentError());
    }
  };
}
