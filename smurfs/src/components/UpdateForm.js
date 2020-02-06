import React, { useState, useEffect } from "react";

import { connect } from "react-redux";

import { useHistory, useParams } from "react-router-dom";

import { editSmurf } from "../Redux/actions/index";

const UpdateForm = props => {
  const [newSmurf, setNewSmurf] = useState({});

  const history = useHistory();

  const { id } = useParams();
  console.log("This is props in the UpdateForm: ", props);

  useEffect(() => {
    let editingSmurf = props.newSmurfs.find(smurf => smurf.id === Number(id));
    if (editingSmurf) {
      setNewSmurf(editingSmurf);
    }
    return newSmurf;
  }, []);

  const changeHandler = e => {
    e.persist();
    s;
    setNewSmurf({
      ...newSmurf,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    editSmurf(newSmurf);
    history.push("/");
  };
  return (
    <div className="update-form">
      <h2>Update Smurf</h2>

      <form onSubmit={handleSubmit}>
        <input
          classname="update-input"
          type="text"
          name="name"
          onchange={changeHandler}
          placeholder="Name"
          value={newSmurf.name}
        />

        <input
          classname="update-input"
          type="number"
          name="age"
          onchange={changeHandler}
          placeholder="Age"
          value={newSmurf.age}
        />

        <input
          classname="update-input"
          type="text"
          name="height"
          onchange={changeHandler}
          placeholder="Height"
          value={newSmurf.height}
        />

        <input className="button update-button" type="submit" />
      </form>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    newSmurfs: state.newSmurfs
  };
};

export default connect(mapStateToProps, { updateSmurf })(UpdateForm);
