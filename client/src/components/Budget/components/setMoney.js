import React, { Component } from 'react';
import { Row, Col, FormGroup, Input, Card, CardBody } from 'reactstrap';
import PropTypes from 'prop-types';

import CreateButton from './createButton';
import { coinIcon } from '../utils/exportImages';
import {
  generateCoins,
  generatePositions,
  generateIconsEnves
} from '../utils/methods';

class SetMoney extends Component {
  constructor(props) {
    super(props);

    this.state = {
      coinStack: 20,
      xArray: [],
      yArray: [],
      stepProg: 0,
      coinValue: 0,
      initialIncome: this.props.income,
      remainingIncome: this.props.income,
      inputArray: []
    };

    this.onAddClick = this.onAddClick.bind(this);
  }

  componentDidMount() {
    const [tempXArray, tempYArray] = generatePositions(this.state.coinStack);

    this.setState({
      xArray: tempXArray,
      yArray: tempYArray,
      coinValue: this.state.initialIncome / this.state.coinStack
    });
  }

  onAddClick() {
    const input = parseInt(this.props.inputIncome);
    let tempIncomeArray = this.state.inputArray;
    tempIncomeArray.push(input);
    console.log(tempIncomeArray);

    this.setState(
      {
        stepProg: this.state.stepProg + 1,
        remainingIncome: this.state.remainingIncome - this.props.inputIncome
      },
      () => {
        this.setState({
          coinStack: this.state.remainingIncome / this.state.coinValue,
          inputArray: tempIncomeArray
        });
      }
    );
  }

  render() {
    const icons = generateIconsEnves(
      'Icon',
      this.props.arrayNeeds,
      this.props.arrayWants,
      null
    );
    const envelopes = generateIconsEnves(
      'Envelopes',
      this.props.arrayNeeds,
      this.props.arrayWants,
      this.state.inputArray
    );

    const [coins, yPos = 0] = generateCoins(
      this.state.coinStack,
      coinIcon,
      this.state.xArray,
      this.state.yArray,
    );

    return (
      <FormGroup>
        <Row>
          <Col />
          <Col lg={2}>
            <div className="s-position-type" style={{ height: yPos + 120 }}>
              {coins}
            </div>
            <h2 className="m-main-color text-center">Remaining</h2>
            <Card>
              <CardBody className="text-center">
                {this.state.remainingIncome}
              </CardBody>
            </Card>
          </Col>
          <Col lg={2} className="align-self-center">
            <img
              className="m-img-center m-element-spacing-bottom s-img-border"
              src={icons[this.state.stepProg]}
              alt="..."
            />
            <Input
              style={{width: '75%'}}
              className="m-img-center m-element-spacing-bottom"
              type="text"
              name="inputIncome"
              id="textIncome"
              placeholder="in Euro (€)"
              onChange={this.props.handleIncome}
            />
            <div className="text-center">
              <CreateButton name="Add" handleBtn={this.onAddClick} />
            </div>
          </Col>
          <Col lg={6}>
            <Row>
              <Col />
              <Col lg={12}>
                <Row className="justify-content-start">
                  {envelopes}
                </Row>
              </Col>
              <Col />
            </Row>
          </Col>
          <Col />
        </Row>
      </FormGroup>
    );
  }
}

SetMoney.propTypes = {
  arrayNeeds: PropTypes.array.isRequired,
  arrayWants: PropTypes.array.isRequired,
  income: PropTypes.number.isRequired,
  handleInput: PropTypes.func.isRequired,
  handleIncome: PropTypes.func.isRequired
};

export default SetMoney;
