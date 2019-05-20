import React from 'react';
import { Col, Card, CardBody } from 'reactstrap';
import PropTypes from 'prop-types';

const Envelope = props => {
  return (
    <Col xl={4} lg={4} md={6} sm={4} xs={6}>
      <div className="s-field-padding">
        <img
          className="m-responsive-img m-img-center"
          src={props.enveIcon}
          alt="..."
        />
        <Card>
          <CardBody className="text-center s-remove-pad">
            {props.allocate}
          </CardBody>
        </Card>
      </div>
    </Col>
  );
};

Envelope.propTypes = {
  enveIcon: PropTypes.string.isRequired,
  allocate: PropTypes.number
};

export default Envelope;
