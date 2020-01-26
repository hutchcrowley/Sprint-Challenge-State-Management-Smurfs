import React from "react";

import { connect } from "react-redux";

import SmurfForm from "./SmurfForm";
import SmurfList from "./SmurfList";
import Navigation from "./Navigation";
import NoMatch from "./NoMatch";

import { getSmurfs } from "../Redux/actions/index";

import "./App.css";

import { Route, Switch, Redirect } from "react-router-dom";

const App = props => {
  return (
    <div className="App">
      <Navigation />
      <Switch>
        <Route exact path="/Home">
          <h1>
            Welcome to the Smurf Management System, powered by React/ Redux!
          </h1>
          <SmurfList />
          <SmurfForm />
        </Route>
        <Route exact path="/">
          <Redirect to="/Home" />
        </Route>
        <Route component={NoMatch} />
      </Switch>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    error: state.error
  };
};

export default connect(mapStateToProps, { getSmurfs })(App);
