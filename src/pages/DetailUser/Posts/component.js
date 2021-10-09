import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from './actions';
import { Accordion } from '../../../components';

export const Posts = (props) => {
  const { match: { params: { id } } } = props;
  const dispatch = useDispatch();
  const { posts, comments } = useSelector(state => state.posts);

  useEffect(()=>{
    dispatch(actions.getAllPosts({ id }));
  }, []);

  const handleExpand = ({ postId }) => dispatch(actions.getComments({ id: postId }));
  return (
    <div>
      <h1>Posts</h1>
      {posts.map((post, i)=>(
        <Accordion key={i} post={post} comments={comments} handleExpand={handleExpand}/>
      ))}
    </div>
  );
};

Posts.defaultProps = {
  classes: {},
  defaultActiveKey: '',
  tabMenu: []
};

Posts.propTypes = {
  classes: PropTypes.object,
  match: PropTypes.object.isRequired,
  tabMenu: PropTypes.array,
};

export default Posts;
