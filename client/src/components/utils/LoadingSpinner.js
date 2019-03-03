import React from 'react';
import { Col, Spinner } from 'reactstrap';

const LoadingSpinner = props => {
  return (
    <Col lg={12} className="text-center">
      <Spinner className="m-spinner" type="grow" color="primary" />
    </Col>
  );
};

export default LoadingSpinner;
