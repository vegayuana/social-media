import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from './actions';
import { Accordion, Button, Form } from '../../../components';

import { BsPlusLg } from 'react-icons/bs';
import { Spinner } from 'react-bootstrap';
import Card from '../../../components/Card/component';
import { get, isEmpty } from 'lodash';

export const Posts = (props) => {
  const { classes, match: { params: { id } } } = props;
  const dispatch = useDispatch();
  const [showAddForm, setShowAddForm] = useState(false);
  const { posts, fetching, fetchingComments } = useSelector(state => state.posts);
  const { user } = useSelector(state => state.dummyAuth);

  useEffect(()=>{
    dispatch(actions.getAllPosts({ id }));
  }, []);

  const handleExpand = ({ postId }) => dispatch(actions.getComments({ id: postId }));

  const handleAddPost = (form) => {
    let data = {
      userId: id,
      ...form,
    };
    dispatch(actions.createPost(data));
    setShowAddForm(false);
  };

  const handleToggleForm = () => setShowAddForm(!showAddForm);

  const handleEditPost = (postId, form) => {
    let data = {
      id: postId,
      userId: id,
      ...form,
    };
    dispatch(actions.updatePost(data));
  };

  const handleDeletePost = (id) => dispatch(actions.deletePost(id));

  const handleAddComment = (postId, form) => {
    let data = {
      postId,
      name: get(user, 'name'),
      email: get(user, 'email'),
      ...form,
    };
    dispatch(actions.createComment(data));
  };

  const handleEditComment = (form) => dispatch(actions.updateComment(form));

  const handleDeleteComment = (id) => {
    dispatch(actions.deleteComment(id));
  };

  return (
    <div className={classes.wrapper}>
      <div className={'title'}>
        <h1>Posts</h1>
        <Button label={<BsPlusLg/>} variant={'round'} onClick={handleToggleForm}/>
      </div>
      {showAddForm && (
        <Card>
          <Form
            title={'New Post'}
            formFields={[{
              name: 'title',
              placeholder: 'Title',
              defaultValue: ''
            },{
              name: 'body',
              placeholder: 'Write something on body post',
              defaultValue: '',
              type: 'textarea'
            }]}
            buttonLabel={'Send'}
            handleSubmit={handleAddPost}
          />
        </Card>
      )}

      {fetching ?
        <div  className="text-center">
          <Spinner animation="border" variant="primary"/>
        </div>
        : !isEmpty(posts) && posts.map((post, i)=>(
          <Accordion
            key={i}
            post={post}
            handleExpand={handleExpand}
            onEditPost={handleEditPost}
            onDeletePost={handleDeletePost}
            fetchingComments={fetchingComments}
            onAddComment={handleAddComment}
            onEditComment={handleEditComment}
            onDeleteComment={handleDeleteComment}
          />
        ))
      }
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
