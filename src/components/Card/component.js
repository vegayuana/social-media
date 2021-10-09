import PropTypes from 'prop-types';

const Card = (props) => {
  const { classes, children } = props;
  return (
    <div className={classes.wrapper}>
      <div className="shadow-sm p-3 mb-4 bg-white rounded">
        {children}
      </div>
    </div>
  );
};

Card.defaultProps = {
  classes: {},
  children: null
};

Card.propTypes = {
  classes: PropTypes.object,
  children: PropTypes.element,
};

export default Card;
