import axios from 'axios';

import {
  GET_ERRORS,
  GET_BUDGET,
  GET_BUDGETS,
  SET_BUDGET,
  SET_CATEGORY,
  GET_CATEGORY
} from './types';

// Get single budget
export const getBudget = budgetId => dispatch => {
  axios
    .get(`/api/budgets/${budgetId}`)
    .then(res => {
      dispatch({ type: GET_BUDGET, payload: res.data });
    })
    .catch(err => dispatch({ type: GET_ERRORS, payload: err.response.data }));
};

// Get all budgets
export const getBudgets = () => dispatch => {
  axios
    .get('/api/budgets')
    .then(res => {
      dispatch({ type: GET_BUDGETS, payload: res.data });
    })
    .catch(err => dispatch({ type: GET_ERRORS, payload: err.response.data }));
};

// Set budget
export const createBudget = budgetData => dispatch => {
  console.log(budgetData);
  axios
    .post('/api/budgets', budgetData)
    .then(res => {
      dispatch({ type: SET_BUDGET, payload: res.data });
      dispatch({ type: GET_ERRORS, payload: {} });
    })
    .catch(err => dispatch({ type: GET_ERRORS, payload: err.response.data }));
};

// Set budget
export const createCategory = (categoryData, budgetId) => dispatch => {
  axios
    .post(`/api/budgets/${budgetId}/category`, categoryData)
    .then(res => {
      dispatch({ type: SET_CATEGORY, payload: res.data });
    })
    .catch(err => dispatch({ type: GET_ERRORS, payload: err.response.data }));
};

// Delete budget
export const deleteCurrentBudget = id => dispatch => {
  axios
    .delete(`/api/budgets/${id}`)
    .then(res => dispatch({ type: GET_BUDGET, payload: {} }))
    .catch(err => dispatch({ type: GET_ERRORS, payload: err.response.data }));
};

// Delete budget
export const deleteCurrentCategory = (budgetId, cateId) => dispatch => {
  axios
    .delete(`/api/budgets/${budgetId}/category/${cateId}`)
    .then(res => dispatch({ type: GET_CATEGORY, payload: {} }))
    .catch(err => dispatch({ type: GET_ERRORS, payload: err.response.data }));
};
