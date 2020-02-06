import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./components/App";
import "./App.css";

import { Provider } from "react-redux";

import rootReducer from "./Redux/reducers/index";

import { createStore, applyMiddleware } from "redux";

import thunk from "redux-thunk";

import { composeWithDevTools } from "redux-devtools-extension";

const composeEnhancers = composeWithDevTools({});

const logger = ({ getState, dispatch }) => next => action => {
  console.log("Dispatching this type of action: ", action);
  next(action);
};

let store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(logger, thunk))
);

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById("root")
);
