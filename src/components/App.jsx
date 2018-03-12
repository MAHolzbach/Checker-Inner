import React, { Component } from "react";
import "../App.css";
import DisplayedMonth from "../containers/DisplayedMonth";
import MonthButton from "../containers/MonthButton";

class App extends Component {
  render() {
    let monthArray = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];
    return (
      <div>
        <h1>Checker-Inner</h1>
        {monthArray.map((month, index) => {
          return (
            <MonthButton month={month} key={index} index={index}>
              {month}
            </MonthButton>
          );
        })}
        <DisplayedMonth />
      </div>
    );
  }
}

export default App;
