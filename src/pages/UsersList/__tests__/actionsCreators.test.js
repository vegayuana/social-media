import * as actionsCreator from '../actionCreators';

describe('actions creators', () => {
  it('works', () => {
    actionsCreator.userRequest();
    actionsCreator.userError();
    actionsCreator.getUsersSuccess();
    actionsCreator.getUserSuccess();
  });
});
