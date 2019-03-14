import React from 'react';
import { CardTitle, CardText } from 'reactstrap';
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
  displayBud: PropTypes.object
};

export default DisplayBudget;
