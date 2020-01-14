import React from "react";

import { connect } from "react-redux";

import { addSmurf } from "../Redux/actions/index";

const SmurfForm = props => {
  return (
    <div className="App">
      <form
        className="smurf-list"
        onSubmit={props.handleSubmit}
        onChange={props.handleChanges}
      >
        <h1>
          Welcome to the Smurf Management System, powered by React/ Redux!
        </h1>
        <label>
          Enter Smurf Name
          <input
            className="name-input"
            name="name"
            type="text"
            placeholder="Name: "
          ></input>
        </label>
        <label>
          Enter Smurf Age
          <input
            className="age-input"
            name="age"
            type="text"
            placeholder="Age: "
          ></input>
        </label>
        <label>
          Enter Smurf's Height
          <input
            className="height-input"
            name="height"
            type="text"
            placeholder="Height: "
          ></input>
        </label>
        <button type="submit" onClick={props.handleSubmit}>
          Add Smurf
        </button>
      </form>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs
  };
};

export default connect(mapStateToProps, {
  addSmurf
})(SmurfForm);
