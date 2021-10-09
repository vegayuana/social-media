import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { get } from 'lodash';
import { ROUTES } from '../../configs';
import Card from '../Card';

const CardList = (props) => {
  const { classes, list } = props;
  return (
    <div>
      {list.map((item, i)=>(
        <Link to={ROUTES.DETAIL_USER(item.id)} key={i}>
          <Card className={classes.card}>
            <h2>{`${item.name} - ${get(item, 'company.name')}`}</h2>
            <p>{item.username}</p>
            <p>{get(item, 'address.city')}</p>
          </Card>
        </Link>
      ))}
    </div>
  );
};

CardList.defaultProps = {
  classes: {},
  list: []
};

CardList.propTypes = {
  classes: PropTypes.object,
  list: PropTypes.array,
};

export default CardList;

