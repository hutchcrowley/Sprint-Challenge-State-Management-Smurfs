import React, { useState } from "react";
import { connect } from "react-redux";
import { editSmurf } from "../Redux/actions/index";
import Spinner from "./Spinner";

const SmurfEditForm = props => {
  const [smurf, setSmurf] = useState({
    name: props.location,
    age: props.location,
    height: props.location,
    id: props.location,
    isEditing: false
  });

  const handleSubmit = (e, smurf) => {
    e.preventDefault();
    props.editSmurf(props.id);
  };

  const handleInputChange = e => {
    setSmurf({ ...smurf, [e.target.name]: e.target.value });
  };

  return (
    <div>
      {!props.isEditing ? (
        <div className="smurf-editor">
          <form onSubmit={handleSubmit}>
            <input
              onChange={handleInputChange}
              placeholder="name"
              type="text"
              name="name"
            />
            <input
              onChange={handleInputChange}
              placeholder="height"
              name="height"
              type="text"
            />
            <input
              type="text"
              onChange={handleInputChange}
              placeholder="age"
              name="age"
            />
            <button type="submit" onClick={handleSubmit}>
              Edit a smurf!
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
    name: state.name,
    age: state.age,
    height: state.age,
    id: state.id,
    isEditing: state.isEditing
  };
};

export default connect(mapStateToProps, { editSmurf })(SmurfEditForm);
