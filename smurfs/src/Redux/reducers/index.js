import {
  GET_SMURFS_START,
  GET_SMURFS_SUCCESS,
  GET_SMURFS_FAILURE,
  ADD_SMURF_START,
  ADD_SMURF_SUCCESS,
  ADD_SMURF_FAILURE,
  DELETE_SMURF,
  DELETE_SMURF_SUCCESS,
  DELETE_SMURF_FAILURE,
  EDIT_SMURF,
  EDIT_SMURF_SUCCESS,
  EDIT_SMURF_FAILURE
} from "../actions/index";

const initialState = {
  smurfs: [
    {
      name: "",
      age: "",
      height: ""
    }
  ],
  isLoading: false,
  isAdding: false,
  isUpdating: false,
  isDeleting: false,
  error: ""
};

export const rootReducer = (state = initialState, action) => {
  console.log("reducer: ", action.type, action.payload);
  switch (action.type) {
    case GET_SMURFS_START:
      return { ...state, error: "", isLoading: true };

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

    case ADD_SMURF_START:
      return { ...state, isAdding: true, error: "" };

    case ADD_SMURF_SUCCESS:
      return {
        ...state,
        isAdding: false,
        error: "Smurf added!",
        smurfs: action.payload
      };

    case ADD_SMURF_FAILURE:
      console.log(action.payload);
      return { ...state, isAdding: false, error: action.payload };
    case DELETE_SMURF:
      return {
        ...state,
        isDeleting: true,
        error: ""
      };
    case DELETE_SMURF_SUCCESS:
      return {
        ...state,
        isDeleting: false,
        smurfs: action.payload
      };
    case DELETE_SMURF_FAILURE:
      return {
        ...state,
        isDeleting: false,
        error: action.payload
      };
    case EDIT_SMURF:
      return {
        ...state,
        isUpdating: true,
        error: "",
        smurfs: action.payload
      };
    case EDIT_SMURF_SUCCESS:
      return {
        ...state,
        smurfs: action.payload,
        isUpdating: false
      };

    case EDIT_SMURF_FAILURE:
      return {
        ...state,
        isUpdating: false,
        error: action.payload
      };

    default:
      return state;
  }
};
