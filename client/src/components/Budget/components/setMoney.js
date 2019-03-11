import React, { Component } from 'react';
import { Row, Col, FormGroup, Card, CardBody } from 'reactstrap';
import PropTypes from 'prop-types';

import CreateButton from './createButton';
import TextFieldGroup from '../../utils/textFieldGroup';

import { coinIcon, savingsIcon, savingsEnve } from '../utils/exportImages';
import {
  generateCoins,
  generatePositions,
  generateIconsEnves,
  setIncome
} from '../utils/methods';
import { mapAllCates } from '../utils/objectCreator';

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
      incomeArray: [],
      catesArr: mapAllCates(this.props.needsArr, this.props.wantsArr),
      saveObj: { name: 'Savings', imgSrc: savingsIcon, envelope: savingsEnve },
      catesWithSave: []
    };

    this.onAddClick = this.onAddClick.bind(this);
  }

  componentDidMount() {
    const [tempXArray, tempYArray] = generatePositions(this.state.coinStack);

    let testArr = this.props.catesArr;

    for (let i = 0; i < this.state.catesArr.length; i++) {
      testArr.push(this.state.catesArr[i]);
    }
    testArr.push(this.state.saveObj);

    this.setState({
      xArray: tempXArray,
      yArray: tempYArray,
      coinValue: this.state.initialIncome / this.state.coinStack,
      catesWithSave: testArr
    });

    this.props.handleCates(testArr);
  }

  onAddClick(e) {
    const target = e.target;

    const input = this.props.inputIncome;
    let tempIncomeArray = this.state.incomeArray;
    tempIncomeArray.push(input);
    this.setState(
      {
        stepProg: this.state.stepProg + 1,
        remainingIncome: this.state.remainingIncome - this.props.inputIncome
      },
      () => {
        this.setState({
          coinStack: this.state.remainingIncome / this.state.coinValue,
          incomeArray: tempIncomeArray
        });
      }
    );

    const id = target.id;
    this.props.handleIncome(id);
  }

  render() {
    let cates = this.state.catesWithSave;
    let icons, envelopes;
    if (cates.length !== 0) {
      icons = generateIconsEnves('Icon', cates, null);
      envelopes = generateIconsEnves(
        'Envelopes',
        cates,
        this.state.incomeArray
      );
    }

    const [coins, yPos = 0] = generateCoins(
      this.state.coinStack,
      coinIcon,
      this.state.xArray,
      this.state.yArray
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
              src={icons ? icons[this.state.stepProg].imgSrc : ''}
              alt="..."
            />
            <TextFieldGroup
              type="text"
              classes="m-img-center m-element-spacing-bottom s-field-sizing"
              placeholder="in Euro (€)"
              name="inputIncome"
              value={setIncome(this.props.inputIncome)}
              onChange={this.props.handleInput}
            />
            <div className="text-center">
              <CreateButton
                name="Add"
                iconId={icons ? icons[this.state.stepProg].name : ''}
                handleBtn={this.onAddClick}
              />
            </div>
          </Col>
          <Col lg={6}>
            <Row>
              <Col />
              <Col lg={12}>
                <Row className="justify-content-start">
                  {envelopes ? envelopes : ''}
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
  needsArr: PropTypes.array.isRequired,
  wantsArr: PropTypes.array.isRequired,
  income: PropTypes.number.isRequired,
  inputIncome: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
  catesArr: PropTypes.array.isRequired,
  handleInput: PropTypes.func.isRequired,
  handleIncome: PropTypes.func.isRequired
};

export default SetMoney;
