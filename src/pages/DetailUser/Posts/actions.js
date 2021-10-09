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
        url: API.posts(id),
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
        url: API.posts(id),
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
        url: API.comments(id),
      }));

      dispatch(actions.getCommentsSuccess(data));
    } catch ({ response }) {
      dispatch(actions.getCommentsError(response));
    }
  };
}