import React, { useState, useEffect } from "react";

import { connect } from "react-redux";

import Home from "./Home";
import Navigation from "./Navigation";
import UpdateForm from "./UpdateForm";
import SmurfForm from "./SmurfForm";
import NoMatch from "./NoMatch";

import { getSmurfs } from "../Redux/actions/index";

import { Route, Switch } from "react-router-dom";

const App = props => {
  const [newSmurfs, setNewSmurfs] = useState([]);

  console.log("in App.js: newSmurf = ", newSmurfs);

  useEffect(() => {
    let initSmurfs = props.getSmurfs();
    setNewSmurfs(initSmurfs);
    console.log(newSmurfs);
  }, []);

  console.log("This is props at App.js: ", props);

  return (
    <div className="App-wrapper">
      <Navigation />
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/add-smurf" component={SmurfForm} />
          <Route path="/edit-smurf/:id" component={UpdateForm} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </div>
  );
};

export default connect(null, { getSmurfs })(App);
