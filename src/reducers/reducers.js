import {combineReducers} from 'redux';
import {SELECT_MONTH} from '../actions/actions.js';

function SelectedMonth(state = null, action) {
  switch (action.type) {
    case SELECT_MONTH:
      return action.days;
  
    default:
      return state;
  }
}