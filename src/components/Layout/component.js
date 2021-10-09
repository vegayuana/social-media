import PropTypes from 'prop-types';
import { Container } from 'react-bootstrap';
import { Navbar } from '../index';

export const Layout = (props) => {
  const { classes } = props;
  return (
    <>
      <div className={classes.layout}>
        <div className="sidebar">
          Social Media
        </div>
        <div className="page">
        <Navbar/>
          <Container>
            {props.children}
          </Container>
        </div>
      </div>
      <footer>
        <Container>
          footer
        </Container>
      </footer>
    </>
  );
};

Layout.defaultProps = {
  classes: {},
  children: null
};

Layout.propTypes = {
  classes: PropTypes.object,
  children: PropTypes.element,
};

export default Layout;

