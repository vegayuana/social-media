import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from './actions';
import PropTypes from 'prop-types';
import { CardList } from '../../components';

export const UsersList = () => {
  const dispatch = useDispatch();
  const { users } = useSelector(state => state.users);
  useEffect(()=>{
    dispatch(actions.getAllUsers());
  }, []);
  return (
    <div>
      <h1>Users</h1>
      <p>List of All Users</p>
      <CardList list={users}/>
    </div>
  );
};

UsersList.defaultProps = {
  classes: {},
  match: {},
  history: {},
  users: {}
};

UsersList.propTypes = {
  classes: PropTypes.object,
  match: PropTypes.object,
  history: PropTypes.object,
  users: PropTypes.object
};

export default UsersList;
