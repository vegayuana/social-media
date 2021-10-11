import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from './actions';
import PropTypes from 'prop-types';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { get, isEmpty } from 'lodash';
import { ROUTES } from '../../configs';

export const UsersList = (props) => {
  const { classes } = props;
  const dispatch = useDispatch();
  const { users } = useSelector(state => state.users);
  useEffect(()=>{
    dispatch(actions.getAllUsers());
  }, []);
  return (
    <div className={classes.wrapper}>
      <div className={classes.title}>
        <h1>Users</h1>
        <p>List of All Users</p>
        <i>Click user name to see detail of user</i>
      </div>
      <div className={'table-wrapper'}>
        <Table striped size="md">
          <thead>
            <tr>
              <th>No.</th>
              <th>Name</th>
              <th>Username</th>
              <th>Email</th>
              <th>Website</th>
              <th>Company</th>
            </tr>
          </thead>
          <tbody>
            {!isEmpty(users) && users.map((item, i)=>(
              <tr key={i}>
                <td>{i+1}</td>
                <td> <Link to={ROUTES.DETAIL_USER(item.id)}>{get(item, 'name')}</Link></td>
                <td>{get(item, 'username')}</td>
                <td>{get(item, 'email')}</td>
                <td>{get(item, 'website')}</td>
                <td>{get(item, 'company.name')}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
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
