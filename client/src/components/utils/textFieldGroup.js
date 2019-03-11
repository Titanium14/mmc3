import React from 'react';
import { FormGroup, Input, FormFeedback } from 'reactstrap';
import PropTypes from 'prop-types';

const TextFieldGroup = ({
  name,
  placeholder,
  value,
  label,
  error,
  info,
  type,
  onChange,
  disabled,
  classes
}) => {
  return (
    <FormGroup row>
      {type === 'select' ? (
        <Input
          type={type}
          className={
            error
              ? `is-invalid ${classes ? classes : ''}`
              : classes
              ? classes
              : ''
          }
          name={name}
          onChange={onChange}
          disabled={disabled}>
          <option>Week</option>
          <option>Month</option>
        </Input>
      ) : (
        <Input
          type={type}
          className={
            error
              ? `is-invalid ${classes ? classes : ''}`
              : classes
              ? classes
              : ''
          }
          placeholder={placeholder}
          name={name}
          value={value}
          onChange={onChange}
          disabled={disabled}
        />
      )}

      {info && <small className="form-text text-muted">{info}</small>}
      {error && <FormFeedback>{error}</FormFeedback>}
    </FormGroup>
  );
};

TextFieldGroup.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  error: PropTypes.string,
  info: PropTypes.string,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  classes: PropTypes.string
};

TextFieldGroup.defaultProps = {
  type: 'text'
};

export default TextFieldGroup;
