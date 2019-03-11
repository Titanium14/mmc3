import React, { Component } from 'react';
import { Row, Col, Form } from 'reactstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  createBudget,
  createCategory,
  deleteCurrentBudget
} from '../../redux/actions/budgetActions';

import './Budget.css';

import StepGuide from './components/stepGuide';
import SetPeriod from './components/setPeriod';
import SetCategory from './components/setCategory';
import SetMoney from './components/setMoney';

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

      budgetName: '',
      period: 'Week',
      income: 0,

      inputIncome: 0,

      errors: {},

      chosenNeedsCate: [],
      chosenWantsCate: [],

      allCates: []
    };

    this.onNavBtnClick = this.onNavBtnClick.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.errors) {
      return { errors: nextProps.errors };
    }
    return null;
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.errors !== this.props.errors) {
      this.setState({ errors: this.props.errors });
    }
  }

  handleInputChange(e) {
    const target = e.target;
    const name = target.name;

    let value =
      name === 'income' || name === 'inputIncome'
        ? parseInt(target.value)
        : target.value;

    if ((name === 'income' || name === 'inputIncome') && isNaN(value))
      value = '';

    this.setState({ [name]: value });
  }

  onNavBtnClick(e) {
    const target = e.target;
    const name = target.name;

    name === 'Back'
      ? this.setState({ stepNo: this.state.stepNo - 1 }, () => {
          if (this.state.stepNo === 1) {
            this.props.deleteCurrentBudget(this.props.budget.budget._id);
          }
        })
      : this.setState({ stepNo: this.state.stepNo + 1 }, () => {
          if (this.state.stepNo === 2) {
            const newBudget = {
              budgetName: this.state.budgetName,
              period: this.state.period,
              income: this.state.income
            };

            this.props.createBudget(newBudget);
          }
        });
  }

  onCateClicked(cateObj, list) {
    let tempCateArray;

    list === 'Needs'
      ? (tempCateArray = this.state.chosenNeedsCate)
      : (tempCateArray = this.state.chosenWantsCate);

    let tempIndex = 0;
    let existFlag = false;

    tempCateArray.forEach((cateElement, i) => {
      if (cateElement.name === cateObj.name) {
        tempIndex = i;
        existFlag = true;
      }
    });

    !existFlag
      ? tempCateArray.push(cateObj)
      : tempCateArray.splice(tempIndex, 1);

    list === 'Needs'
      ? this.setState({ chosenNeedsCate: tempCateArray })
      : this.setState({ chosenWantsCate: tempCateArray });
  }

  handleIncome(cateName) {
    const budgetId = this.props.budget.budget._id;

    const newCateIncome = {
      cateName: cateName,
      incomeInput: this.state.inputIncome
    };

    this.props.createCategory(newCateIncome, budgetId);
  }

  handleCates(array) {
    this.setState({ allCates: array });
  }

  onSubmit() {
    // this.props.createBudget(this.state.newBudget);
  }

  render() {
    const { errors } = this.state;

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
                  budgetName={this.state.budgetName}
                  income={this.state.income}
                  handleInput={this.handleInputChange.bind(this)}
                  errors={errors}
                />
              ) : this.state.stepNo === 2 ? (
                <SetCategory
                  handleCateClicked={this.onCateClicked.bind(this)}
                />
              ) : (
                <SetMoney
                  needsArr={this.state.chosenNeedsCate}
                  wantsArr={this.state.chosenWantsCate}
                  income={this.state.income}
                  inputIncome={this.state.inputIncome}
                  catesArr={this.state.allCates}
                  handleInput={this.handleInputChange.bind(this)}
                  handleIncome={this.handleIncome.bind(this)}
                  handleCates={this.handleCates.bind(this)}
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

Budget.propTypes = {
  createBudget: PropTypes.func.isRequired,
  deleteCurrentBudget: PropTypes.func.isRequired,
  budget: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  errors: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired
};

const mapStateToProps = state => ({
  budget: state.budget,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { createBudget, createCategory, deleteCurrentBudget }
)(Budget);
