import React from 'react';
import { Col, Card, CardBody } from 'reactstrap';
import PropTypes from 'prop-types';

const Envelope = props => {
  return (
    <Col lg={4}>
      <img className="m-img-center" src={props.enveIcon} alt="..." />
      <Card>
        <CardBody className="text-center">{props.allocate}</CardBody>
      </Card>
    </Col>
  );
};

Envelope.propTypes = {
  enveIcon: PropTypes.string.isRequired,
  allocate: PropTypes.number
};

export default Envelope;
