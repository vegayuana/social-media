import { combineReducers } from 'redux';
import users from '../pages/UsersList/reducer';
import posts from '../pages/DetailUser/Posts/reducer';
import albums from '../pages/DetailUser/Albums/reducer';

const rootReducer = combineReducers({
  users,
  posts,
  albums,
});

export default rootReducer;
