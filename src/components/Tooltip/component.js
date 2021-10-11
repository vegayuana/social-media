import PropTypes from 'prop-types';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

const CustomTooltip = (props) => {
  const { children, text } = props;

  return (
    <OverlayTrigger
      placement={'top'}
      overlay={
        <Tooltip id={'tooltip-menu'}>
          {text}
        </Tooltip>
      }
    >
      {children}
    </OverlayTrigger>
  );
};

CustomTooltip.defaultProps = {
  children: <></>,
  text: '',
};

CustomTooltip.propTypes = {
  children: PropTypes.element,
  text: PropTypes.string,
};

export default CustomTooltip;
