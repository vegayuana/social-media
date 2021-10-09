import { useState } from 'react';
import PropTypes from 'prop-types';
import Card from '../Card';

const Accordion = (props) => {
  const { classes, post, comments, handleExpand } = props;
  const [show, setShow] = useState(false);

  const renderMain = () => (
    <div className={classes.main} onClick={handleClick}>
      <Card>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </Card>
    </div>
  );

  const renderComments = (comment) =>(
    <div className={classes.comments}>
      <Card>
        <div className={'user'}>
          <h4 className={'name'}>{comment.name}</h4>
          <h4 className={'email'}>{comment.email}</h4>
        </div>
        <p>{comment.body}</p>
      </Card>
    </div>
  );

  const handleClick = () => {
    !show && handleExpand({ postId: post.id });
    setShow(!show);
  };

  return (
    <>
      {renderMain()}
      {show && (
        <>
          {comments.map((item, i)=>(
            <div key={i}>
              {renderComments(item)}
            </div>
          ))}
        </>
      )}
    </>
  );
};

Accordion.defaultProps = {
  classes: {},
  posts: [],
  comments: [],
  children: null,
  handleExpand: () => null
};

Accordion.propTypes = {
  classes: PropTypes.object,
  post: PropTypes.array,
  comments: PropTypes.array,
  children: PropTypes.element,
  handleExpand: PropTypes.func,
};

export default Accordion;
