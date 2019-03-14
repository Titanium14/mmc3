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
      this.setState({ budArr: this.props.budgets });
    }, 300);
  }

  render() {
    let budgetBtns;
    console.log(this.state.budArr);

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
            <CardBody>
              <DisplayBudget displayBud={this.props.singleBud} />
            </CardBody>
          </Card>
        </Col>
      </>
    );
  }
}

DualBudgets.propTypes = {
  budgets: PropTypes.array.isRequired,
  singleBud: PropTypes.object,
  onSingle: PropTypes.func.isRequired,
  onBack: PropTypes.func.isRequired
};

export default DualBudgets;
