import React, { Component } from 'react';
import {
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardText,
  CardImg
} from 'reactstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getBudget } from '../../redux/actions/budgetActions';

import './Results.css';

import { ribbonTier1, ribbonTier2, ribbonTier3 } from './utils/exportImages';

import BudgetCard from './components/budgetCard';
import Chart from '../utils/chart';

class Results extends Component {
  constructor(props) {
    super(props);

    this.state = { resultBud: [] };
  }

  componentDidMount() {
    if (!this.props.budget.budget._id) {
      this.props.history.push('/');
    } else {
      const id = this.props.budget.budget._id;
      this.props.getBudget(id);

      setTimeout(() => {
        const budgetData = this.props.budget.budget;

        this.setState({ resultBud: budgetData });
      }, 1000);
    }
  }

  render() {
    let saveIncome = 0;
    let totalIncome = 0;
    if (
      Object.entries(this.state.resultBud).length !== 0 &&
      this.state.resultBud.constructor === Object
    ) {
      const arr = this.state.resultBud.category;
      saveIncome = arr[arr.length - 1].incomeInput;

      totalIncome = this.state.resultBud.income;
    }

    let budgetCards;
    if (this.state.resultBud.length !== 0) {
      console.log(this.state.resultBud);
      budgetCards = this.state.resultBud.category.map((b, i) => {
        i++;
        return (
          <BudgetCard
            key={i}
            name={b.cateName}
            incomeInput={b.incomeInput}
            winWidth={this.props.winWidth}
          />
        );
      });
    }

    return (
      <>
        <Row className="m-element-spacing-top" noGutters>
          <Col />
          <Col md={10}>
            <div className={this.props.winWidth < 768 ? 's-card-padding' : ''}>
              <h1 className="m-main-color">Your Budget</h1>
              <Card>
                <CardBody>
                  <Row>
                    <Col md={5}>
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
                    <Col md={7}>
                      <Row
                        noGutters
                        className={
                          this.props.winWidth < 768
                            ? 'm-element-spacing-top'
                            : ''
                        }>
                        {budgetCards}
                      </Row>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </div>
          </Col>
          <Col />
        </Row>
        <Row className="m-element-spacing-top" noGutters>
          <Col />
          <Col md={10}>
            <div className={this.props.winWidth < 768 ? 's-card-padding' : ''}>
              <h1 className="m-main-color">Awards</h1>
              <Card>
                <CardBody>
                  <CardTitle
                    className="text-center"
                    tag={this.props.winWidth < 768 ? 'h3' : 'h1'}>
                    Congratulations!
                  </CardTitle>
                  <CardText className="text-center" tag="p">
                    You have saved €{''}
                    {Object.entries(this.state.resultBud).length !== 0 &&
                    this.state.resultBud.constructor === Object
                      ? saveIncome
                      : 0}
                  </CardText>
                  <CardImg
                    className="m-img-center s-ribbon-size"
                    src={
                      (saveIncome * 100) / totalIncome >= 50
                        ? ribbonTier3
                        : (saveIncome * 100) / totalIncome >= 35
                        ? ribbonTier2
                        : ribbonTier1
                    }
                    alt="..."
                  />
                </CardBody>
              </Card>
            </div>
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
