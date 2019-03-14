import React from 'react';
import {
  Col,
  Card,
  CardBody,
  CardTitle,
  CardImg,
  ButtonGroup,
  Button
} from 'reactstrap';
import PropTypes from 'prop-types';

const DualDefault = props => {
  return (
    <>
      <Col lg={3}>
        <Card>
          <CardBody className="s-card-bg">
            <CardTitle tag="h3" className="text-center">
              {props.user.name}
            </CardTitle>
            <CardImg
              className="m-img-center s-change-size"
              src={props.user.avatar}
              alt="User avatar"
            />
            <ButtonGroup
              className="m-element-block-display s-btns-design"
              size="sm"
              vertical>
              <Button onClick={props.onBudgets} className="rounded" color="primary">
                My Budget
              </Button>
              <Button onClick={props.onGames} className="rounded" color="primary">
                My Games
              </Button>
              <Button onClick={props.onAbout} className="rounded" color="primary">
                About Me
              </Button>
            </ButtonGroup>
          </CardBody>
        </Card>
      </Col>
      <Col lg={5}>
        <Card>
          <CardBody>A</CardBody>
        </Card>
      </Col>
    </>
  );
};

DualDefault.propTypes = {
  user: PropTypes.object.isRequired
};

export default DualDefault;
