import axios from "axios";

export const GET_SMURFS_START = "GET_SMURFS_START";
export const GET_SMURFS_SUCCESS = "GET_SMURFS_SUCCESS";
export const GET_SMURFS_FAILURE = "GET_SMURFS_FAILURE";

export const ADD_SMURF = "ADD_SMURF";
export const ADD_SMURF_SUCCESS = "ADD_SMURF_SUCCESS";
export const ADD_SMURF_FAILURE = "ADD_SMURF_FAILURE";

export const getSmurfs = () => dispatch => {
  dispatch({ type: GET_SMURFS_START });
  axios
    .get("http://localhost:3333/smurfs")
    .then(res => {
      console.log("Result of GET request to API: ", res);
      dispatch({ type: GET_SMURFS_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log("ERROR: data not recieved from server ", err);
      dispatch({ type: GET_SMURFS_FAILURE, payload: err });
    });
};

export const addSmurf = smurf => dispatch => {
  dispatch({ type: ADD_SMURF, payload: smurf });
  console.log(smurf);
  axios
    .post("http://localhost:3333/smurfs", smurf)
    .then(res => {
      console.log("Result of POST request to API: ", res.data);
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
