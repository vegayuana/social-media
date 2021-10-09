import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from './actions';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../../configs';

export const Albums = (props) => {
  const { classes, match: { params: { id } } } = props;
  const dispatch = useDispatch();
  const { albums } = useSelector(state => state.albums);

  useEffect(()=>{
    dispatch(actions.getAlbums({ id }));
  }, []);

  return (
    <div>
      <h1>Albums</h1>
      {albums.map((item, i)=>(
        <Link to={ROUTES.PHOTOS(id, item.id)} key={i}>
          <div key={i} className={classes.list}>{item.title}</div>
        </Link>
      ))}
    </div>
  );
};

Albums.defaultProps = {
  classes: {},
};

Albums.propTypes = {
  classes: PropTypes.object,
  match: PropTypes.object.isRequired,
};

export default Albums;
