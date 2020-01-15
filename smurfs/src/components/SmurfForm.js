import React, { useState } from "react";

import { connect } from "react-redux";

import { useHistory } from "react-router-dom";

import { addSmurf, editSmurf } from "../Redux/actions/index";

const SmurfForm = props => {
  const [newSmurf, setNewSmurf] = useState({
    name: "",
    age: "",
    height: ""
  });

  let button = useHistory();

  const handleSubmit = e => {
    e.preventDefault();
    console.log(newSmurf);
    props.addSmurf(newSmurf);
    button.push("/");
  };

  const handleChanges = e => {
    setNewSmurf({ ...newSmurf, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="App">
        <form className="smurf-list" onSubmit={handleSubmit}>
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
        </form>
      </div>
    </>
  );
};

const mapStateToProps = state => {
  return {
    smurf: state.smurfs,
    isAdding: state.isAdding
  };
};

export default connect(mapStateToProps, { addSmurf, editSmurf })(SmurfForm);
