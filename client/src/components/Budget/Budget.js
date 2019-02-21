import React, { Component } from 'react';
import { Row, Col, Form } from 'reactstrap';

import '../../styles/Budget.css';

import StepGuide from './StepGuide';
import SetPeriod from './SetPeriod';
import SetCategory from './SetCategory';
import SetMoney from './SetMoney';
import GenerateResult from './GenerateResult';

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
      income: 0
    };
  }

  handleInputChange(e) {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  onBackClick() {
    this.setState({
      stepNo: this.state.stepNo - 1
    });
  }

  onNextClick() {
    this.setState({
      stepNo: this.state.stepNo + 1
    });
  }

  onSubmit(e) {
    e.preventDefault();
  }

  render() {
    return (
      <>
        <Row noGutters>
          <Col />
          {this.state.stepNo < 4 ? (
            <Col lg={10}>
              <StepGuide
                name="Steps"
                step={this.state.stepNo}
                stepDesc={descList[this.state.stepNo - 1]}
              />
            </Col>
          ) : (
            <Col lg={12}>
              <StepGuide
                name="Results"
                headerCard1="Your Budget"
                headerCard2="Awards"
              />
            </Col>
          )}
          <Col />
        </Row>
        <Row noGutters>
          <Col />
          {this.state.stepNo < 4 ? (
            <Col lg={6}>
              <Form
                onSubmit={this.props.handleSubmit}
                className="m-element-spacing">
                {this.state.stepNo === 1 ? (
                  <SetPeriod
                    period={this.state.period}
                    income={this.state.income}
                    handleInput={this.handleInputChange.bind(this)}
                    handleNext={this.onNextClick.bind(this)}
                  />
                ) : this.state.stepNo === 2 ? (
                  <SetCategory
                    handleNext={this.onNextClick.bind(this)}
                    handleBack={this.onBackClick.bind(this)}
                  />
                ) : (
                  <SetMoney
                    handleNext={this.onNextClick.bind(this)}
                    handleBack={this.onBackClick.bind(this)}
                  />
                )}
              </Form>
            </Col>
          ) : (
            <Col lg={12}>
              <GenerateResult />
            </Col>
          )}
          <Col />
        </Row>
      </>
    );
  }
}

export default Budget;
