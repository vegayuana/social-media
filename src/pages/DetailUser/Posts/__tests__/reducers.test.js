import * as actionsCreator from '../actionCreators';
import reducer from '../reducer';

describe('reducer', () => {
  const initialState = {
    posts: [],
    post: null,
    fetching: false,
    fetchingComments: false,
    create: null,
    fetchingCreate: false,
    update: null,
    fetchingUpdate: false,
    deletePost: null,
    deleteComment: null,
    fetchingDelete: false,
    error: null
  };

  test('work as expected', () => {
    expect(reducer(undefined, actionsCreator.getPostRequest())).toEqual({
      ...initialState,
      fetching:true
    });
    expect(reducer(undefined, actionsCreator.getPostError('error'))).toEqual({
      ...initialState,
      error: 'error',
      fetching: false,
    });
    expect(reducer(undefined, actionsCreator.getPostsSuccess([]))).toEqual({
      ...initialState,
      posts: [],
      fetching: false,
    });
    expect(reducer(undefined, actionsCreator.getPostSuccess({ data: 'post '}))).toEqual({
      ...initialState,
      post: { data: 'post '},
      fetching: false,
    });
    expect(reducer(undefined, actionsCreator.getCommentsRequest())).toEqual({
      ...initialState,
      fetchingComments: true
    });
    expect(reducer(undefined, actionsCreator.getCommentsSuccess())).toEqual({
      ...initialState,
      fetchingComments: false
    });
    expect(reducer(undefined, actionsCreator.getCommentsError('error'))).toEqual({
      ...initialState,
      error: 'error',
      fetchingComments: false,
    });
    expect(reducer(undefined, actionsCreator.createPostRequest())).toEqual({
      ...initialState,
      create: null,
      fetchingCreate: true
    });
    expect(reducer(undefined, actionsCreator.createPostSuccess({ data: 'new Post' }))).toEqual({
      ...initialState,
      create: 'success',
      posts: [{ data: 'new Post' }, ...initialState.posts,],
      fetchingCreate: false,
    });
    expect(reducer(undefined, actionsCreator.createPostError())).toEqual({
      ...initialState,
      create: 'error',
      fetchingCreate: false,
    });
    expect(reducer(undefined, actionsCreator.updatePostRequest())).toEqual({
      ...initialState,
      update: null,
      fetchingUpdate: true
    });
    expect(reducer(undefined, actionsCreator.updatePostSuccess())).toEqual({
      ...initialState,
      update: 'success',
      fetchingUpdate: false,
    });
    expect(reducer(undefined, actionsCreator.updatePostError())).toEqual({
      ...initialState,
      update: 'error',
      fetchingUpdate: false,
    });
    expect(reducer(undefined, actionsCreator.deletePostRequest())).toEqual({
      ...initialState,
      deletePost: null,
      fetchingDelete: true
    });
    expect(reducer(undefined, actionsCreator.deletePostSuccess('12'))).toEqual({
      ...initialState,
      deletePost: 'success',
      fetchingDelete: false,
    });
    expect(reducer(undefined, actionsCreator.deletePostError())).toEqual({
      ...initialState,
      deletePost: 'error',
      fetchingDelete: false,
    });
    expect(reducer(undefined, actionsCreator.createCommentRequest())).toEqual({
      ...initialState,
      create: null,
      fetchingCreate: true
    });
    expect(reducer(undefined, actionsCreator.createCommentSuccess())).toEqual({
      ...initialState,
      create: 'success',
      fetchingCreate: false,
    });
    expect(reducer(undefined, actionsCreator.createCommentError())).toEqual({
      ...initialState,
      create: 'error',
      fetchingCreate: false,
    });
    expect(reducer(undefined, actionsCreator.updateCommentRequest())).toEqual({
      ...initialState,
      update: null,
      fetchingUpdate: true
    });
    expect(reducer(undefined, actionsCreator.updateCommentSuccess())).toEqual({
      ...initialState,
      update: 'success',
      fetchingUpdate: false,
    });
    expect(reducer(undefined, actionsCreator.updateCommentError())).toEqual({
      ...initialState,
      update: 'error',
      fetchingUpdate: false,
    });
    expect(reducer(undefined, actionsCreator.deleteCommentRequest())).toEqual({
      ...initialState,
      deleteComment: null,
      fetchingDelete: true
    });
    expect(reducer(undefined, actionsCreator.deleteCommentSuccess())).toEqual({
      ...initialState,
      deleteComment: 'success',
      fetchingDelete: false,
    });
    expect(reducer(undefined, actionsCreator.deleteCommentError())).toEqual({
      ...initialState,
      deleteComment: 'error',
      fetchingDelete: false,
    });
    expect(reducer(undefined, {})).toEqual(initialState);
  });
});
