import React from "react";
import ReactDOM from "react-dom";

import App from "./components/App";

import { composeWithDevTools } from "redux-devtools-extension";

import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { rootReducer } from "./Redux/reducers/index";

const composeEnhancers = composeWithDevTools({});

const logger = ({ getState }) => next => action => {
  console.log("Dispatching this type of action: ", action);
  next(action);
};

let store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(logger, thunk))
);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
