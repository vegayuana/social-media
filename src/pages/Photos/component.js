import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../DetailUser/Albums/actions';
import PropTypes from 'prop-types';
import { CardImage, Modal } from '../../components';
import { get } from 'lodash';

export const Photos = (props) => {
  const { classes, match: { params: { id, albumId }} } = props;
  const [albumInfo, setAlbumInfo] = useState({});
  const [modal, setModal] = useState(false);
  const [detail, setDetail] = useState(null);
  const dispatch = useDispatch();
  const { photos, albums } = useSelector(state => state.albums);

  useEffect(()=>{
    dispatch(actions.getPhotos({ id: albumId }));
    dispatch(actions.getAlbums({ id, albumId }));
  }, []);

  useEffect(()=>{
    const detailAlbum = albums.filter(item=>item.id==albumId)[0];
    setAlbumInfo(detailAlbum);
  }, [albums]);

  const handleClick = (data) => {
    setDetail(data);
    setModal(true);
  };

  const handleHide = () => setModal(false);

  return (
    <>
      <div className={classes.page}>
        <h1>Album: {get(albumInfo, 'title')}</h1>
        <div className={classes.wrapper}>
          <CardImage images={photos} handleClick={handleClick}/>
        </div>
      </div>
      <Modal
        show={modal}
        handleHide={handleHide}
        data={detail}
      />
    </>
  );
};

Photos.defaultProps = {
  classes: {},
};

Photos.propTypes = {
  classes: PropTypes.object,
  match: PropTypes.object.isRequired,
};

export default Photos;
