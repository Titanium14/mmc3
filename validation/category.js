const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateCategoryInput(data) {
  let errors = {};

  data.cateName = !isEmpty(data.cateName) ? data.cateName : '';
  data.incomeInput = !isNaN(data.incomeInput) ? data.incomeInput : '';

  if (Validator.isEmpty(data.cateName)) {
    errors.cateName = 'Category field is required';
  }

  if (isNaN(data.incomeInput)) {
    errors.incomeInput = 'Invalid characters. Please try again';
  } else if (!data.incomeInput) {
    errors.incomeInput = 'Please input a valid value';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
