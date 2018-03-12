import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import renderedMonth from "./reducers/reducers.js";
import "./index.css";
import App from "./components/App";
import registerServiceWorker from "./registerServiceWorker";

//TODO: Need to render an initial month, based on current month, on page load.

let store = createStore(renderedMonth);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
