import React, { Component } from 'react';
import { Row, Col, Card, CardBody } from 'reactstrap';

import ribbon from './assets/ribbon.png';

import GenerateSingle from './generateSingle';

class GenerateResult extends Component {
  render() {
    let ribbonArray = [];
    for (let i = 0; i < 16; i++) {
      ribbonArray.push(
        <img style={{ width: '12.5%' }} key={i} src={ribbon} alt="..." />
      );
    }

    return (
      <>
        <Row className="m-element-spacing-top" noGutters>
          <Col />
          <Col lg={10}>
            <h1 className="m-main-color">Your Budget</h1>
            <Card>
              <CardBody>
                <Row noGutters>
                  <Col lg={5}>
                    <img
                      className="m-img-center"
                      src="https://placeholdit.imgix.net/~text?txtsize=16&txt=image&w=500&h=500"
                      alt="..."
                    />
                  </Col>
                  <Col lg={7}>
                    <Row>
                      <GenerateSingle />
                      <GenerateSingle />
                      <GenerateSingle />
                      <GenerateSingle />
                      <GenerateSingle />
                      <GenerateSingle />
                      <GenerateSingle />
                      <GenerateSingle />
                    </Row>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
          <Col />
        </Row>
        <Row className="m-element-spacing-top" noGutters>
          <Col />
          <Col lg={10}>
            <h1 className="m-main-color">Awards</h1>
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
