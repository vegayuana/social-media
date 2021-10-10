import { get } from 'lodash';
import { ACTIONS } from '../../../constants';

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

export default function reducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case ACTIONS.GET_POST_REQUEST:
      return {
        ...state,
        fetching: true
      };
    case ACTIONS.GET_POST_ERROR:
      return {
        ...state,
        error: payload,
        fetching: false,
      };
    case ACTIONS.GET_POSTS_SUCCESS:
      return {
        ...state,
        posts: payload,
        fetching: false,
      };
    case ACTIONS.GET_POST_SUCCESS:
      return {
        ...state,
        post: payload,
        fetching: false,
      };
    case ACTIONS.GET_COMMENTS_REQUEST:
      return {
        ...state,
        fetchingComments: true
      };
    case ACTIONS.GET_COMMENTS_SUCCESS:
      return {
        ...state,
        posts: state.posts.map(item=>{
          if(get(payload, '[0].postId')===item.id){
            return {
              ...item,
              comments: payload
            };
          }
          else {
            return item;
          }
        }),
        fetchingComments: false,
      };
    case ACTIONS.GET_COMMENTS_ERROR:
      return {
        ...state,
        error: payload,
        fetchingComments: false,
      };
    case ACTIONS.CREATE_POST_REQUEST:
      return {
        ...state,
        create: null,
        fetchingCreate: true
      };
    case ACTIONS.CREATE_POST_SUCCESS:
      return {
        ...state,
        create: 'success',
        posts: [payload, ...state.posts,],
        fetchingCreate: false,
      };
    case ACTIONS.CREATE_POST_ERROR:
      return {
        ...state,
        create: 'error',
        fetchingCreate: false,
      };
    case ACTIONS.UPDATE_POST_REQUEST:
      return {
        ...state,
        update: null,
        fetchingUpdate: true
      };
    case ACTIONS.UPDATE_POST_SUCCESS:
      return {
        ...state,
        update: 'success',
        posts: state.posts.map(item=>{
          if(item.id===payload.id){
            return payload;
          }
          else{
            return item;
          }
        }),
        fetchingUpdate: false,
      };
    case ACTIONS.UPDATE_POST_ERROR:
      return {
        ...state,
        update: 'error',
        fetchingUpdate: false,
      };
    case ACTIONS.DELETE_POST_REQUEST:
      return {
        ...state,
        deletePost: null,
        fetchingDelete: true
      };
    case ACTIONS.DELETE_POST_SUCCESS:
      return {
        ...state,
        deletePost: 'success',
        posts: state.posts.filter(item=>item.id!==payload),
        fetchingDelete: false,
      };
    case ACTIONS.DELETE_POST_ERROR:
      return {
        ...state,
        deletePost: 'error',
        fetchingDelete: false,
      };
    case ACTIONS.CREATE_COMMENT_REQUEST:
      return {
        ...state,
        create: null,
        fetchingCreate: true
      };
    case ACTIONS.CREATE_COMMENT_SUCCESS: {
      return {
        ...state,
        create: 'success',
        posts: state.posts.map(post=>{
          if(get(payload, 'postId')===post.id){
            return {
              ...post,
              comments: [
                payload,
                ...post.comments,
              ]
            };
          }
          else {
            return post;
          }
        }),
        fetchingCreate: false,
      };
    }
    case ACTIONS.CREATE_COMMENT_ERROR:
      return {
        ...state,
        create: 'error',
        fetchingCreate: false,
      };
    case ACTIONS.UPDATE_COMMENT_REQUEST:
      return {
        ...state,
        update: null,
        fetchingUpdate: true
      };
    case ACTIONS.UPDATE_COMMENT_SUCCESS:
      return {
        ...state,
        update: 'success',
        posts: state.posts.map(post=>({
          ...post,
          comments: post.comments ?
            post.comments.map(item=>{
              if(item.id===payload.id){
                return {
                  ...item,
                  ...payload,
                };
              }
              else{
                return item;
              }
            }) : undefined
        })),
        fetchingUpdate: false,
      };
    case ACTIONS.UPDATE_COMMENT_ERROR:
      return {
        ...state,
        update: 'error',
        fetchingUpdate: false,
      };
    case ACTIONS.DELETE_COMMENT_REQUEST:
      return {
        ...state,
        deleteComment: null,
        fetchingDelete: true
      };
    case ACTIONS.DELETE_COMMENT_SUCCESS:
      return {
        ...state,
        deleteComment: 'success',
        posts: state.posts.map(post=>({
          ...post,
          comments: post.comments ? post.comments.filter(item=>item.id!==payload) : undefined
        })),
        fetchingDelete: false,
      };
    case ACTIONS.DELETE_COMMENT_ERROR:
      return {
        ...state,
        deleteComment: 'error',
        fetchingDelete: false,
      };
    default:
      return state;
  }
}
