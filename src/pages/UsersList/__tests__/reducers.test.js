import * as actionsCreator from '../actionCreators';
import reducer from '../reducer';

describe('reducer', () => {
  const initialState = {
    users: [],
    fetching: false,
    error: null,
    user: null,
  };

  test('work as expected', () => {
    expect(reducer(undefined, actionsCreator.userRequest())).toEqual({
      ...initialState,
      fetching: true
    });
    expect(reducer(undefined, actionsCreator.userError('error'))).toEqual({
      ...initialState,
      error: 'error',
      fetching: false,
    });
    expect(reducer(undefined, actionsCreator.getUsersSuccess([{ data: 'user' }]))).toEqual({
      ...initialState,
      users: [{ data: 'user' }],
      fetching: false,
    });
    expect(reducer(undefined, actionsCreator.getUserSuccess({ data: 'user' }))).toEqual({
      ...initialState,
      user: { data: 'user' },
      fetching: false,
    });
  });
});
