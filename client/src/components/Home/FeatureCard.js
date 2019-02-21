import React from 'react';
import {
  Col,
  Card,
  CardImg,
  CardImgOverlay,
  CardTitle,
  CardText,
  Button
} from 'reactstrap';

const FeatureCard = props => {
  return (
    <Col lg={4}>
      <Card inverse>
        <CardImg width="100%" src={props.imgSrc} alt="..." />
        <CardImgOverlay>
          <CardTitle tag="h3">{props.title}</CardTitle>
          <CardText tag="p">{props.text}</CardText>
          <Button color="primary">{props.button}</Button>
        </CardImgOverlay>
      </Card>
    </Col>
  );
};

export default FeatureCard;
