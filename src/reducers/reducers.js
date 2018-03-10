import { combineReducers } from "redux";
import { SELECT_MONTH } from "../actions/actions.js";

function SelectedMonth(state = 2, action) {
  switch (action.type) {
    case SELECT_MONTH:
      return action.payload.days;

    default:
      return state;
  }
}

const renderedMonth = combineReducers(SelectedMonth);

export default renderedMonth;
