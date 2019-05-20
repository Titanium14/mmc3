import React from 'react';
import { Col, Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';
import PropTypes from 'prop-types';

const FeatureCard = props => {
  return (
    <Col className="s-card-padding" sm={4}>
      <Card>
        <CardImg className="border" src={props.imgSrc} alt="..." />
        <CardBody>
          <CardTitle tag="h3">{props.title}</CardTitle>
          <CardText tag="p">{props.text}</CardText>
        </CardBody>
      </Card>
    </Col>
  );
};

FeatureCard.propTypes = {
  winWidth: PropTypes.number.isRequired
};

export default FeatureCard;
