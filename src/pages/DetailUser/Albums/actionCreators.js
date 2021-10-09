import { ACTIONS } from '../../../constants';

export function getAlbumsRequest() {
  return {
    type: ACTIONS.GET_ALBUMS_REQUEST,
  };
}

export function getAlbumsSuccess(payload) {
  return {
    type: ACTIONS.GET_ALBUMS_SUCCESS,
    payload
  };
}

export function getAlbumsError(payload) {
  return {
    type: ACTIONS.GET_ALBUMS_ERROR,
    payload
  };
}

export function getPhotosRequest() {
  return {
    type: ACTIONS.GET_PHOTOS_REQUEST,
  };
}

export function getPhotosSuccess(payload) {
  return {
    type: ACTIONS.GET_PHOTOS_SUCCESS,
    payload
  };
}

export function getPhotosError(payload) {
  return {
    type: ACTIONS.GET_PHOTOS_ERROR,
    payload
  };
}
