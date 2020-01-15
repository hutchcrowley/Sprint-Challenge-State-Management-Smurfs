import React from "react";

import { deleteSmurf } from "../Redux/actions/index";

import { connect } from "react-redux";

import { Link } from "react-router-dom";

import Spinner from "./Spinner";

const Smurf = props => {
  const handleDelete = (e, id) => {
    e.preventDefault();
    props.deleteSmurf(id);
  };

  return (
    <>
      {!props.isDeleting ? (
        <div className="smurf-card" key={props.key}>
          <header className="name">
            <h3>Smurf Name:</h3>
            <h1>{props.name}</h1>
          </header>
          <div className="age">
            <h3>Smurf Age:</h3>
            <h3>{props.age}</h3>
          </div>
          <div className="height">
            <h3>Smurf Height:</h3>
            <h3>{props.height}</h3>
          </div>
          <div className="delete-smurf">
            <button onClick={e => handleDelete(e, props.id)}>
              Remove Smurf!
            </button>
          </div>
          <div className="edit-smurf">
            <Link
              to={{
                pathname: "/smurf-editor",
                state: {
                  name: props.smurf.name,
                  age: props.smurf.age,
                  height: props.smurf.height,
                  id: props.smurf.id
                }
              }}
            >
              <button>Edit Smurf</button>
            </Link>
          </div>
        </div>
      ) : (
        <Spinner />
      )}
    </>
  );
};

const mapStateToProps = state => {
  return {
    smurf: state.smurfs,
    isDeleting: state.isDeleting
  };
};
export default connect(mapStateToProps, { deleteSmurf })(Smurf);
