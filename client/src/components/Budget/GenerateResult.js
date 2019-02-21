import React, { Component } from 'react';
import { Row, Col, Card, CardBody } from 'reactstrap';
// import PropTypes from 'prop-types';

import CreateButton from './CreateButton';

class GenerateResult extends Component {
  render() {
    return (
      <>
        <Row>
          <Col />
          <Col lg={7}>
            <Card>
              <CardBody />
            </Card>
          </Col>
          <Col lg={3}>
            <Card>
              <CardBody />
            </Card>
          </Col>
          <Col />
        </Row>
        <Row className="m-element-spacing">
          <Col lg={2}>
            <CreateButton name="Submit" handleNext={this.props.handleNext} />
          </Col>
          <Col />
        </Row>
      </>
    );
  }
}

GenerateResult.propTypes = {
  // handleSubmit: PropTypes.func.isRequired
};

export default GenerateResult;
