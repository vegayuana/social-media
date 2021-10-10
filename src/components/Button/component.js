import PropTypes from 'prop-types';

const CustomButton = (props) => {
  const { classes, onClick: handleClick, label, variant } = props;

  return (
    <div className={variant==='square'? classes.square : classes.round}>
      <button onClick={handleClick}>
        {label}
      </button>
    </div>
  );
};

CustomButton.defaultProps = {
  classes: {},
  onClick: ()=>null,
  label: '',
  variant: 'square'
};

CustomButton.propTypes = {
  classes: PropTypes.object,
  onClick: PropTypes.func,
  label: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]),
  variant: PropTypes.oneOf(['square', 'round']),
};

export default CustomButton;
