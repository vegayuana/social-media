import * as actionsCreator from '../actionCreators';
import reducer from '../reducer';

describe('reducer', () => {
  const initialState = {
    albums: [],
    fetchingAlbums: false,
    photos: [],
    fetchingPhotos: false,
    error: null
  };

  test('work as expected', () => {
    expect(reducer(undefined, actionsCreator.getAlbumsRequest())).toEqual({
      ...initialState,
      fetchingAlbums: true
    });
    expect(reducer(undefined, actionsCreator.getAlbumsSuccess([{ data: 'album' }]))).toEqual({
      ...initialState,
      albums: [{ data: 'album' }],
      fetchingAlbums: false,
    });
    expect(reducer(undefined, actionsCreator.getAlbumsError('error'))).toEqual({
      ...initialState,
      error: 'error',
      fetchingAlbums: false,
    });
    expect(reducer(undefined, actionsCreator.getPhotosRequest())).toEqual({
      ...initialState,
      fetchingPhotos: true,
    });
    expect(reducer(undefined, actionsCreator.getPhotosSuccess([{ data: 'album' }]))).toEqual({
      ...initialState,
      photos: [{ data: 'album' }],
      fetchingPhotos: false,
    });
    expect(reducer(undefined, actionsCreator.getPhotosError('error'))).toEqual({
      ...initialState,
      error: 'error',
      fetchingPhotos: false,
    });
    reducer(undefined, {});
  });
});
