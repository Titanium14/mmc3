const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateBudgetInput(data) {
  let errors = {};

  data.name = !isEmpty(data.name) ? data.name : '';
  data.period = !isEmpty(data.period) ? data.period : '';
  data.incomeTotal = !isEmpty(data.incomeTotal) ? data.incomeTotal : '';

  if (Validator.isEmpty(data.name)) {
    errors.name = 'Name field is required';
  }

  if (Validator.isEmpty(data.period)) {
    errors.period = 'Period field is required';
  }

  if (Validator.isEmpty(data.incomeTotal)) {
    errors.incomeTotal = 'Total income field is required';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
