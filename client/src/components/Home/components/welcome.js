import React from 'react';
import { Row, Col } from 'reactstrap';
import PropTypes from 'prop-types';

const Welcome = props => {
  return (
    <section className="s-welcome-background">
      <Row noGutters>
        <Col />
        <Col md={10}>
          <h1 className="s-text-color text-center s-title-padding">
            {props.title}
          </h1>
          <h3 className="s-text-color m-light-title text-center s-title-padding">
            {props.subtitle}
          </h3>
        </Col>
        <Col />
      </Row>
      <Row noGutters>
        <Col />
        <Col md={10}>
          <img
            className={`m-responsive-img m-img-center m-element-spacing-top m-element-spacing-bottom ${
              props.winWidth <= 782 ? 's-img-padding' : ''
            }`}
            src={props.imgSrc}
            alt="..."
          />
        </Col>
        <Col />
      </Row>
    </section>
  );
};

Welcome.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired
};

export default Welcome;
