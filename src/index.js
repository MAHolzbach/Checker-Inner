import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import selectedMonth from "./reducers/reducers.js";
import "./index.css";
import App from "./components/App";
import registerServiceWorker from "./registerServiceWorker";

let store = createStore(selectedMonth);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
