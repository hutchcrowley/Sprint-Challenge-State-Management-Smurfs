import React from "react";

const Spinner = () => {
  return (
    <div className="spinner-center">
      <img
        className="spinner"
        src={require("../Assets/PapaGif.gif")}
        alt="loading..."
      />
    </div>
  );
};

export default Spinner;
