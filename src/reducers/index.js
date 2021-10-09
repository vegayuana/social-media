import { combineReducers } from 'redux';
import users from '../pages/UsersList/reducer';
import posts from '../pages/DetailUser/Posts/reducer';

const rootReducer = combineReducers({
  users,
  posts,
});

export default rootReducer;
