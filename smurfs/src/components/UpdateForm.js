import React, { useEffect, useState } from "react";

import { connect } from "react-redux";

import { useHistory } from "react-router-dom";

import { editSmurf } from "../Redux/actions/index";

const UpdateForm = props => {
  const history = useHistory();

  console.log("This is props in the UpdateForm: ", props);
  
  const [newSmurf, setNewSmurf] = useState({});
  
  useEffect(() => {
    let editingSmurf = props.smurfs.find(
      smurf => smurf.id === Number(props.match.params.id)
      );
      console.log("This is editSmurf in the UpdateForm: ", editingSmurf);
    if (editingSmurf) {
      setNewSmurf(editingSmurf);
      console.log('this is newSmurf in the Update Form: ', newSmurf)
    }
  }, []);

  const changeHandler = e => {
    e.persist()
    setNewSmurf({
      ...newSmurf,
      [e.target.name]: e.target.value
    });
    console.log(newSmurf)
  };

  const handleSubmit = e => {
    e.preventDefault();
    const id = Number(props.match.params.id);
    props.editSmurf(id, newSmurf);
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
          onchange={e => {changeHandler(e)}}
          placeholder="Name"
        />

        <input
          classname="update-input"
          type="number"
          name="age"
          onchange={changeHandler}
          placeholder="Age"
        />

        <input
          classname="update-input"
          type="text"
          name="height"
          onchange={changeHandler}
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
