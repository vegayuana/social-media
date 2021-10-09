import * as actions from './actionCreators';
import axios from 'axios';
import { API } from '../../configs';

export function getAllUsers() {
  return async (dispatch) => {
    try {
      dispatch(actions.userRequest());
      const { data } = await axios(API.axiosOptions({
        method: 'GET',
        url: API.users,
      }));

      dispatch(actions.getUsersSuccess(data));
    } catch ({ response }) {
      dispatch(actions.userError(response));
    }
  };
}

export function getUserById(payload) {
  const { id } = payload;
  return async (dispatch) => {
    try {
      dispatch(actions.userRequest());
      const { data } = await axios(API.axiosOptions({
        method: 'GET',
        url: API.user(id),
      }));

      dispatch(actions.getUserSuccess(data));
    } catch ({ response }) {
      dispatch(actions.userError(response));
    }
  };
}
