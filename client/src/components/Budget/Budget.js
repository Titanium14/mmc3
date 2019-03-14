import React, { Component } from 'react';
import { Row, Col, Form } from 'reactstrap';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  getBudgets,
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

      selNeeds: [],
      selWants: [],

      chosenNeedsCate: [],
      chosenWantsCate: [],
      noCateFlag: false,

      allCates: [],

      budFields: {},
      cateFields: [],

      readyFlag: ''
    };

    this.onNavBtnClick = this.onNavBtnClick.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    if (!this.props.auth.isAuthenticated) {
      this.props.history.push('/Auth/login');
    } else {
      this.props.getBudgets();
    }
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

    if (this.state.stepNo === 1) {
      const bName = this.state.budgetName;
      const period = this.state.period;
      const income = this.state.income;

      const newBudget = { budgetName: bName, period: period, income: income };

      const budArray = this.props.budget.budgets;
      const budNames = budArray.map(elem => elem.budgetName);

      bName !== '' && !budNames.includes(bName) && income >= 50
        ? this.setState({ stepNo: this.state.stepNo + 1, budFields: newBudget })
        : this.props.createBudget(newBudget);
    } else if (this.state.stepNo === 2) {
      if (name === 'Back') {
        this.setState({ stepNo: this.state.stepNo - 1 });
      } else {
        const cNeedCate = this.state.chosenNeedsCate;
        const cWantCate = this.state.chosenWantsCate;

        if (cNeedCate.length !== 0 || cWantCate.length !== 0) {
          this.setState({ stepNo: this.state.stepNo + 1, noCateFlag: false });
        } else {
          this.setState({ noCateFlag: true });
        }
      }
    } else if (this.state.stepNo === 3) {
      if (name === 'Back')
        this.setState({
          stepNo: this.state.stepNo - 1,
          cateFields: [],
          incomeInput: 0
        });
    }
  }

  onCateClicked(cateObj, list, itemId) {
    let tempCateArray, selected;

    if (list === 'Needs') {
      tempCateArray = this.state.chosenNeedsCate;
      selected = this.state.selNeeds;
    } else {
      tempCateArray = this.state.chosenWantsCate;
      selected = this.state.selWants;
    }

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

    selected.push(itemId);

    list === 'Needs'
      ? this.setState({ chosenNeedsCate: tempCateArray, selNeeds: selected })
      : this.setState({ chosenWantsCate: tempCateArray, selWants: selected });
  }

  handleIncome(cateName, flag) {
    let newCategory = this.state.cateFields;
    const newCateIncome = {
      cateName: cateName,
      incomeInput: this.state.inputIncome
    };
    newCategory.push(newCateIncome);

    this.setState({ inputIncome: 0, cateFields: newCategory, readyFlag: flag });
  }

  handleCates(array) {
    this.setState({ allCates: array });
  }

  onSubmit(e) {
    e.preventDefault();

    if (this.state.readyFlag === 'Completed') {
      this.props.createBudget(this.state.budFields);
      setTimeout(() => {
        const budgetId = this.props.budget.budget._id;
        const storedCates = this.state.cateFields;
        storedCates.forEach(elem => this.props.createCategory(elem, budgetId));
      }, 500);

      setTimeout(() => {
        this.props.history.push('/Results');
      }, 1000);
    } else {
      this.setState({ readyFlag: 'Incomplete' });
    }
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
            <Form onSubmit={this.onSubmit} className="m-element-spacing">
              {this.state.stepNo === 1 ? (
                <SetPeriod
                  budgetName={this.state.budgetName}
                  income={this.state.income}
                  handleInput={this.handleInputChange.bind(this)}
                  errors={errors}
                />
              ) : this.state.stepNo === 2 ? (
                <SetCategory
                  noCateFlag={this.state.noCateFlag}
                  selectedNeeds={this.state.selNeeds}
                  selectedWants={this.state.selWants}
                  handleCateClicked={this.onCateClicked.bind(this)}
                />
              ) : (
                <SetMoney
                  needsArr={this.state.chosenNeedsCate}
                  wantsArr={this.state.chosenWantsCate}
                  income={this.state.income}
                  inputIncome={this.state.inputIncome}
                  ready={this.state.readyFlag}
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
  auth: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  budget: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  errors: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  budget: state.budget,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { getBudgets, createBudget, createCategory, deleteCurrentBudget }
)(withRouter(Budget));
