import React, { useEffect, useState } from "react";

import { connect } from "react-redux";

import { useHistory } from "react-router-dom";

import { getSmurfs, editSmurf } from "../Redux/actions/index";

const initialSmurf = {
  name: "",
  age: null,
  height: "",
  id: ""
};

const UpdateForm = props => {
  const history = useHistory();

  console.log("This is props in the UpdateForm: ", props);

  const [newSmurf, setNewSmurf] = useState(initialSmurf);

  let newSmurfs = props.getSmurfs();
  useEffect(() => {
    const editingSmurf = newSmurfs.find(smurf => {
      return smurf.id === Number(props.match.params.id);
    });
    if (editingSmurf) {
      setNewSmurf(editingSmurf);
    }
  }, []);

  const changeHandler = e => {
    e.persist();
    setNewSmurf({
      ...newSmurf,
      [e.target.name]: e.target.value
    });
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
    smurfs: state.newSmurfs
  };
};

export default connect(null, { getSmurfs, editSmurf })(UpdateForm);
