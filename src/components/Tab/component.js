import PropTypes from 'prop-types';
import { Tabs, Tab } from 'react-bootstrap';

const CustomTabs = (props) => {
  const { classes, defaultActiveKey, tabMenu } = props;
  return (
    <div className={classes.wrapper}>
      <Tabs
        id="controlled-tab"
        className="mb-3"
        defaultActiveKey={defaultActiveKey}
        unmountOnExit
      >
        {tabMenu.map((item, i)=>(
          <Tab key={i} eventKey={item.key} title={item.title}>
            {item.Element}
          </Tab>
        ))}
      </Tabs>
    </div>
  );
};

CustomTabs.defaultProps = {
  classes: {},
  defaultActiveKey: '',
  tabMenu: []
};

CustomTabs.propTypes = {
  classes: PropTypes.object,
  defaultActiveKey: PropTypes.string,
  tabMenu: PropTypes.array,
};

export default CustomTabs;

