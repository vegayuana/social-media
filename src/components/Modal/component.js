import PropTypes from 'prop-types';
import { Modal } from 'react-bootstrap';
import { get } from 'lodash';

export const CustomModal = (props) => {
  const { classes, show, handleHide, data } = props;
  return (
    <Modal
      show={show}
      onHide={handleHide}
      centered
      dialogClassName={classes.wrapper}
      contentClassName={classes.modal}
    >
      <Modal.Header closeButton closeLabel={''}>
        <Modal.Title>{get(data, 'title')}</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <img
          src={get(data, 'url')}
          alt={get(data, 'title')}
          className={'image'}
        />
      </Modal.Body>

    </Modal>
  );
};

CustomModal.defaultProps = {
  classes: {},
  data: {},
  show: true,
  handleHide: ()=>null
};

CustomModal.propTypes = {
  classes: PropTypes.object,
  data: PropTypes.object,
  show: PropTypes.bool,
  handleHide: PropTypes.func
};

export default CustomModal;

