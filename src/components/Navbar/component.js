import PropTypes from 'prop-types';
import { Navbar, Container, Nav, NavDropdown} from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const NavBar = (props) => {
  const { classes, menu } = props;
  return (
    <header className={classes.header}>
     <Navbar expand="sm" sticky="top">
      <Container>
        <Navbar.Collapse>
          <Nav>
            {menu.map((item, i)=><Link key={i} to={item.route}>item.label</Link>)}
            <NavDropdown title="Menu" alignRight>
              <NavDropdown.Item>Settings</NavDropdown.Item>
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

