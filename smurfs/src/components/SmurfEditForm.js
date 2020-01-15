import React, { useState } from "react";
import { connect } from "react-redux";
import { editSmurf } from "../Redux/actions/index";

import Spinner from "./Spinner";


  return (
    <div>
      {!props.isUpdating ? (
       
      ) : (
        <Spinner />
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    smurf: state.smurfs,
    isUpdating: state.isUpdating,
    name: state.smurfs.name,
    age: state.smurfs.age,
    height: state.smurfs.height,
    id: state.smurfs.id,
    button: state.stateButton
  };
};

export default connect(mapStateToProps, { editSmurf })(SmurfEditForm);
