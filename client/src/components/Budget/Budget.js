import React, { Component } from 'react';
import { Row, Col, Form } from 'reactstrap';

import './Budget.css';

import CreateButton from './components/createButton';

import StepGuide from './components/stepGuide';
import SetPeriod from './components/setPeriod';
import SetCategory from './components/setCategory';
import SetMoney from './components/setMoney';
import GenerateResult from './components/generateResult';

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

    this.onNavBtnClick = this.onNavBtnClick.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  handleInputChange(e) {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  onNavBtnClick(e) {
    const target = e.target;
    const name = target.name;

    name === 'Back'
      ? this.setState({ stepNo: this.state.stepNo - 1 })
      : this.setState({ stepNo: this.state.stepNo + 1 });
  }

  onSubmit(e) {
    e.preventDefault();
  }

  render() {
    const navBtns = (
      <>
        <Col />
        {this.state.stepNo !== 1 ? (
          <Col lg={1}>
            <CreateButton
              name="Back"
              handleBtn={this.onNavBtnClick.bind(this)}
            />
          </Col>
        ) : (
          <></>
        )}
        <Col lg={4} />
        <Col lg={1}>
          <CreateButton name="Next" handleBtn={this.onNavBtnClick.bind(this)} />
        </Col>
        <Col />
      </>
    );

    const submitBtn = (
      <>
        <Col lg={2}>
          <CreateButton name="Submit" handleBtn={this.onSubmit.bind(this)} />
        </Col>
        <Col />
      </>
    );

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
                  <SetCategory />
                ) : (
                  <SetMoney />
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
        <Row className="m-element-spacing">
          {this.state.stepNo < 4 ? navBtns : submitBtn}
        </Row>
      </>
    );
  }
}

export default Budget;
