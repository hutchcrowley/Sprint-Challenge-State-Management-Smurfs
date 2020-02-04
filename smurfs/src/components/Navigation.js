import React from "react";

import { useHistory } from "react-router-dom";

const Navigation = () => {
  const history = useHistory();

  function routeToAdd(e) {
    e.preventDefault();
    history.push("/add-smurf");
  }

  function routeToHome(e) {
    e.preventDefault();
    history.push("/");
  }

  return (
    <nav className="nav-bar">
      <ul>
        <li>
          <button onClick={routeToAdd} className="button add-button">
            Add A Smurf!
          </button>
        </li>
        <li>
          <button onClick={routeToHome} className="button home-button">
            Home
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
