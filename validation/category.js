const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateCategoryInput(data) {
  let errors = {};

  data.name = !isEmpty(data.name) ? data.name : '';
  data.income = !isEmpty(data.income) ? data.income : '';

  if (Validator.isEmpty(data.name)) {
    errors.title = 'Name title field is required';
  }

  if (Validator.isEmpty(data.income)) {
    errors.income = 'Income field is required';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
