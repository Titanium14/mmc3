import React, { Component } from 'react';
import { Row, Col, Card, CardBody, Input } from 'reactstrap';

import ribbon from './assets/ribbon.png';

class GenerateResult extends Component {
  render() {
    let ribbonArray = [];
    for (let i = 0; i < 9; i++) {
      ribbonArray.push(
        <img style={{ width: '33.3%' }} key={i} src={ribbon} alt="..." />
      );
    }

    return (
      <>
        <Row>
          <Col />
          <Col lg={7}>
            <Card>
              <CardBody>
                <Row noGutters>
                  <Col lg={5}>
                    <img
                      className="m-img-center"
                      src="https://placeholdit.imgix.net/~text?txtsize=16&txt=image&w=300&h=300"
                      alt="..."
                    />
                  </Col>
                  <Col lg={7}>
                    <img
                      src="https://placeholdit.imgix.net/~text?txtsize=16&txt=image&w=80&h=80"
                      alt="..."
                    />
                    <Input
                      type="text"
                      name="income"
                      id="textIncome"
                      placeholder="in Euro (€)"
                    />
                    <img
                      src="https://placeholdit.imgix.net/~text?txtsize=16&txt=image&w=80&h=80"
                      alt="..."
                    />
                    <img
                      src="https://placeholdit.imgix.net/~text?txtsize=16&txt=image&w=80&h=80"
                      alt="..."
                    />
                    <img
                      src="https://placeholdit.imgix.net/~text?txtsize=16&txt=image&w=80&h=80"
                      alt="..."
                    />
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
          <Col lg={3}>
            <Card>
              <CardBody>{ribbonArray}</CardBody>
            </Card>
          </Col>
          <Col />
        </Row>
      </>
    );
  }
}

export default GenerateResult;
