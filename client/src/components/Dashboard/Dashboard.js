import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getBudget, getBudgets } from '../../redux/actions/budgetActions';

import './Dashboard.css';

import DualDefault from './components/dualDefault';
import DualBudgets from './components/dualBudgets';
import DualGames from './components/dualGames';
import DualAbout from './components/dualAbout';

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: '',
      budgets: [],
      singleBud: {}
    };
  }

  onBudgetClick() {
    this.props.getBudgets();

    let budgetsData;
    setTimeout(() => {
      budgetsData = this.props.budget.budgets;
    }, 300);
    
    setTimeout(() => {
      this.setState({ content: 'Budget', budgets: budgetsData });
    }, 800);
  }

  onGamesClick() {
    this.setState({ content: 'Games' });
  }

  onAboutClick() {
    this.setState({ content: 'About' });
  }

  onBackClick() {
    this.setState({ content: '', singleBud: {} });
  }

  onSingleBudget(e) {
    const target = e.target;
    const id = target.id;

    this.props.getBudget(id);

    let budgetData;
    setTimeout(() => {
      budgetData = this.props.budget.budget;
      this.setState({ singleBud: {} });
    }, 500);

    setTimeout(() => {
      this.setState({ singleBud: budgetData });
    }, 1000)
  }

  render() {
    const { user } = this.props.auth;

    return (
      <Row>
        <Col />
        {this.state.content === 'Budget' ? (
          <DualBudgets
            budgets={this.state.budgets}
            singleBud={this.state.singleBud}
            onSingle={this.onSingleBudget.bind(this)}
            onBack={this.onBackClick.bind(this)}
          />
        ) : this.state.content === 'Games' ? (
          <DualGames onBack={this.onBackClick.bind(this)} />
        ) : this.state.content === 'About' ? (
          <DualAbout user={user} onBack={this.onBackClick.bind(this)} />
        ) : (
          <DualDefault
            user={user}
            onBudgets={this.onBudgetClick.bind(this)}
            onGames={this.onGamesClick.bind(this)}
            onAbout={this.onAboutClick.bind(this)}
          />
        )}
        <Col />
      </Row>
    );
  }
}

Dashboard.propTypes = {
  auth: PropTypes.object.isRequired,
  budget: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
};

const mapStateToProps = state => ({
  auth: state.auth,
  budget: state.budget
});

export default connect(
  mapStateToProps,
  { getBudget, getBudgets }
)(Dashboard);
