import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { deleteSmurf, updateSmurf } from "../Redux/actions/index";

import Spinner from "./Spinner";

function Smurf(props) {
  const deleteSmurf = (e, id) => {
    console.log(`Whereisthistakingme: ${id}`);
    e.preventDefault();
    props.deleteSmurf(id);
  };

  // const routeToUpdate = e => {
  //   e.preventDefault();
  //   console.log(`Whereisthistakingme: ${props.id}`);
  //   console.log(history);
  //   history.push(`/edit-smurf/${props.id}`);
  // };

  return (
    <>
      {!props.isLoading ? (
        <div className="smurf-card" key={props.key}>
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

          <Link to={`/edit-smurf/${props.id}`}>
            <button className="button-md-button">Edit Smurf</button>
          </Link>
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

export default connect(mapStateToProps, { deleteSmurf, updateSmurf })(Smurf);
