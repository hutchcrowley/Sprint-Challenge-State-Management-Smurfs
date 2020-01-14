import React, { useState } from "react";
import { connect } from "react-redux";
import { editSmurf } from "../Redux/actions/index";

import Spinner from "./Spinner";

const SmurfEditForm = props => {
  const [updatedSmurf, setUpdatedSmurf] = useState({});

  const handleSubmit = (e, updatedSmurf) => {
    e.preventDefault();
    props.editSmurf(updatedSmurf);
  };

  const handleInputChange = e => {
    e.persist();
    setUpdatedSmurf({ ...updatedSmurf, [e.target.name]: e.target.value });
  };

  return (
    <div>
      {!props.isUpdating ? (
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
    isUpdating: state.isUpdating
  };
};

export default connect(mapStateToProps, { editSmurf })(SmurfEditForm);
