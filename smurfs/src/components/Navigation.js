import React from "react";

import { NavLink } from "react-router-dom";

const Navigation = props => {
  return (
    <nav className="nav-bar">
      <NavLink exact to={`/`} activeClassName="active-link">
        <h3>Village Center</h3>
      </NavLink>
    </nav>
  );
};

export default Navigation;
