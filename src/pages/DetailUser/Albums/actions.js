import * as actions from './actionCreators';
import axios from 'axios';
import { API } from '../../../configs';

export function getAlbums(payload) {
  const { id } = payload;
  return async (dispatch) => {
    try {
      dispatch(actions.getAlbumsRequest());
      const { data } = await axios(API.axiosOptions({
        method: 'GET',
        url: API.albums(id),
      }));

      dispatch(actions.getAlbumsSuccess(data));
    } catch ({ response }) {
      dispatch(actions.getAlbumsError(response));
    }
  };
}

export function getPhotos(payload) {
  const { id } = payload;
  return async (dispatch) => {
    try {
      dispatch(actions.getPhotosRequest());
      const { data } = await axios(API.axiosOptions({
        method: 'GET',
        url: API.photos(id),
      }));

      dispatch(actions.getPhotosSuccess(data));
    } catch ({ response }) {
      dispatch(actions.getPhotosError(response));
    }
  };
}
