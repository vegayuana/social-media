import { isEmpty } from 'lodash';
import PropTypes from 'prop-types';
const CardImage = (props) => {
  const { classes, images, handleClick } = props;

  return (
    <div className={classes.wrapper}>
      {!isEmpty(images) && images.map((item,i)=>(
        <div key={i} className={classes.imageContainer} onClick={()=>handleClick(item)}>
          <img
            src={item.thumbnailUrl}
            alt={item.title}
            className={'thumbnail'}
          />
          <div className={'info'}>
            <div className={'text'}>
              <p>{item.title}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

CardImage.defaultProps = {
  classes: {},
  images: {},
  handleClick: ()=>null,
};

CardImage.propTypes = {
  classes: PropTypes.object,
  images: PropTypes.object,
  handleClick: PropTypes.func,
};

export default CardImage;
