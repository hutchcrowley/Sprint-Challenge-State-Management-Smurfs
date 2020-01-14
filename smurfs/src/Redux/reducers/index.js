import {
  GET_SMURFS_START,
  GET_SMURFS_SUCCESS,
  GET_SMURFS_FAILURE,
  ADD_SMURF,
  ADD_SMURF_SUCCESS,
  ADD_SMURF_FAILURE
} from "../actions/index";

const initialState = {
  smurfs: [],
  isLoading: false,
  error: ""
};

export const rootReducer = (state = initialState, action) => {
  console.log("reducer: ", action.type, action.payload);
  switch (action.type) {
    case GET_SMURFS_START:
      return { ...state, error: action.payload, isLoading: true };

    case GET_SMURFS_SUCCESS:
      console.log("Successfully retrieved smurf data!");
      return {
        ...state,
        smurfs: action.payload,
        isLoading: false,
        error: ""
      };

    case GET_SMURFS_FAILURE:
      return { ...state, isLoading: false, error: action.payload.error };

    case ADD_SMURF:
      return { ...state, isLoading: true, error: action.payload };

    case ADD_SMURF_SUCCESS:
      return { error: "Smurf added!", smurfs: action.payload };

    case ADD_SMURF_FAILURE:
      console.log(action.payload);
      return { ...state, error: action.payload };

    default:
      return state;
  }
};
