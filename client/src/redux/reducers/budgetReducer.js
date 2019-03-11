import {
  GET_BUDGET,
  SET_BUDGET,
  GET_CATEGORY,
  SET_CATEGORY
} from '../actions/types';

const initialState = {
  budget: {},
  category: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_BUDGET:
      return {
        ...state,
        budget: action.payload
      };
    case SET_BUDGET:
      return {
        ...state,
        budget: action.payload
      };
    case GET_CATEGORY:
      return {
        ...state,
        category: action.payload
      };
    case SET_CATEGORY:
      return {
        ...state,
        category: action.payload
      };
    default:
      return state;
  }
}
