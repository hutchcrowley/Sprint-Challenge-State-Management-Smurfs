import React from "react";

import { deleteSmurf } from "../Redux/actions/index";

import { connect } from "react-redux";

import Spinner from "./Spinner";

const Smurf = props => {
  const handleDelete = (e, id) => {
    e.preventDefault();
    props.deleteSmurf(id);
  };

  return (
    <div>
      {!props.isDeleting ? (
        <div className="smurf-card" key={props.key}>
          <h1>{props.name}</h1>
          <h3>Smurf Age:</h3>
          <h3>{props.age}</h3>
          <h3>Smurf Height:</h3>
          <h3>{props.height}</h3>
          <button onClick={e => handleDelete(e, props.id)}>
            Remove Smurf!
          </button>
        </div>
      ) : (
        <Spinner />
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    isDeleting: state.isDeleting
  };
};
export default connect(mapStateToProps, { deleteSmurf })(Smurf);
