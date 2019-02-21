import React, { Component } from 'react';
import { Row, Col, FormGroup } from 'reactstrap';
import PropTypes from 'prop-types';

import nextarrow from '../../assets/budget/next-arrow.png';

import CreateButton from './CreateButton';

class SetMoney extends Component {
  render() {
    return (
      <>
        <FormGroup>
          <Row>
            <Col />
            <Col lg={5} />
            <Col lg={5} />
            <Col />
          </Row>
        </FormGroup>
        <Row className="m-element-spacing">
          <Col lg={2}>
            <CreateButton
              name="Back"
              img={nextarrow}
              handleBtn={this.props.handleBack}
            />
          </Col>
          <Col lg={8} />
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

SetMoney.propTypes = {
  handleNext: PropTypes.func.isRequired,
  handleBack: PropTypes.func.isRequired
};

export default SetMoney;
