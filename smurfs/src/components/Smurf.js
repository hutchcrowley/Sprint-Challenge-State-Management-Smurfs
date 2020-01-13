import React from "react";

const Smurf = props => {
  return (
    <div className="smurf" key={props.key}>
      <h1>{props.name}</h1>
      <h3>Smurf Age: {props.age}</h3>
      <h3>Smurf Height: {props.height}</h3>
    </div>
  );
};

export default Smurf;
