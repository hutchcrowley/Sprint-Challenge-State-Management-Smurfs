import React, { useState, useEffect } from "react";

import { connect } from "react-redux";

import { getSmurfs } from "../redux/actions/index";

import SmurfForm from "../components/SmurfForm";
import SmurfList from "../components/SmurfList";

import "./App.css";

const App = props => {
  const [smurf, setSmurf] = useState();

  useEffect(() => {
    props.getSmurfs();
  }, []);

  handleSubmit = e => {
    e.preventDefault();
    console.log(smurf);
    props.addSmurf({
      name: name,
      age: age,
      height: height,
      id: Date.now()
    });
  };

  const handleChanges = e => {
    e.preventDefault();
    let smurf = e.target.value;
    setSmurf(smurf);
  };

  return (
    <div className="App">
      <SmurfForm />
      <SmurfList />
    </div>
  );
};

const mapStateToProps = state => {};

export default App;
