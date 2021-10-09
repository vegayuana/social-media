import { combineReducers } from 'redux';
import users from '../pages/UsersList/reducer';

const rootReducer = combineReducers({
  users,
});

export default rootReducer;
