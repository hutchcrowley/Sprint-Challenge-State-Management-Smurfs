import React, { useEffect } from "react";

import { connect } from "react-redux";

import Smurf from "./Smurf";

import { getSmurfs } from "../Redux/actions/index";

const SmurfList = props => {
  useEffect(() => {
    props.getSmurfs();
    console.log(props.smurfs);
  }, []);

  return (
    <ol className="smurf-list">
      {props.smurfs.map((smurf, index) => {
        <li>
          <Smurf
            key={index}
            name={smurf.name}
            age={smurf.age}
            height={smurf.height}
          />
        </li>;
      })}
    </ol>
  );
};

const mapStateToProps = state => {
  return { smurfs: state.smurfs };
};

export default connect(mapStateToProps, { getSmurfs })(SmurfList);
