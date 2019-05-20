import React, { Component } from 'react';
import {
  Row,
  Col,
  FormGroup,
  Card,
  CardHeader,
  ListGroup,
  Alert
} from 'reactstrap';
import PropTypes from 'prop-types';

import {
  iconNeeds,
  iconWants,
  cateNeeds,
  cateWants,
  enveNeedsIcon,
  enveWantsIcon
} from '../utils/exportImages';
import { objCateList, mapCategories } from '../utils/objectCreator';

class SetCategory extends Component {
  constructor(props) {
    super(props);

    this.state = {
      needsObj: objCateList(cateNeeds, iconNeeds, enveNeedsIcon),
      wantsObj: objCateList(cateWants, iconWants, enveWantsIcon)
    };
  }

  render() {
    const needsList = mapCategories(
      'Needs',
      this.state.needsObj,
      this.props.selectedNeeds,
      this.props.handleCateClicked
    );
    const wantsList = mapCategories(
      'Wants',
      this.state.wantsObj,
      this.props.selectedWants,
      this.props.handleCateClicked
    );

    return (
      <FormGroup>
        {this.props.noCateFlag ? (
          <Row noGutters>
            <Col />
            <Col md={8}>
              <Alert color="warning" className="text-center">
                Please choose at least one budget category
              </Alert>
            </Col>
            <Col />
          </Row>
        ) : (
          <></>
        )}
        <Row noGutters={this.props.winWidth < 768 ? true : false}>
          <Col />
          <Col md={5}>
            <div
              className={
                this.props.winWidth < 768
                  ? 's-card-padding s-card-pad-bottom'
                  : ''
              }>
              <Card>
                <CardHeader tag="h2">Needs</CardHeader>
                <ListGroup>{needsList}</ListGroup>
              </Card>
            </div>
          </Col>
          <Col md={5}>
            <div
              className={this.props.winWidth < 768 ? 's-card-padding' : ''}>
              <Card>
                <CardHeader tag="h2">Wants</CardHeader>
                <ListGroup>{wantsList}</ListGroup>
              </Card>
            </div>
          </Col>
          <Col />
        </Row>
      </FormGroup>
    );
  }
}

SetCategory.propTypes = {
  noCateFlag: PropTypes.bool.isRequired,
  selectedNeeds: PropTypes.array.isRequired,
  selectedWants: PropTypes.array.isRequired,
  handleCateClicked: PropTypes.func.isRequired
};

export default SetCategory;
