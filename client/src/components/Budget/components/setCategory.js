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
          <Row>
            <Col />
            <Col lg={8}>
              <Alert color="warning" className="text-center">
                Please choose at least one budget category
              </Alert>
            </Col>
            <Col />
          </Row>
        ) : (
          <></>
        )}
        <Row>
          <Col />
          <Col lg={5}>
            <Card>
              <CardHeader tag="h2">Needs</CardHeader>
              <ListGroup>{needsList}</ListGroup>
            </Card>
          </Col>
          <Col lg={5}>
            <Card>
              <CardHeader tag="h2">Wants</CardHeader>
              <ListGroup>{wantsList}</ListGroup>
            </Card>
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
