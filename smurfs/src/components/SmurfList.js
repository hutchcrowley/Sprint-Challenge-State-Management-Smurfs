import React from "react";

import { connect } from "react-redux";

import Smurf from "./Smurf";

const SmurfList = props => {
  return (
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
  );
};

const mapStateToProps = state => {
  return { smurfs: state.smurfs };
};

export default connect(mapStateToProps, null)(SmurfList);
