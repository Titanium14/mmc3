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
        <Col xs={1} className="m-element-spacing-bottom">
          <div className="s-icon-padding">
            <img
              className={
                this.props.winWidth < 1200 && this.props.winWidth > 530
                  ? 's-icon-margin-small'
                  : this.props.winWidth < 530
                  ? 's-icon-margin-smaller'
                  : 's-icon-margin'
              }
              src={this.state.img !== '' ? this.state.img : savingsIcon}
              alt="..."
            />
          </div>
        </Col>
        <Col
          xl={3}
          lg={5}
          md={5}
          sm={3}
          xs={5}
          className="m-element-spacing-bottom">
          <div className="s-card-div-padding">
            <Card>
              <CardBody className="text-center s-cardbody-padding">
                {this.props.incomeInput}
              </CardBody>
            </Card>
          </div>
        </Col>
      </>
    );
  }
}

export default BudgetCard;
