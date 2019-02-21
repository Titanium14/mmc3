import React from 'react';
import { Col } from 'reactstrap';

const Basics = props => {
  return (
    <Col lg={4}>
      <img
        className="m-responsive-img m-img-center"
        src={props.imgSrc}
        alt="..."
      />
      <h4 className="text-center s-text-spacing">{props.header}</h4>
      <p className="text-center">{props.paragraph}</p>
    </Col>
  );
};

export default Basics;
