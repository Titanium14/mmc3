import React from 'react';
import {
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardImg,
  ButtonGroup,
  Button
} from 'reactstrap';
import PropTypes from 'prop-types';

const DualGames = props => {
  const placeholderBtns = (
    <>
      <Button className="rounded s-games-btn" size="lg">
        <img
          src="https://placeholdit.imgix.net/~text?txtsize=14&txt=n/A&w=120&h=120"
          alt="..."
        />
      </Button>
      <Button className="rounded s-games-btn" size="lg">
        <img
          src="https://placeholdit.imgix.net/~text?txtsize=14&txt=n/A&w=120&h=120"
          alt="..."
        />
      </Button>
    </>
  );
  return (
    <>
      <Col lg={3}>
        <Card>
          <CardBody className="s-card-bg">
            <CardTitle tag="h3" className="text-center">
              My Games
            </CardTitle>
            <Row>{placeholderBtns}</Row>
            <Row>{placeholderBtns}</Row>
            <ButtonGroup
              className="m-element-block-display s-btns-design"
              size="sm"
              vertical>
              <Button onClick={props.onBack} color="primary">
                Back
              </Button>
            </ButtonGroup>
          </CardBody>
        </Card>
      </Col>
      <Col lg={5}>
        <Card>
          <CardBody>
            <CardImg src="https://placeholdit.imgix.net/~text?txtsize=14&txt=N/A&w=360&h=360" />
          </CardBody>
        </Card>
      </Col>
    </>
  );
};

DualGames.propTypes = {
  onBack: PropTypes.func.isRequired
};

export default DualGames;
