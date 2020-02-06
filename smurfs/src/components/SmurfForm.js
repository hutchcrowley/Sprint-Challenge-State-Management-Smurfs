import React, { useState } from "react";

import { connect } from "react-redux";

import { addSmurf } from "../Redux/actions/index";
import { useHistory } from "react-router-dom";

const SmurfForm = props => {
  const [newSmurf, setNewSmurf] = useState({
    smurf: {
      name: "",
      age: "",
      height: ""
    }
  });

  let history = useHistory();

  const handleSubmit = e => {
    e.preventDefault();
    console.log(newSmurf);
    props.addSmurf(newSmurf);
    history.push("/");
  };

  const handleChanges = e => {
    e.persist();
    setNewSmurf({ ...newSmurf, [e.target.name]: e.target.value });
  };

  return (
    <div className="smurf-form">
      <form onChange={handleChanges} onSubmit={handleSubmit}>
        <label htmlFor="name" className="add-field">
          <h4>Enter Smurf Name</h4>
          <input
            onChange={handleChanges}
            className="input"
            type="text"
            placeholder="Name: "
            name="name"
          />
        </label>
        <label htmlFor="age" className="add-field">
          <h4>Enter Smurf Age</h4>
          <input
            onChange={handleChanges}
            className="input"
            name="age"
            type="number"
            placeholder="Age: "
          />
        </label>
        <label htmlFor="height" className="add-field">
          <h4>Enter Smurf's Height</h4>
          <input
            onChange={handleChanges}
            className="input"
            type="text"
            placeholder="Height: "
            name="height"
          />
        </label>
        <button
          type="submit"
          onClick={handleSubmit}
          className="button add-button"
        >
          Add Smurf
        </button>
      </form>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    smurf: state.newSmurf,
    isLoading: state.isLoading
  };
};

export default connect(mapStateToProps, { addSmurf })(SmurfForm);
