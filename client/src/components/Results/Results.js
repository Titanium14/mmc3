import React, { Component } from 'react';
import { Row, Col, Card, CardBody, CardTitle } from 'reactstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getBudget } from '../../redux/actions/budgetActions';

import { ribbonIcon } from './utils/exportImages';

import BudgetCard from './components/budgetCard';
import Chart from '../utils/chart';

class Results extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ribbons: [],
      resultBud: {},
      cards: []
    };
  }

  componentDidMount() {
    if (!this.props.budget.budget._id) {
      this.props.history.push('/');
    } else {
      let ribbonArray = [];
      for (let i = 0; i < 16; i++) {
        ribbonArray.push(
          <img style={{ width: '12.5%' }} key={i} src={ribbonIcon} alt="..." />
        );
      }

      const id = this.props.budget.budget._id;
      this.props.getBudget(id);

      setTimeout(() => {
        const budgetData = this.props.budget.budget;

        const budgetCards = budgetData.category.map((b, i) => {
          i++;
          return (
            <BudgetCard key={i} name={b.cateName} incomeInput={b.incomeInput} />
          );
        });
        this.setState({
          ribbons: ribbonArray,
          resultBud: budgetData,
          cards: budgetCards
        });
      }, 1000);
    }
  }

  render() {
    return (
      <>
        <Row className="m-element-spacing-top" noGutters>
          <Col />
          <Col lg={10}>
            <h1 className="m-main-color">Your Budget</h1>
            <Card>
              <CardBody>
                <Row>
                  <Col lg={5}>
                    {Object.entries(this.state.resultBud).length !== 0 &&
                    this.state.resultBud.constructor === Object &&
                    this.state.resultBud.category.length !== 0 ? (
                      <>
                        <CardTitle tag="h3" className="text-center">
                          {this.state.resultBud.budgetName}
                        </CardTitle>
                        <hr />
                        <CardTitle tag="h3" className="text-center">
                          Total income: €{this.state.resultBud.income}
                        </CardTitle>
                        <Chart
                          name={this.state.resultBud.budgetName}
                          categories={this.state.resultBud.category}
                          income={this.state.resultBud.income}
                          period={this.state.resultBud.period}
                        />
                      </>
                    ) : (
                      <></>
                    )}
                  </Col>
                  <Col lg={7}>
                    <Row>{this.state.cards}</Row>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
          <Col />
        </Row>
        <Row className="m-element-spacing-top" noGutters>
          <Col />
          <Col lg={10}>
            <h1 className="m-main-color">Awards</h1>
            <Card>
              <CardBody>{this.state.ribbons}</CardBody>
            </Card>
          </Col>
          <Col />
        </Row>
      </>
    );
  }
}

Results.propTypes = {
  getBudget: PropTypes.func.isRequired,
  budget: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired
};

const mapStateToProps = state => ({
  budget: state.budget
});

export default connect(
  mapStateToProps,
  { getBudget }
)(withRouter(Results));
