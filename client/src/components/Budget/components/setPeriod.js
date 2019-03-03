import React from 'react';
import { Row, Col, FormGroup, Input } from 'reactstrap';
import PropTypes from 'prop-types';

import { calendarIcon, incomeBagIcon } from '../utils/exportImages';
import { setIncome } from '../utils/methods';

const SetPeriod = props => {
  return (
    <>
      <FormGroup>
        <Row>
          <Col />
          <Col lg={2}>
            <h3 className="m-main-color s-positioning">Budget By:</h3>
          </Col>
          <Col lg={6}>
            <Input
              name="period"
              value={props.period}
              onChange={props.handleInput}
              className="s-input-size"
              type="select">
              <option>Week</option>
              <option>Month</option>
            </Input>
          </Col>
          <Col lg={2}>
            <img
              className="m-responsive-img s-img-positioning"
              src={calendarIcon}
              alt={'calendar'}
            />
          </Col>
          <Col />
        </Row>
      </FormGroup>
      <FormGroup>
        <Row>
          <Col />
          <Col lg={2}>
            <h3 className="m-main-color s-positioning">Income:</h3>
          </Col>
          <Col lg={6}>
            <Input
              type="text"
              name="income"
              id="textIncome"
              placeholder="in Euro (€)"
              value={setIncome(props.income)}
              onChange={props.handleInput}
            />
          </Col>
          <Col lg={2}>
            <img
              className="m-responsive-img s-img-positioning"
              src={incomeBagIcon}
              alt={'income-bag'}
            />
          </Col>
          <Col />
        </Row>
      </FormGroup>
    </>
  );
};

SetPeriod.propTypes = {
  period: PropTypes.string.isRequired,
  income: PropTypes.number.isRequired,
  handleInput: PropTypes.func.isRequired
};

export default SetPeriod;
