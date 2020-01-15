import React, { useEffect, useState } from "react";

import { connect } from "react-redux";

import Spinner from "./Spinner";

import Smurf from "./Smurf";
import { getSmurfs } from "../Redux/actions";

const SmurfList = props => {
  const [prevSmurfs, setPrevSmurfs] = useState(props.smurfs);

  useEffect(() => {
    let initSmurfs = props.getSmurfs();
    setPrevSmurfs(initSmurfs);
    console.log(prevSmurfs);
  }, [prevSmurfs]);

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
