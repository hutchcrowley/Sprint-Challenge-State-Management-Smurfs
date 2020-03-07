import React, { useState } from "react";

import { connect } from "react-redux";

import { useHistory } from "react-router-dom";

import { editSmurf } from "../Redux/actions/index";

const UpdateForm = props => {

  const history = useHistory();

  console.log("This is props in the UpdateForm: ", props);
  
  const id = Number(props.match.params.id);

  console.log(id)
  
  const [newSmurf, setNewSmurf] = useState({});
  
  const changeHandler = e => {
    setNewSmurf({
      ...newSmurf,
      [e.target.name]: e.target.value
    });
    console.log(newSmurf)
  };

  const handleSubmit = e => {
    e.preventDefault();
    props.editSmurf(id, newSmurf);
    // const refreshSmurfs = props.getSmurfs();
    // console.log('refreshSmurfs after form submit on UpdateForm component: ', refreshSmurfs)
    history.push("/");
  };

  return (
    <div className="update-form">
      <h1>Update Smurf</h1>

      <form onSubmit={handleSubmit}>
        <input
          className="update-input"
          type="text"
          name="name"
          onChange={changeHandler}
          placeholder="Name"
        />

        <input
          className="update-input"
          type="number"
          name="age"
          onChange={changeHandler}
          placeholder="Age"
        />

        <input
          className="update-input"
          type="text"
          name="height"
          onChange={changeHandler}
          placeholder="Height"
        />

        <input className="button update-button" type="submit" />
      </form>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs
  };
};

export default connect(mapStateToProps, { editSmurf })(UpdateForm);
