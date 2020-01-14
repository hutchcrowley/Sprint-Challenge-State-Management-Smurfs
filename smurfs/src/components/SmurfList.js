import React from "react";

import { connect } from "react-redux";

import Spinner from "./Spinner";

import Smurf from "./Smurf";

const SmurfList = props => {
  return !props.isloading ? (
    <ol className="smurf-list">
      {props.smurfs.map(smurf => {
        return (
          <li key={smurf.id}>
            <Smurf
              id={smurf.id}
              name={smurf.name}
              age={smurf.age}
              height={smurf.height}
            />
          </li>
        );
      })}
    </ol>
  ) : (
    <Spinner />
  );
};

const mapStateToProps = state => {
  return { smurfs: state.smurfs, isLoading: state.isLoading };
};

export default connect(mapStateToProps, null)(SmurfList);
