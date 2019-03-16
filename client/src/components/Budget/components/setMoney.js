import React, { Component } from 'react';
import { Row, Col, FormGroup, Card, CardBody, Alert } from 'reactstrap';
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
      mappingCates: mapAllCates(this.props.needsArr, this.props.wantsArr),
      saveObj: { name: 'Savings', imgSrc: savingsIcon, envelope: savingsEnve },
      catesWithSave: []
    };

    this.onAddClick = this.onAddClick.bind(this);
    this.onResetClick = this.onResetClick.bind(this);
  }

  componentDidMount() {
    const [tempXArray, tempYArray] = generatePositions(this.state.coinStack);

    let budgetCates = [];

    for (let i = 0; i < this.state.mappingCates.length; i++) {
      budgetCates.push(this.state.mappingCates[i]);
    }
    budgetCates.push(this.state.saveObj);

    this.setState({
      xArray: tempXArray,
      yArray: tempYArray,
      coinValue: this.state.initialIncome / this.state.coinStack,
      catesWithSave: budgetCates
    });

    this.props.handleCates(budgetCates);
  }

  onAddClick(e) {
    const target = e.target;

    const input = this.props.inputIncome;
    let tempIncomeArray = this.state.incomeArray;
    tempIncomeArray.push(input);

    let usedFlag = this.props.usedAll;
    this.setState(
      {
        stepProg: this.state.stepProg + 1,
        remainingIncome: this.state.remainingIncome - this.props.inputIncome
      },
      () => {
        if (
          (this.state.remainingIncome <= 0 &&
            this.state.stepProg !== this.state.catesWithSave.length) ||
          (this.state.remainingIncome > 0 &&
            this.state.stepProg === this.state.catesWithSave.length)
        )
          usedFlag = true;
        this.props.handleUsedIncome(usedFlag);
        this.setState({
          coinStack: this.state.remainingIncome / this.state.coinValue,
          incomeArray: tempIncomeArray
        });
      }
    );

    const id = target.id;
    let submitComplete = '';
    if (id === 'Savings') submitComplete = 'Completed';
    this.props.handleIncome(id, submitComplete);
  }

  onResetClick() {
    let exceedFlag = false;
    this.setState({
      incomeArray: [],
      remainingIncome: this.state.initialIncome,
      stepProg: 0,
      coinStack: 20
    });
    this.props.handleUsedIncome(exceedFlag);
  }

  render() {
    let cates = this.state.catesWithSave;
    let icons, enves;
    let iconImg = 'https://placeholdit.imgix.net/~text?txtsize=14&w=48&h=48';
    let iconName = '';
    if (cates.length !== 0) {
      icons = generateIconsEnves('Icon', cates, null);
      enves = generateIconsEnves('Envelopes', cates, this.state.incomeArray);
      if (this.state.stepProg < icons.length) {
        iconImg = icons[this.state.stepProg].imgSrc;
        iconName = icons[this.state.stepProg].name;
      }
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
                {this.state.remainingIncome >= 0
                  ? this.state.remainingIncome
                  : 0}
              </CardBody>
            </Card>
          </Col>
          <Col lg={2} className="align-self-center">
            <img
              className="m-img-center m-element-spacing-bottom s-img-border"
              src={iconImg}
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
                name={
                  (this.state.remainingIncome <= 0 &&
                    this.state.stepProg !== this.state.catesWithSave.length) ||
                  this.props.usedAll
                    ? 'Reset'
                    : 'Add'
                }
                iconId={
                  this.state.remainingIncome <= 0 &&
                  this.state.stepProg !== this.state.catesWithSave.length
                    ? ''
                    : iconName
                }
                handleBtn={
                  this.state.remainingIncome <= 0 || this.props.usedAll
                    ? this.onResetClick
                    : this.onAddClick
                }
              />
            </div>
          </Col>
          <Col lg={6}>
            <Row>
              <Col />
              <Col lg={12}>
                <Row className="justify-content-start">
                  {this.props.ready === 'Incomplete' ? (
                    <Col lg={12}>
                      <Alert color="warning" className="text-center">
                        Please complete all fields
                      </Alert>
                    </Col>
                  ) : this.state.remainingIncome <= 0 &&
                    this.state.stepProg !== this.state.catesWithSave.length ? (
                    <Col lg={12}>
                      <Alert color="danger" className="text-center">
                        Total income exceeded. Please make sure your income is
                        evenly spread.
                      </Alert>
                    </Col>
                  ) : this.state.remainingIncome > 0 && this.props.usedAll ? (
                    <Col lg={12}>
                      <Alert color="danger" className="text-center">
                        There is still some money leftover. Have you saved yet?
                      </Alert>
                    </Col>
                  ) : (
                    <></>
                  )}
                  {enves ? enves : ''}
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
  ready: PropTypes.string,
  inputIncome: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
  handleInput: PropTypes.func.isRequired,
  handleIncome: PropTypes.func.isRequired,
  handleCates: PropTypes.func.isRequired,
  usedAll: PropTypes.bool.isRequired,
  handleUsedIncome: PropTypes.func.isRequired
};

export default SetMoney;
