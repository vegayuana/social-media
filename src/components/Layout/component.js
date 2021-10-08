import PropTypes from 'prop-types';
import { Container } from 'react-bootstrap';
import { Navbar } from '../index';

export const Layout = (props) => {
  const { classes } = props;
  return (
    <>
      <Navbar/>
      <div className={classes.layout}>
        <Container>
          {props.children}
        </Container>
      </div>
      <footer>
        <Container>
          footer
        </Container>
      </footer>
    </>
  )
}

Layout.defaultProps = {
  classes: {},
};

Layout.propTypes = {
  classes: PropTypes.object,
};

export default Layout;

