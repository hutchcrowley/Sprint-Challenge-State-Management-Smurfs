import React from "react";

import { connect } from "react-redux";

const SmurfForm = props => {
  return (
    <div className="App">
      <form className="smurf-list" onSubmit={props.handleSubmit}>
        <input
          className="name-input"
          name="name"
          type="text"
          onChange={handleChanges}
        ></input>
        <input
          className="age-input"
          name="age"
          type="text"
          onChange={handleChanges}
        ></input>
        <input
          className="height-input"
          name="height"
          type="text"
          onChange={handleChanges}
        ></input>
        <button type="submit" onClick={props.handleSubmit}>
          Add Smurf
        </button>
      </form>
    </div>
  );
};

export default connect(null, { getSmurfs, addSmurf })(SmurfForm);
