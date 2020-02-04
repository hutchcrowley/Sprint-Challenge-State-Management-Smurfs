import React from "react";

import { connect } from "react-redux";

import Spinner from "./Spinner";

import Smurf from "./Smurf";

const SmurfList = props => {
  console.log("this is props at SmurfList: ", props);
  return (
    <div className="smurf-list">
      {!props.isloading ? (
        <ol>
          {props.smurfs.map(smurf => {
            return (
              <li key={smurf.id}>
                <Smurf
                  smurf={smurf}
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
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    isLoading: state.isLoading
  };
};

export default connect(mapStateToProps, null)(SmurfList);
