import { connect } from "react-redux";
import { selectMonth } from "../actions/actions.js";
import Button from "../components/Button";

const mapStateToProps = (state, ownProps) => {
  return {
    month: state.days
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(selectMonth(ownProps.index));
    }
  };
};

const MonthButton = connect(mapStateToProps, mapDispatchToProps)(Button);

export default MonthButton;
