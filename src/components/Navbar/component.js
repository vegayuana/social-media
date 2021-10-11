import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Navbar, Container, Nav, NavDropdown} from 'react-bootstrap';
import { get } from 'lodash';

export const NavBar = (props) => {
  const { classes } = props;
  const { user } = useSelector(state=>state.dummyAuth);
  return (
    <header className={classes.header}>
     <Navbar expand="sm" sticky="top">
      <Container>
        <Navbar.Brand>Social Media</Navbar.Brand>
        <Navbar.Collapse>
          <Nav>
            <NavDropdown title={get(user, 'name')} alignRight>
              <NavDropdown.Item>Logout</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
      </Navbar>
    </header>
  );
};

NavBar.defaultProps = {
  classes: {},
  menu: []
};

NavBar.propTypes = {
  classes: PropTypes.object,
  menu: PropTypes.array,
};

export default NavBar;

