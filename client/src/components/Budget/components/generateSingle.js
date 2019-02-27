import React, { Component } from 'react';
import { Col, Card, CardBody } from 'reactstrap';

class GenerateSingle extends Component {
  render() {
    return (
      <>
        <Col lg={2} className="m-element-spacing-bottom">
          <img
            src="https://placeholdit.imgix.net/~text?txtsize=16&txt=image&w=70&h=70"
            alt="..."
          />
        </Col>
        <Col lg={2} className="m-element-spacing-bottom">
          <Card>
            <CardBody>€50</CardBody>
          </Card>
        </Col>
        <Col lg={2} className="m-element-spacing-bottom">
          <img
            src="https://placeholdit.imgix.net/~text?txtsize=16&txt=i&w=30&h=70"
            alt="..."
          />
        </Col>
      </>
    );
  }
}

export default GenerateSingle;
