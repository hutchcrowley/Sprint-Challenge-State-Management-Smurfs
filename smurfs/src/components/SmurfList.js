import React, { useEffect } from "react";

import { connect } from "react-redux";

import Spinner from "./Spinner";

import Smurf from "./Smurf";

import { getSmurfs } from "../Redux/actions/index";

const SmurfList = props => {
  const initSmurfs = props.getSmurfs;
  useEffect(() => {
    initSmurfs();
  }, [initSmurfs]);

  console.log("This is the initial smurf village: ", initSmurfs.smurf);

  return (
    <div>
      {!props.isloading ? (
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

export default connect(mapStateToProps, { getSmurfs })(SmurfList);
