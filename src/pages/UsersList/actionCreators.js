import { ACTIONS } from '../../constants';

export function userRequest() {
  return {
    type: ACTIONS.USER_REQUEST,
  };
}

export function userError(payload) {
  return {
    type: ACTIONS.USER_ERROR,
    payload
  };
}

export function getUsersSuccess(payload) {
  return {
    type: ACTIONS.USERS_SUCCESS,
    payload
  };
}

export function getUserSuccess(payload) {
  return {
    type: ACTIONS.USER_SUCCESS,
    payload
  };
}

