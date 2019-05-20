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

import {
  euroIcon,
  worldIcon,
  moneyIcon,
  vendingIcon
} from '../utils/exportImages';

const DualGames = props => {
  return (
    <>
      <Col md={4}>
        <div className={props.winWidth < 782 ? 's-card-padding' : ''}>
          <Card>
            <CardBody className="s-card-bg">
              <CardTitle tag="h3" className="text-center">
                My Games
              </CardTitle>
              <Row>
                <Button className="rounded s-games-btn" size="lg">
                  <img src={euroIcon} alt="..." />
                </Button>
                <Button className="rounded s-games-btn" size="lg">
                  <img src={worldIcon} alt="..." />
                </Button>
              </Row>
              <Row>
                <Button className="rounded s-games-btn" size="lg">
                  <img src={moneyIcon} alt="..." />
                </Button>
                <Button className="rounded s-games-btn" size="lg">
                  <img src={vendingIcon} alt="..." />
                </Button>
              </Row>
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
        </div>
      </Col>
      <Col
        md={6}
        className={props.winWidth < 782 ? 'm-element-spacing-top' : ''}>
        <div className={props.winWidth < 782 ? 's-card-padding' : ''}>
          <Card>
            <CardBody>
              <CardImg src="https://imgplaceholder.com/150x150/a8a8a8?text=GAME PREVIEW&font-size=24" />
            </CardBody>
          </Card>
        </div>
      </Col>
    </>
  );
};

DualGames.propTypes = {
  onBack: PropTypes.func.isRequired
};

export default DualGames;
