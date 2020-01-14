import React, { useState } from "react";
import Spinner from "./Spinner";

import { connect } from "react-redux";

import { addSmurf } from "../Redux/actions/index";

const SmurfForm = props => {
  const [newSmurf, setNewSmurf] = useState({
    name: "",
    age: "",
    height: ""
  });

  const handleSubmit = e => {
    e.preventDefault();
    console.log(newSmurf);
    props.addSmurf(newSmurf);
  };

  const handleChanges = e => {
    setNewSmurf({ ...newSmurf, [e.target.name]: e.target.value });
  };

  return (
    <div>
      {!props.isAdding ? (
        <div className="App">
          <form
            className="smurf-list"
            onSubmit={handleSubmit}
            onChange={handleChanges}
          >
            <h1>
              Welcome to the Smurf Management System, powered by React/ Redux!
            </h1>
            <label htmlFor="name">
              Enter Smurf Name
              <input
                onChange={handleChanges}
                className="input"
                type="text"
                placeholder="Name: "
                name="name"
              />
            </label>
            <label htmlFor="age">
              Enter Smurf Age
              <input
                onChange={handleChanges}
                className="input"
                name="age"
                type="text"
                placeholder="Age: "
              />
            </label>
            <label htmlFor="height">
              Enter Smurf's Height
              <input
                onChange={handleChanges}
                className="input"
                type="text"
                placeholder="Height: "
                name="height"
              />
            </label>
            <button type="submit" onClick={props.handleSubmit}>
              Add Smurf
            </button>
          </form>
        </div>
      ) : (
        <Spinner />
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    smurf: state.smurfs,
    isAdding: state.isAdding
  };
};

export default connect(mapStateToProps, { addSmurf })(SmurfForm);
