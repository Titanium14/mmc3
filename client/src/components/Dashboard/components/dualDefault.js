import React from 'react';
import {
  Col,
  Card,
  CardBody,
  CardTitle,
  CardText,
  CardImg,
  ButtonGroup,
  Button
} from 'reactstrap';
import PropTypes from 'prop-types';

const DualDefault = props => {
  return (
    <>
      <Col md={4}>
        <div className={props.winWidth < 782 ? 's-card-padding' : ''}>
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
                <Button
                  onClick={props.onBudgets}
                  className="rounded"
                  color="primary">
                  My Budget
                </Button>
                <Button
                  onClick={props.onGames}
                  className="rounded"
                  color="primary">
                  My Games
                </Button>
                <Button
                  onClick={props.onAbout}
                  className="rounded"
                  color="primary">
                  About Me
                </Button>
              </ButtonGroup>
            </CardBody>
          </Card>
        </div>
      </Col>
      <Col
        md={6}
        className={props.winWidth < 782 ? 'm-element-spacing-top' : ''}>
        <div className={props.winWidth < 782 ? 's-card-padding' : ''}>
          <Card>
            <CardBody>
              <CardText tag="p" className="text-center">
                Hello, {props.user.name}! Welcome to your dashboard!
              </CardText>
              <CardText tag="p" className="text-center">
                Click on one of the buttons to see more on your dashboard!
              </CardText>
            </CardBody>
          </Card>
        </div>
      </Col>
    </>
  );
};

DualDefault.propTypes = {
  user: PropTypes.object.isRequired
};

export default DualDefault;
