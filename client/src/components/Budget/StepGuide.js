import React from 'react';
import { Row, Col } from 'reactstrap';
import PropTypes from 'prop-types';

const StepGuide = props => {
  return (
    <>
      {props.name === 'Steps' ? (
        <section className="m-element-spacing">
          <h1 className="m-main-color">Step {props.step}</h1>
          <h3 className="m-main-color">{props.stepDesc}</h3>
        </section>
      ) : (
        <Row>
          <Col />
          <Col lg={7} className="m-element-spacing-top">
            <h1 className="m-main-color">{props.headerCard1}</h1>
          </Col>
          <Col lg={3} className="m-element-spacing-top">
            <h1 className="m-main-color">{props.headerCard2}</h1>
          </Col>
          <Col />
        </Row>
      )}
    </>
  );
};

StepGuide.propTypes = {
  name: PropTypes.string.isRequired,
  step: PropTypes.number,
  stepDesc: PropTypes.string,
  headerCard1: PropTypes.string,
  headerCard2: PropTypes.string
};

export default StepGuide;
