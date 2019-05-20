import React from 'react';
import { Row, Col, FormGroup } from 'reactstrap';
import PropTypes from 'prop-types';

import TextFieldGroup from '../../utils/textFieldGroup';

const PeriodFields = props => {
  return (
    <FormGroup>
      <Row noGutters>
        <Col sm={3} xs={props.winWidth < 362 ? 5 : 4}>
          <h3 className="m-main-color s-positioning text-right">
            {props.fieldName}:
          </h3>
        </Col>
        <Col sm={6} xs={props.winWidth < 362 ? 7 : 4}>
          <TextFieldGroup
            name={props.stateName}
            placeholder={props.placeholder}
            type={props.inputType}
            value={props.valueInput}
            onChange={props.handleInput}
            error={props.error}
            singleClass="s-field-padding"
          />
        </Col>
        {props.winWidth > 362 ? (
          <Col sm={3} xs={4}>
            <img
              className="m-responsive-img s-img-positioning"
              src={props.icon}
              alt="..."
            />
          </Col>
        ) : (
          <></>
        )}
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
