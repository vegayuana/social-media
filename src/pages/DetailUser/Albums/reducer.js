import { ACTIONS } from '../../../constants';

const initialState = {
  albums: [],
  fetchingAlbums: false,
  photos: [],
  fetchingPhotos: false,
  error: null
};

export default function reducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case ACTIONS.GET_ALBUMS_REQUEST:
      return {
        ...state,
        fetchingAlbums: true
      };
    case ACTIONS.GET_ALBUMS_SUCCESS:
      return {
        ...state,
        albums: payload,
        fetchingAlbums: false,
      };
    case ACTIONS.GET_ALBUMS_ERROR:
      return {
        ...state,
        error: payload,
        fetchingAlbums: false,
      };
    case ACTIONS.GET_PHOTO_REQUEST:
      return {
        ...state,
        fetchingPhotos: true
      };
    case ACTIONS.GET_PHOTO_SUCCESS:
      return {
        ...state,
        photos: payload,
        fetchingPhotos: false,
      };
    case ACTIONS.GET_PHOTO_ERROR:
      return {
        ...state,
        error: payload,
        fetchingPhotos: false,
      };
    default:
      return state;
  }
}
