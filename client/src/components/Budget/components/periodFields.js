import React from 'react';
import { Row, Col, FormGroup } from 'reactstrap';
import PropTypes from 'prop-types';

import TextFieldGroup from '../../utils/textFieldGroup';

const PeriodFields = props => {
  
  return (
    <FormGroup>
      <Row>
        <Col />
        <Col lg={2}>
          <h3 className="m-main-color s-positioning">{props.fieldName}:</h3>
        </Col>
        <Col lg={6}>
          <TextFieldGroup
            className="s-input-size"
            name={props.stateName}
            placeholder={props.placeholder}
            type={props.inputType}
            value={props.valueInput}
            onChange={props.handleInput}
            error={props.error}
          />
        </Col>
        <Col lg={2}>
          <img
            className="m-responsive-img s-img-positioning"
            src={props.icon}
            alt="..."
          />
        </Col>
        <Col />
      </Row>
    </FormGroup>
  );
};

PeriodFields.propTypes = {
  stateName: PropTypes.string.isRequired,
  fieldName: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  inputType: PropTypes.string.isRequired,
  valueInput: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  handleInput: PropTypes.func.isRequired,
  icon: PropTypes.string.isRequired
};

export default PeriodFields;
