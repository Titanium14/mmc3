import React from 'react';
import { CardTitle, CardText, Button } from 'reactstrap';
import PropTypes from 'prop-types';

import Chart from '../../utils/chart';

const DisplayBudget = props => {
  return (
    <>
      {Object.entries(props.displayBud).length !== 0 &&
      props.displayBud.constructor === Object ? (
        <>
          <CardTitle tag="h3" className="text-center">
            {props.displayBud.budgetName}
          </CardTitle>
          <hr />
          <CardTitle tag="h3" className="text-center">
            Total income: €{props.displayBud.income}
          </CardTitle>
          <Chart
            name={props.displayBud.budgetName}
            categories={props.displayBud.category}
            income={props.displayBud.income}
            period={props.displayBud.period}
          />
          <Button
            id={props.displayBud._id}
            onClick={props.onDelete}
            color="danger"
            className="s-delete-btn">
            Delete this budget
          </Button>
        </>
      ) : (
        <CardText tag="p">
          Please choose one of your budgets on the left
        </CardText>
      )}
    </>
  );
};

DisplayBudget.propTypes = {
  displayBud: PropTypes.object,
  onDelete: PropTypes.func.isRequired
};

export default DisplayBudget;
