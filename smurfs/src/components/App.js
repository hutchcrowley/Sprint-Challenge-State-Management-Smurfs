import React from "react";

import { connect } from "react-redux";

import SmurfForm from "./SmurfForm";
import SmurfList from "./SmurfList";
import SmurfEditForm from "./SmurfEditForm";

import "./App.css";

const App = props => {
  return (
    <div className="App">
      <SmurfForm />
      <SmurfList />
      <SmurfEditForm />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    error: state.error
  };
};

export default connect(mapStateToProps, null)(App);
