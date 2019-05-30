const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateBudgetInput(data) {
  let errors = {};

  data.budgetName = !isEmpty(data.budgetName) ? data.budgetName : '';
  data.period = !isEmpty(data.period) ? data.period : '';
  data.income = !isNaN(data.income) ? data.income : '';

  if (Validator.isEmpty(data.budgetName)) {
    errors.budgetName = 'Name field is required';
  }

  if (Validator.isEmpty(data.period)) {
    errors.period = 'Period field is required';
  }

  if (isNaN(data.income)) {
    errors.income = 'Invalid characters. Please try again';
  } else if (!data.income) {
    errors.income = 'Please input a valid value';
  } else if (data.income < 50) {
    errors.income = 'A minimum of €50 must be inputted';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
