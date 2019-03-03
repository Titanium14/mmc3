import React, { Component } from 'react';
import { Row, Col, FormGroup, Card, CardHeader, ListGroup } from 'reactstrap';
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
      needsObj: [],
      wantsObj: []
    };
  }

  componentDidMount() {
    this.setState({
      needsObj: objCateList(cateNeeds, iconNeeds, enveNeedsIcon),
      wantsObj: objCateList(cateWants, iconWants, enveWantsIcon)
    });
  }

  render() {
    const needsList = mapCategories(
      'Needs',
      this.state.needsObj,
      this.props.handleCateClicked
    );
    const wantsList = mapCategories(
      'Wants',
      this.state.wantsObj,
      this.props.handleCateClicked
    );

    return (
      <FormGroup>
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
  handleCateClicked: PropTypes.func.isRequired
};

export default SetCategory;
