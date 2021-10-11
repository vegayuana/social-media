import * as actions from '../actions';

jest.mock('axios', () => ({
  get: jest.fn(() => Promise.resolve({
        data: [{ id: 123, title: 'title', body: 'body' }]
      }))
}));

describe('actions', () => {
  test('dispatch action', async () => {
    actions.getAllUsers();
    actions.getUserById({ id:'123' });
  });
});
