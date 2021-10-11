import * as actionsCreator from '../actionCreators';

describe('actions creators', () => {
  it('works', () => {
    actionsCreator.getAlbumsRequest();
    actionsCreator.getAlbumsSuccess();
    actionsCreator.getAlbumsError();
    actionsCreator.getPhotosRequest();
    actionsCreator.getPhotosSuccess();
    actionsCreator.getPhotosError();
  });
});
