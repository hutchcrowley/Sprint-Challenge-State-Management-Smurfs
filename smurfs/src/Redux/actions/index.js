import axios from "axios";

export const GET_SMURFS_START = "GET_SMURFS_START";
export const GET_SMURFS_SUCCESS = "GET_SMURFS_SUCCESS";
export const GET_SMURFS_FAILURE = "GET_SMURFS_FAILURE";

export const ADD_SMURF_START = "ADD_SMURF_START";
export const ADD_SMURF_SUCCESS = "ADD_SMURF_SUCCESS";
export const ADD_SMURF_FAILURE = "ADD_SMURF_FAILURE";

export const DELETE_SMURF = "DELETE_SMURF";
export const DELETE_SMURF_SUCCESS = "DELETE_SMURF_SUCCESS";
export const DELETE_SMURF_FAILURE = "DELETE_SMURF_FAILURE";

export const EDIT_SMURF = "EDIT_SMURF";
export const EDIT_SMURF_SUCCESS = "EDIT_SMURF_SUCCESS";
export const EDIT_SMURF_FAILURE = "EDIT_SMURF_FAILURE";

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
        payload: `${err.response.status} ${err.response.data}`
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
  dispatch({ type: DELETE_SMURF, id: id });
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

export const editSmurf = (props, newSmurf) => dispatch => {
  dispatch({
    type: EDIT_SMURF,
    payload: {
      smurfs: props.smurfs,
      newSmurf: newSmurf
    }
  });
  axios
    .put(`http://localhost:3333/smurfs/${newSmurf.id}`, newSmurf)
    .then(res => {
      console.log("This is the result of a put request to the API: ", res.data);
      dispatch({ type: EDIT_SMURF_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log("ERROR: data not sent to API via PUT! ", err);
      dispatch({ type: EDIT_SMURF_FAILURE, payload: err.message });
    });
};
