import { combineReducers } from 'redux';
import users from '../pages/UsersList/reducer';
import posts from '../pages/DetailUser/Posts/reducer';
import albums from '../pages/DetailUser/Albums/reducer';
import dummyAuth from './auth';

const rootReducer = combineReducers({
  dummyAuth,
  users,
  posts,
  albums,
});

export default rootReducer;
