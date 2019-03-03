import React from 'react';
import { FormGroup, Input, FormFeedback } from 'reactstrap';
import propTypes from 'prop-types';

const TextFieldGroup = ({
  name,
  placeholder,
  value,
  label,
  error,
  info,
  type,
  onChange,
  disabled
}) => {
  return (
    <FormGroup row>
      <Input
        type={type}
        className={error ? 'is-invalid' : ''}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        disabled={disabled}
      />
      {info && <small className="form-text text-muted">{info}</small>}
      {error && <FormFeedback>{error}</FormFeedback>}
    </FormGroup>
  );
};

TextFieldGroup.propTypes = {
  name: propTypes.string.isRequired,
  placeholder: propTypes.string,
  value: propTypes.string.isRequired,
  error: propTypes.string,
  info: propTypes.string,
  type: propTypes.string.isRequired,
  onChange: propTypes.func.isRequired,
  disabled: propTypes.bool
};

TextFieldGroup.defaultProps = {
  type: 'text'
};

export default TextFieldGroup;
