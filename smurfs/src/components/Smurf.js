import React, { useState } from "react";
import { connect } from "react-redux";

import { deleteSmurf } from "../Redux/actions/index";

import Spinner from "./Spinner";

function Smurf(props) {
  const routeToList = event => {
    event.preventDefault();
    props.history.push("/smurf-list");
  };

  const [smurf, setSmurf] = useState();

  const deleteSmurf = (e, id) => {
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
            <button onClick={e => deleteSmurf(e, props.id)}>
              Remove Smurf!
            </button>
          </div>
        </div>
      ) : (
        <Spinner />
      )}
    </>
  );
}

const mapStateToProps = state => {
  return {
    isDeleting: state.isDeleting
  };
};
export default connect(mapStateToProps, { deleteSmurf })(Smurf);
