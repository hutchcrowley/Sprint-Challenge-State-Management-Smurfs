import React, { useEffect } from "react";

import { connect } from "react-redux";

import Spinner from "./Spinner";
import { getSmurfs } from "../Redux/actions/index";

import Smurf from "./Smurf";

const SmurfList = props => {
  useEffect(() => {
    let smurfs = props.getSmurfs();
    console.log(smurfs);
  }, [props]);
  return (
    <div>
      {!props.isloading ? (
        <div className="smurf-list">
          <ol>
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
        </div>
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
