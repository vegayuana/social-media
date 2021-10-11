import * as actions from '../actions';

jest.mock('axios', () => ({
  get: jest.fn(() => Promise.resolve({
        data: [{ id: 123, title: 'title', body: 'body' }]
      }))
}));

describe('actions', () => {
  test('dispatch action', async () => {
    actions.getAlbums({ id:'123' });
    actions.getPhotos({ id:'123' });
  });
});
