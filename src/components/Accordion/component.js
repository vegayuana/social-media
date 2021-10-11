import { useState } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { FiEdit } from 'react-icons/fi';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { FaChevronUp, FaChevronDown } from 'react-icons/fa';
import { BiCommentAdd } from 'react-icons/bi';
import Card from '../Card';
import Form from '../Form';
import { get, isEmpty } from 'lodash';
import { Spinner } from 'react-bootstrap';
import AccordionChild from './AccordionChild/component';

const Accordion = (props) => {
  const {
    classes, post, fetchingComments,
    handleExpand,
    onEditPost: submitEditPost,
    onDeletePost: handleDeletePost,
    onAddComment: submitAddComment,
  } = props;
  const { user } = useSelector(state=>state.dummyAuth);
  const [show, setShow] = useState(false);
  const [showEditPost, setShowEditPost] = useState(false);
  const [showAddComment, setShowAddComment] = useState(false);

  const handleEditPost = (postId, form) => {
    handleToggleEditPost();
    submitEditPost(postId, form);
  };

  const handleToggleEditPost = () => setShowEditPost(!showEditPost);

  const handleToggleAddComment = () => {
    !showAddComment && handleClickExpand(true);
    setShowAddComment(!showAddComment);
  };

  const handleAddComment = (form) =>{
    setShowAddComment(false);
    submitAddComment(post.id, form);
  };

  const renderMain = () => (
    <div className={classes.main}>
      <Card>
        <div className={classes.info}>
          {showEditPost ?
            <Form
              formFields={[{
                name: 'title',
                placeholder: 'Title',
                defaultValue: get(post, 'title'),
              },{
                name: 'body',
                placeholder: 'Write something on body post',
                defaultValue: get(post, 'body'),
                type: 'textarea'
              }]}
              buttonLabel={'Edit'}
              handleSubmit={handleEditPost.bind(this, post.id)}
              handleCancel={handleToggleEditPost}
            /> :
            <>
              <div>
                <h3>{get(post, 'title')}</h3>
                <p>{get(post, 'body')}</p>
                <div className={'tools'}>
                  <BiCommentAdd onClick={handleToggleAddComment} className={'add'}/>
                  <FiEdit onClick={handleToggleEditPost} className={'edit'}/>
                  <RiDeleteBin5Line onClick={handleDeletePost.bind(this, get(post, 'id'))}  className={'delete'}/>
                </div>
              </div>
            </>
          }
          <div className={'actions'}>
            <div onClick={handleClickExpand} className={'expand'}> {show ? <>Hide Comments <FaChevronUp /></> : <>See Comments <FaChevronDown/></>} </div>
          </div>
        </div>
      </Card>
    </div>
  );

  const renderFormNewComment = () =>(
    <div className={classes.form}>
      <Card>
        <Form
          title={'New Comment'}
          formFields={[{
            name: 'user',
            placeholder: '',
            defaultValue: `${get(user, 'name')} - ${get(user, 'email')}`,
            disabled: true
          },{
            name: 'body',
            placeholder: 'Comment something',
            defaultValue: '',
            type: 'textarea'
          }]}
          buttonLabel={'Post'}
          handleSubmit={handleAddComment}
          handleCancel={handleToggleAddComment}
        />
      </Card>
    </div>
  );

  const handleClickExpand = (value) => {
    !show && handleExpand({ postId: get(post, 'id') });
    setShow(value===true ? value : !show);
  };

  return (
    <>
      {renderMain()}
      {showAddComment && renderFormNewComment()}
      {show && (
        <div className={classes.commentWrapper}>
          {fetchingComments ?
            <div  className="text-center">
              <Spinner animation="border" variant="primary"/>
            </div> :
            <>
              {!isEmpty(get(post, 'comments')) && get(post, 'comments').map((item, i)=>
                <AccordionChild comment={item} key={i} {...props}/>
              )}
            </>
          }
        </div>
      )}
    </>
  );
};

Accordion.defaultProps = {
  classes: {},
  post: null,
  handleExpand: () => null,
  onEditPost: ()=>null,
  onDeletePost: ()=>null,
  onAddComment: ()=>null,
  onEditComment: ()=>null,
  onDeleteComment: ()=>null,
  fetchingComments: false
};

Accordion.propTypes = {
  classes: PropTypes.object,
  post: PropTypes.array,
  handleExpand: PropTypes.func,
  fetchingComments: PropTypes.bool,
  onEditPost: PropTypes.func,
  onDeletePost: PropTypes.func,
  onAddComment: PropTypes.func,
  onEditComment: PropTypes.func,
  onDeleteComment: PropTypes.func,
};

export default Accordion;
