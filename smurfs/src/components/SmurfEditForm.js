import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import { editSmurf } from "../Redux/actions/index";

class SmurfEditForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
      age: this.props.age,
      height: this.props.height,
      id: this.props.id
    };
  }

  editSmurf = (e, smurf) => {
    e.preventDefault();
    this.props.editSmurf(smurf);
    this.props.history.push("/");
  };

  handleInputChange = e => {
    e.persist();
    this.setState(prevState => ({
      smurf: {
        ...prevState.smurf,
        [e.target.name]: e.target.value
      }
    }));
    console.log(this.state);
  };

  render() {
    return (
      <div className="EditForm">
        <form onSubmit={e => this.editSmurf(e, this.state.smurf)}>
          <input
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.name}
            name="name"
            required
          />
          <input
            onChange={this.handleInputChange}
            placeholder="height"
            value={this.state.height}
            name="height"
            required
          />
          <input
            type="number"
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.age}
            name="age"
            required
          />
          <button type="submit">Submit Edit</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    name: state.smurfs.name,
    age: state.smurfs.age,
    height: state.smurfs.height,
    id: state.smurfs.id
  };
};

export default connect(null, { editSmurf })(SmurfEditForm);
