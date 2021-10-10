import { useState } from 'react';
import PropTypes from 'prop-types';

import { FiEdit } from 'react-icons/fi';
import { RiDeleteBin5Line } from 'react-icons/ri';
import Form from '../../Form';
import { get } from 'lodash';

const AccordionChild = (props) => {
  const {
    classes, comment,
    onEditComment: submitEditComment,
    onDeleteComment: handleDeleteComment,
  } = props;

  const [showEditComment, setShowEditComment] = useState(false);

  const handleToggleEditComment = () => setShowEditComment(!showEditComment);

  const handleEditComment = (form) =>{
    let data = {
      ...comment,
      body: get(form, 'body')
    };
    setShowEditComment(false);
    submitEditComment(data);
  };

  const renderFormEditComment = (comment) => (
    <Form
      formFields={[{
        name: 'user',
        placeholder: '',
        defaultValue: `${get(comment, 'name')} - ${get(comment, 'email')}`,
        disabled: true
      },{
        name: 'body',
        placeholder: 'Comment something',
        defaultValue: comment.body,
        type: 'textarea'
      }]}
      buttonLabel={'Edit'}
      handleSubmit={handleEditComment}
    />
  );

  return (
    <div className={classes.comments}>
      <div className={classes.info}>
        <div>
          {showEditComment ? renderFormEditComment(comment) :
            <>
              <h4 className={'name'}>{comment.name}</h4>
              <h4 className={'email'}>{comment.email}</h4>
              <p>{comment.body}</p>
            </>
          }
        </div>
        <div className={'actions'}>
          <div className={'tools'}>
            <FiEdit onClick={handleToggleEditComment} className={'edit'}/>
            <RiDeleteBin5Line onClick={handleDeleteComment.bind(this, comment.id)} className={'delete'}/>
          </div>
        </div>
      </div>
    </div>
  );
};

AccordionChild.defaultProps = {
  classes: {},
  comment: [],
  onEditComment: ()=>null,
  onDeleteComment: ()=>null,
};

AccordionChild.propTypes = {
  classes: PropTypes.object,
  comment: PropTypes.array,
  onEditComment: PropTypes.func,
  onDeleteComment: PropTypes.func,
};

export default AccordionChild;
