import React from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

import { deleteSmurf } from "../Redux/actions/index";

import Spinner from "./Spinner";

function Smurf(props) {
  const history = useHistory();

  const deleteSmurf = (e, id) => {
    console.log(`Whereisthistakingme: ${id}`);
    e.preventDefault();
    props.deleteSmurf(id);
  };

  const routeToUpdate = (e, id) => {
    e.preventDefault();
    console.log(`Whereisthistakingme: ${id}`);
    console.log(history);
    history.push(`/edit-smurf/${id}`);
  };

  return (
    <>
      {!props.isLoading ? (
        <div className="smurf-card">
          <div className="card-field">
            <h3>Smurf Name:</h3>
          </div>
          <h1>{props.name}</h1>
          <div className="card-field">
            <h3>Smurf Age:</h3>
          </div>
          <h2>{props.age}</h2>
          <div className="card-field">
            <h3>Smurf Height:</h3>
          </div>
          <h2>{props.height}</h2>

          <button
            className="button-md-button"
            onClick={e => deleteSmurf(e, props.id)}
          >
            Remove Smurf!
          </button>

          <button
            className="button-md-button"
            onClick={e => routeToUpdate(e, props.id)}
          >
            Edit Smurf
          </button>
        </div>
      ) : (
        <Spinner />
      )}
    </>
  );
}

const mapStateToProps = state => {
  return {
    isLoading: state.isLoading
  };
};

export default connect(mapStateToProps, { deleteSmurf })(Smurf);
