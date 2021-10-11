import PropTypes from 'prop-types';
import { Container, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { Navbar } from '../index';
import { CgUserList } from 'react-icons/cg';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../configs';

export const Layout = (props) => {
  const { classes } = props;
  return (
    <>
      <div className={classes.layout}>
        <div className="sidebar">
          <p><b>Menu</b></p>
          <OverlayTrigger
            placement={'top'}
            overlay={
              <Tooltip id={'tooltip-menu'}>
                List of All Users
              </Tooltip>
            }
          >
            <Link to={ROUTES.MAIN()}>
              <div className={'list-menu'}>
                <CgUserList/>
              </div>
            </Link>
          </OverlayTrigger>
        </div>
        <div className="page">
          <Navbar/>
          <Container>
            {props.children}
          </Container>
        </div>
      </div>
    </>
  );
};

Layout.defaultProps = {
  classes: {},
  children: <></>
};

Layout.propTypes = {
  classes: PropTypes.object,
  children: PropTypes.element,
};

export default Layout;

