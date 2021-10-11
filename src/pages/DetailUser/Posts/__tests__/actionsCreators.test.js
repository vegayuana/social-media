import * as actionsCreator from '../actionCreators';

describe('actions creators', () => {
  it('works', () => {
    actionsCreator.getPostRequest();
    actionsCreator.getPostError();
    actionsCreator.getPostsSuccess();
    actionsCreator.getPostSuccess();
    actionsCreator.getCommentsRequest();
    actionsCreator.getCommentsSuccess();
    actionsCreator.getCommentsError();
    actionsCreator.createPostRequest();
    actionsCreator.createPostSuccess();
    actionsCreator.createPostError();
    actionsCreator.updatePostRequest();
    actionsCreator.updatePostSuccess();
    actionsCreator.updatePostError();
    actionsCreator.deletePostRequest();
    actionsCreator.deletePostSuccess();
    actionsCreator.deletePostError();
    actionsCreator.createCommentRequest();
    actionsCreator.createCommentSuccess();
    actionsCreator.createCommentError();
    actionsCreator.updateCommentRequest();
    actionsCreator.updateCommentSuccess();
    actionsCreator.updateCommentError();
    actionsCreator.deleteCommentRequest();
    actionsCreator.deleteCommentSuccess();
    actionsCreator.deleteCommentError();
  });
});
