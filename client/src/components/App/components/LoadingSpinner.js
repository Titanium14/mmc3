import React from 'react';
import { Container, Row, Col, Spinner } from 'reactstrap';

const LoadingSpinner = props => {
  return (
    <Container className="m-grid-container" fluid>
      <Row className="s-row-space" noGutters>
        <Col lg={4} />
        <Col lg={4}>
          <Spinner className="s-spinner" type="grow" color="primary" />
        </Col>
        <Col lg={4} />
      </Row>
    </Container>
  );
};

export default LoadingSpinner;
