import React, { useState } from "react";

import { connect } from "react-redux";

import { addSmurf } from "../Redux/actions/index";
import { editSmurf } from "../Redux/actions/index";

const SmurfForm = props => {
  const [newSmurf, setNewSmurf] = useState({
    smurf: {
      name: "",
      age: "",
      height: "",
      id: null
    }
  });
  const [editSmurf, setEditSmurf] = useState();

  const handleSubmit = e => {
    e.preventDefault();
    console.log(newSmurf);
    props.addSmurf(newSmurf);
  };

  const handleEditSubmit = e => {
    e.preventDefault();
    console.log(editSmurf);
    props.editSmurf(editSmurf);
  };

  const handleChanges = e => {
    e.persist();
    setNewSmurf({ ...newSmurf, [e.target.name]: e.target.value });
  };

  const handleEditChanges = e => {
    e.persist();
    setEditSmurf({ ...props.smurfs, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="App">
        <form
          className="smurf-list"
          onChange={handleChanges}
          onSubmit={handleSubmit}
        >
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
          <button type="submit" onClick={handleSubmit}>
            Add Smurf
          </button>
          <div className="smurf-edit-section">
            <button onClick={handleEditSubmit}>Edit Smurf</button>
          </div>
        </form>
      </div>
    </>
  );
};

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    smurf: state.newSmurf,
    isAdding: state.isAdding
  };
};

export default connect(mapStateToProps, { addSmurf, editSmurf })(SmurfForm);
