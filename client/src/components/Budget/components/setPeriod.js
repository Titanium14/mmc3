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
        fieldName="Name"
        inputType="text"
        placeholder="Budget name"
        valueInput={props.budgetName}
        handleInput={props.handleInput}
        icon={nameIcon}
        error={props.errors.budgetName ? props.errors.budgetName : ''}
        winWidth={props.winWidth}
      />
      <PeriodFields
        stateName="period"
        fieldName="Period"
        inputType="select"
        handleInput={props.handleInput}
        icon={calendarIcon}
        error={props.errors.period ? props.errors.period : ''}
        winWidth={props.winWidth}
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
        winWidth={props.winWidth}
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
