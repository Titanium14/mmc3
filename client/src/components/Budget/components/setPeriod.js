import React from 'react';
import PropTypes from 'prop-types';

import PeriodFields from './periodFields';

import { setIncome } from '../utils/methods';
import { nameIcon, calendarIcon, incomeBagIcon } from '../utils/exportImages';

const SetPeriod = props => {
  return (
    <>
      <PeriodFields
        stateName="budgetName"
        fieldName="Name of Budget"
        inputType="text"
        placeholder="Enter the name of the budget here"
        valueInput={props.budgetName}
        handleInput={props.handleInput}
        icon={nameIcon}
        error={props.errors.budgetName ? props.errors.budgetName : ''}
      />
      <PeriodFields
        stateName="period"
        fieldName="Budget By"
        inputType="select"
        handleInput={props.handleInput}
        icon={calendarIcon}
        error={props.errors.period ? props.errors.period : ''}
      />
      <PeriodFields
        stateName="income"
        fieldName="Income"
        inputType="text"
        placeholder="in Euro (€)"
        valueInput={setIncome(props.income)}
        handleInput={props.handleInput}
        icon={incomeBagIcon}
        error={props.errors.income ? props.errors.income : ''}
      />
    </>
  );
};

SetPeriod.propTypes = {
  budgetName: PropTypes.string.isRequired,
  income: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  handleInput: PropTypes.func.isRequired
};

export default SetPeriod;
