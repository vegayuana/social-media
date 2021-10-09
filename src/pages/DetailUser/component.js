import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../UsersList/actions';
import PropTypes from 'prop-types';
import { Tab } from '../../components';
import Posts from './Posts';
import { get } from 'lodash';

export const DetailUser = (props) => {
  const { classes, match: { params: { id }} } = props;
  const dispatch = useDispatch();
  const { user } = useSelector(state => state.users);
  useEffect(()=>{
    dispatch(actions.getUserById({ id }));
  }, []);
  const menu = [{
    key: 'post',
    title: 'Posts',
    Element: <Posts {...props}/>
  },{
    key: 'album',
    title: 'Albums',
    Element: null
  }];
  return (
    <>
      <div className={classes.wrapper}>
        <div className={classes.userInfo}>
          <h1>{get(user, 'name')}</h1>
          <p>{get(user, 'username')}</p>
          <p>{get(user, 'email')}</p>
        </div>
        <Tab
          tabMenu={menu}
          defaultActiveKey="post"
        />
      </div>
    </>
  );
};

DetailUser.defaultProps = {
  classes: {},
};

DetailUser.propTypes = {
  classes: PropTypes.object,
  match: PropTypes.object.isRequired,
};

export default DetailUser;
