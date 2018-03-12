import { connect } from "react-redux";
import { selectMonth } from "../actions/actions.js";
import Month from "../components/Month";

const getMonth = month => {
  switch (month) {
    case 2:
      return 31;
  }
};

const mapStateToProps = state => {
  return {
    month: getMonth(state)
  };
};

const DisplayedMonth = connect(mapStateToProps, null)(Month);

export default DisplayedMonth;
