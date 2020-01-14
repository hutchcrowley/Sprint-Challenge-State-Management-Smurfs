import React, { useState, useEffect } from "react";

import { connect } from "react-redux";

import SmurfForm from "../components/SmurfForm";
import SmurfList from "../components/SmurfList";

import "./App.css";

import { getSmurfs } from "../Redux/actions/index";

const App = props => {
  const [smurf, setSmurf] = useState();

  useEffect(() => {
    getSmurfs();
  }, []);

  const handleSubmit = e => {
    e.preventDefault();
    console.log(smurf);
    props.addSmurf(smurf);
    setSmurf({ name: "", age: "", height: "" });
  };

  const handleChanges = e => {
    setSmurf({ ...smurf, [e.target.name]: e.target.value });
  };

  return (
    <div className="App">
      <SmurfForm onChange={handleChanges} onSubmit={handleSubmit} />
      <SmurfList />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs
  };
};

export default connect(mapStateToProps, {
  getSmurfs
})(App);
