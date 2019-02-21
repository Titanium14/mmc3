import React, { Component } from 'react';
import { Row, Col, FormGroup, Input } from 'reactstrap';
import PropTypes from 'prop-types';

import calendar from '../../assets/budget/calendar.png';
import sackmoney from '../../assets/budget/sack-money.png';
import nextarrow from '../../assets/budget/next-arrow.png';

import CreateButton from './CreateButton';

class SetPeriod extends Component {
  render() {
    let income;
    if (this.props.income === 0) {
      income = '';
    } else {
      income = this.props.income;
    }
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
                value={this.props.period}
                onChange={this.props.handleInput}
                className="s-input-size"
                type="select">
                <option>Week</option>
                <option>Month</option>
              </Input>
            </Col>
            <Col lg={2}>
              <img
                className="m-responsive-img s-img-positioning"
                src={calendar}
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
                value={income}
                onChange={this.props.handleInput}
              />
            </Col>
            <Col lg={2}>
              <img
                className="m-responsive-img s-img-positioning"
                src={sackmoney}
                alt={'sack-money'}
              />
            </Col>
            <Col />
          </Row>
        </FormGroup>
        <Row className="m-element-spacing">
          <Col lg={10} />
          <Col lg={2}>
            <CreateButton
              name="Next"
              img={nextarrow}
              handleBtn={this.props.handleNext}
            />
          </Col>
        </Row>
      </>
    );
  }
}

SetPeriod.propTypes = {
  period: PropTypes.string.isRequired,
  income: PropTypes.number.isRequired,
  handleInput: PropTypes.func.isRequired,
  handleNext: PropTypes.func.isRequired
};

export default SetPeriod;
