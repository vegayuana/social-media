import { useState } from 'react';
import PropTypes from 'prop-types';
import { Form, Button  } from 'react-bootstrap';
import { get } from 'lodash';

export const CustomForm = (props) => {
  const {
    classes, buttonStyle, formFields, title, buttonLabel,
    handleSubmit: handleSubmitProps,
    handleCancel
  } = props;
  const initialValues = formFields.map(item=>({ [item.name]: item.defaultValue }));
  const [data, setData] = useState(initialValues.reduce(((r, c) => Object.assign(r, c)), {}));

  const handleChange = (field, { target }) => {
    setData({
      ...data,
      [field]: target.value
    });
  };

  const handleSubmit = () => handleSubmitProps(data);

  return (
    <div className={classes.wrapper}>
      {title && <h4>{title}</h4>}
      {formFields.map((item, i)=>{
        let props = {
          placeholder: get(item, 'placeholder'),
          defaultValue: get(item, 'defaultValue'),
          disabled: get(item, 'disabled')
        };
        props = item.type==='textarea' ? {
          ...props,
          as: 'textarea',
          row: 3
        } : props;
        return (
          <Form.Group key={i}>
            {item.label && <Form.Label>{item.label}</Form.Label>}
            <Form.Control
              {...props}
              onChange={handleChange.bind(this, item.name)}
            />
          </Form.Group>
        );
      })}
      <div className={buttonStyle==='end' && 'd-flex justify-content-end'}>
        <Button onClick={handleSubmit}>{buttonLabel}</Button>
        {handleCancel && <Button onClick={handleCancel}>Cancel</Button>}
      </div>
    </div>
  );
};

CustomForm.defaultProps = {
  classes: {},
  formFields: [],
  title: '',
  buttonLabel: '',
  handleSubmit: ()=>null,
  handleCancel: null,
  buttonStyle: ''
};

CustomForm.propTypes = {
  classes: PropTypes.object,
  formFields: PropTypes.array,
  title: PropTypes.string,
  buttonLabel: PropTypes.string,
  buttonStyle: PropTypes.string,
  handleSubmit: PropTypes.func,
  handleCancel: PropTypes.func,
};

export default CustomForm;

