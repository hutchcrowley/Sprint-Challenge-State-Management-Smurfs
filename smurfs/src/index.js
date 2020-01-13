import React from "react";
import ReactDOM from "react-dom";
import thunk from "redux-thunk";

import { devToolsEnhancer } from "redux-devtools-extension";
import { rootReducer } from "./Redux/reducers/index";

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";

import App from "./components/App";

let store = createStore(rootReducer, applyMiddleware(thunk, devToolsEnhancer));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
