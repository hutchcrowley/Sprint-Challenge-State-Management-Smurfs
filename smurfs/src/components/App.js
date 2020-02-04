import React, { useState, useEffect } from "react";

import { connect } from "react-redux";

import SmurfList from "./SmurfList";
import Navigation from "./Navigation";
import UpdateForm from "./UpdateForm";
import SmurfForm from "./SmurfForm";
import NoMatch from "./NoMatch";

import { getSmurfs } from "../Redux/actions/index";

import { Route, Switch, Redirect } from "react-router-dom";

const App = props => {
  const [newSmurfs, setNewSmurfs] = useState(props.smurfs);

  useEffect(() => {
    let initSmurfs = props.getSmurfs();
    setNewSmurfs(initSmurfs);
  }, []);

  console.log("This is props at App.js: ", props);

  console.log("from App.js:", props.smurfs);
  return (
    <div className="App-wrapper">
      <Navigation />
      <div className="App">
        <Switch>
          <Route exact path="/">
            <h1>
              Welcome to the Smurf Management System, powered by React/ Redux!
            </h1>
            <SmurfList />
          </Route>
          <Route exact path="/">
            <Redirect to="/Home" />
          </Route>
          <Route path="/add-smurf" component={SmurfForm} />
          <Route path="/edit-smurf/:id" component={UpdateForm} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    getSmurfs: state.getSmurfs
  };
};

export default connect(mapStateToProps, { getSmurfs })(App);
