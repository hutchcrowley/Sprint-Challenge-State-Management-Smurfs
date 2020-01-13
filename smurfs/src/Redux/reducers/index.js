import {
  GET_SMURFS_START,
  GET_SMURFS_SUCCESS,
  GET_SMURFS_FAILURE,
  ADD_SMURF
} from "../actions/index";

const initialState = {
  smurfs: [],
  isLoading: false,
  error: ""
};

export const rootReducer = (state = initialState, action) => {
  console.log("reducer: ", action);
  switch (action.type) {
    case GET_SMURFS_START:
      return { ...state, error: "", isLoading: true };

    case GET_SMURFS_SUCCESS:
      console.log("Successfully retrieved smurf data!");
      return {
        ...state,
        smurfs: action.payload.data,
        isLoading: false,
        error: ""
      };

    case GET_SMURFS_FAILURE:
      return { ...state, isLoading: false, error: action.payload.error };

    case ADD_SMURF:
      return { ...state, isLoading: true, smurfs: action.payload.data };

    default:
      return state;
  }
};
