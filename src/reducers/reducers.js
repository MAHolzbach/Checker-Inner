import { combineReducers } from "redux";
import { SELECT_MONTH, CURRENT_MONTH } from "../actions/actions.js";

function SelectedMonth(state = 0, action) {
  switch (action.type) {
    case CURRENT_MONTH:
      return action.days;
    case SELECT_MONTH:
      console.log(action.type);
      console.log(action.days);
      switch (action.days) {
        case 0:
          return 31;
        case 1:
          return 28;
        case 2:
          return 31;
        case 3:
          return 30;
        case 4:
          return 31;
        case 5:
          return 30;
        case 6:
          return 31;
        case 7:
          return 31;
        case 8:
          return 30;
        case 9:
          return 31;
        case 10:
          return 30;
        case 11:
          return 31;
      }

    default:
      return state;
  }
}

const renderedMonth = combineReducers({ SelectedMonth });

export default renderedMonth;
