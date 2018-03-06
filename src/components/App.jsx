import React, { Component } from "react";
import "../App.css";
import DisplayedMonth from "../containers/DisplayedMonth";

class App extends Component {
  render() {
    return (
      <div>
        <h1>Checker-Inner</h1>
        <DisplayedMonth />
      </div>
    );
  }
}

export default App;
