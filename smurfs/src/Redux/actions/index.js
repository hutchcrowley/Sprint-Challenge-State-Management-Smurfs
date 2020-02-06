import axios from "axios";
import {
  GET_SMURFS_START,
  GET_SMURFS_SUCCESS,
  GET_SMURFS_FAILURE,
  ADD_SMURF_START,
  ADD_SMURF_SUCCESS,
  ADD_SMURF_FAILURE,
  DELETE_SMURF_START,
  DELETE_SMURF_SUCCESS,
  DELETE_SMURF_FAILURE,
  EDIT_SMURF_START,
  EDIT_SMURF_SUCCESS,
  EDIT_SMURF_FAILURE
} from "./action_types";

export const getSmurfs = () => dispatch => {
  dispatch({ type: GET_SMURFS_START });
  axios
    .get("http://localhost:3333/smurfs")
    .then(res => {
      console.log("Result of GET request to API: ", res.data);
      dispatch({ type: GET_SMURFS_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log("ERROR: data not recieved from server ", err.response);
      dispatch({
        type: GET_SMURFS_FAILURE,
        payload: `${err} ${err.response}`
      });
    });
};

export const addSmurf = newSmurf => dispatch => {
  dispatch({ type: ADD_SMURF_START });
  axios
    .post("http://localhost:3333/smurfs", newSmurf)
    .then(res => {
      console.log("Result of POST request to API: ", res);
      dispatch({ type: ADD_SMURF_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log("ERROR: API did not recieve POST request.", err);
      dispatch({
        type: ADD_SMURF_FAILURE,
        payload: err
      });
    });
};

export const deleteSmurf = id => dispatch => {
  dispatch({ type: DELETE_SMURF_START, id: id });
  axios
    .delete(`http://localhost:3333/smurfs/${id}`)
    .then(res => {
      console.log("This is the result of a delete request to the API: ", res);
      dispatch({ type: DELETE_SMURF_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log("ERROR: Smurf not deleted! ", err.message);
      dispatch({ type: DELETE_SMURF_FAILURE, payload: err.message });
    });
};

export const editSmurf = (id, editSmurf) => dispatch => {
  dispatch({
    type: EDIT_SMURF_START
  });
  axios
    .put(`http://localhost:3333/smurfs/${id}`, editSmurf)
    .then(res => {
      console.log("This is the result of a put request to the API: ", res.data);
      dispatch({ type: EDIT_SMURF_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log("ERROR: data not sent to API via PUT! ", err);
      dispatch({ type: EDIT_SMURF_FAILURE, payload: err.message });
    });
};
