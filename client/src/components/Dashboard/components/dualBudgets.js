import React, { Component } from 'react';
import {
  Col,
  Card,
  CardBody,
  CardTitle,
  ButtonGroup,
  Button
} from 'reactstrap';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { deleteCurrentBudget } from '../../../redux/actions/budgetActions';

import DisplayBudget from './displayBudget';

class DualBudgets extends Component {
  constructor(props) {
    super(props);

    this.state = {
      budArr: []
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ budArr: this.props.budgetsArr });
    }, 300);
  }

  onDelete(e) {
    const target = e.target;
    const id = target.id;

    this.props.deleteCurrentBudget(id);

    setTimeout(() => {
      this.props.history.push('/Loading');
    }, 300);

    setTimeout(() => {
      this.props.history.push('/Dashboard');
    }, 700);
  }

  render() {
    let budgetBtns;

    if (this.state.budArr.length !== 0) {
      budgetBtns = this.state.budArr.map(b => (
        <Button
          key={b._id}
          id={b._id}
          onClick={this.props.onSingle}
          color="primary">
          {b.budgetName}
        </Button>
      ));
    }

    return (
      <>
        <Col lg={3}>
          <Card>
            <CardBody className="s-card-bg">
              <CardTitle tag="h3" className="text-center">
                My Budgets
              </CardTitle>
              <ButtonGroup
                className="m-element-block-display s-btns-design"
                size="sm"
                vertical>
                {budgetBtns}
              </ButtonGroup>
              <ButtonGroup
                className="m-element-block-display s-btns-design"
                size="sm"
                vertical>
                <Button onClick={this.props.onBack} color="primary">
                  Back
                </Button>
              </ButtonGroup>
            </CardBody>
          </Card>
        </Col>
        <Col lg={5}>
          <Card>
            <CardBody className="text-center">
              <DisplayBudget
                displayBud={this.props.singleBud}
                onDelete={this.onDelete.bind(this)}
              />
            </CardBody>
          </Card>
        </Col>
      </>
    );
  }
}

DualBudgets.propTypes = {
  budget: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  deleteCurrentBudget: PropTypes.func.isRequired,
  budgetsArr: PropTypes.array.isRequired,
  singleBud: PropTypes.object,
  onSingle: PropTypes.func.isRequired,
  onBack: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  budget: state.budget
});

export default connect(
  mapStateToProps,
  { deleteCurrentBudget }
)(withRouter(DualBudgets));
