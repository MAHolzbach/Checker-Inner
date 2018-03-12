import { connect } from "react-redux";
import Month from "../components/Month";

const mapStateToProps = (state, ownProps) => {
  return {
    month: state
  };
};

const DisplayedMonth = connect(mapStateToProps, null)(Month);

export default DisplayedMonth;
