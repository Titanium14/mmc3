import React, { Component } from 'react';
import { Row, Col, Form } from 'reactstrap';

import './Budget.css';

import StepGuide from './components/stepGuide';
import SetPeriod from './components/setPeriod';
import SetCategory from './components/setCategory';
import SetMoney from './components/setMoney';

import { objCateList } from './utils/objectCreator';
import { generateNavBtns } from './utils/methods';

const descList = [
  'Choose your budget time-frame and add your income',
  'Choose what you would like to budget for',
  'Add money to your envelopes!'
];

class Budget extends Component {
  constructor(props) {
    super(props);

    this.state = {
      stepNo: 1,
      period: 'week',
      income: 0,
      inputIncome: 0,
      tempNeedsArray: [],
      tempWantsArray: [],
      chosenNeedsCate: [],
      chosenWantsCate: [],
      singleNeedsArray: [],
      singleWantsArray: [],
      iconsNeedsArray: [],
      iconsWantsArray: [],
      cateBudget: []
    };

    this.onNavBtnClick = this.onNavBtnClick.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  handleInputChange(e) {
    const target = e.target;
    const name = target.name;
    const value = name === 'income' ? parseInt(target.value) : target.value;

    this.setState({ [name]: value });
  }

  onNavBtnClick(e) {
    const target = e.target;
    const name = target.name;

    name === 'Back'
      ? this.setState({ stepNo: this.state.stepNo - 1 })
      : this.setState({ stepNo: this.state.stepNo + 1 });
  }

  onCateClicked(category, list, icon, enveIcon) {
    let tempCateArray, tempSingleIcon, tempIconArray;
    if (list === 'needs') {
      tempCateArray = this.state.tempNeedsArray;
      tempSingleIcon = this.state.singleNeedsArray;
      tempIconArray = this.state.iconsNeedsArray;
    } else {
      tempCateArray = this.state.tempWantsArray;
      tempSingleIcon = this.state.singleWantsArray;
      tempIconArray = this.state.iconsWantsArray;
    }

    let tempIndex = 0;
    tempCateArray.forEach((cateElement, i) => {
      if (cateElement === category) tempIndex = i;
    });

    if (!tempCateArray.includes(category)) {
      tempCateArray.push(category);
      tempSingleIcon.push(icon);
      tempIconArray.push(enveIcon);
    } else {
      tempCateArray.splice(tempIndex, 1);
      tempSingleIcon.splice(tempIndex, 1);
      tempIconArray.splice(tempIndex, 1);
    }

    const objTemp = objCateList(tempCateArray, tempSingleIcon, tempIconArray);

    list === 'needs'
      ? this.setState({
        tempNeedsArray: tempCateArray,
        singleNeedArray: tempSingleIcon,
        iconNeedsArray: tempIconArray,
        chosenNeedsCate: objTemp
      })
      : this.setState({
        tempWantsArray: tempCateArray,
        singleWantArray: tempSingleIcon,
        iconWantsArray: tempIconArray,
        chosenWantsCate: objTemp
      });
  }

  onSubmit() {
    
  }

  render() {
    const navBtns = generateNavBtns(
      this.state.stepNo,
      this.onNavBtnClick,
      this.onSubmit
    );
    return (
      <>
        {this.state.stepNo < 4 ? (
          <Row noGutters>
            <Col />
            <Col lg={10}>
              <StepGuide
                name="Steps"
                step={this.state.stepNo}
                stepDesc={descList[this.state.stepNo - 1]}
              />
            </Col>
            <Col />
          </Row>
        ) : (
          <></>
        )}
        <Row noGutters>
          <Col />
          <Col lg={this.state.stepNo < 3 ? 6 : 8}>
            <Form
              onSubmit={this.props.handleSubmit}
              className="m-element-spacing">
              {this.state.stepNo === 1 ? (
                <SetPeriod
                  period={this.state.period}
                  income={this.state.income}
                  handleInput={this.handleInputChange.bind(this)}
                />
              ) : this.state.stepNo === 2 ? (
                <SetCategory
                  handleCateClicked={this.onCateClicked.bind(this)}
                />
              ) : (
                <SetMoney
                  arrayNeeds={this.state.chosenNeedsCate}
                  arrayWants={this.state.chosenWantsCate}
                  income={this.state.income}
                  inputIncome={this.state.inputIncome}
                  handleInput={this.onSubmit}
                  handleIncome={this.handleInputChange.bind(this)}
                />
              )}
            </Form>
          </Col>
          <Col />
        </Row>
        <Row className="m-element-spacing">
          <Col />
          {navBtns}
          <Col />
        </Row>
      </>
    );
  }
}

export default Budget;
