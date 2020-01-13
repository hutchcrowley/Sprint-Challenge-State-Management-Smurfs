import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux
import { createStore, applyMiddleware } from 'redux';


import App from "./components/App";

import "./index.css";

import { createStore } from "redux";

let store = createStore(smurfReducer, applyMiddleware( thunk ))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
