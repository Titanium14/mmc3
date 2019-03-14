import React, { Component } from 'react';
import { Col, Card, CardBody } from 'reactstrap';

import {
  iconNeeds,
  iconWants,
  cateNeeds,
  cateWants,
  savingsIcon
} from '../../Budget/utils/exportImages';

class BudgetCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      img: ''
    };
  }

  componentDidMount() {
    let iconSrc = '';

    cateNeeds.forEach((cateElement, i) => {
      if (cateElement === this.props.name) iconSrc = iconNeeds[i];
    });

    cateWants.forEach((cateElement, i) => {
      if (cateElement === this.props.name) iconSrc = iconWants[i];
    });

    this.setState({ img: iconSrc });
  }

  render() {
    return (
      <>
        <Col lg={2} className="m-element-spacing-bottom">
          <img
            src={this.state.img !== '' ? this.state.img : savingsIcon}
            alt="..."
          />
        </Col>
        <Col lg={2} className="m-element-spacing-bottom">
          <Card>
            <CardBody>{this.props.incomeInput}</CardBody>
          </Card>
        </Col>
        <Col lg={2} />
      </>
    );
  }
}

export default BudgetCard;
