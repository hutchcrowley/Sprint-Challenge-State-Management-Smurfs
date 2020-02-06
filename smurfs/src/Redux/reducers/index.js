import {
  ADD_SMURF_START,
  ADD_SMURF_SUCCESS,
  ADD_SMURF_FAILURE,
  DELETE_SMURF_START,
  DELETE_SMURF_SUCCESS,
  DELETE_SMURF_FAILURE,
  EDIT_SMURF_START,
  EDIT_SMURF_SUCCESS,
  EDIT_SMURF_FAILURE,
  GET_SMURFS_START,
  GET_SMURFS_SUCCESS,
  GET_SMURFS_FAILURE
} from "../actions/index";

export const initialState = {
  smurfs: [
    {
      name: "",
      age: "",
      height: "",
      id: ""
    }
  ],
  isLoading: false,
  message: ""
};
const rootReducer = (state = initialState, action) => {
  console.log("reducer: ", action.type, action.payload);

  switch (action.type) {
    // Case for handling begin API call to get initial state
    case GET_SMURFS_START:
      return { ...state, message: "BEGINNING API CALL...", isLoading: true };

    case GET_SMURFS_SUCCESS:
      console.log("Successfully retrieved smurf data!");
      return {
        ...state,
        smurfs: action.payload,
        isLoading: false,
        message: "SMURF DATA RETRIEVED!"
      };

    case GET_SMURFS_FAILURE:
      return { ...state, isLoading: false, message: `${action.payload.error}` };

    case ADD_SMURF_START:
      return { ...state, isLoading: true, message: "ADDING SMURF..." };

    case ADD_SMURF_SUCCESS:
      return {
        ...state,
        isLoading: false,
        message: "Smurf added!",
        smurfs: action.payload
      };

    case ADD_SMURF_FAILURE:
      console.log(action.payload);
      return { ...state, isLoading: false, message: `${action.payload.error}` };

    case DELETE_SMURF_START:
      return {
        ...state,
        isLoading: true,
        message: "BYE BYE SMURF!"
      };

    case DELETE_SMURF_SUCCESS:
      return {
        ...state,
        isLoading: false,
        smurfs: action.payload,
        message: "SMURF DELETED!"
      };

    case DELETE_SMURF_FAILURE:
      return {
        ...state,
        isLoading: false,
        message: `${action.payload.error}`
      };

    case EDIT_SMURF_START:
      return {
        ...state,
        isUpdating: true,
        message: "UPDATING SMURF DATA...",
        smurfs: action.payload
      };

    case EDIT_SMURF_SUCCESS:
      return {
        ...state,
        smurfs: action.payload.smurfs,
        isUpdating: false,
        message: "SMURF DATA UPDATED!"
      };

    case EDIT_SMURF_FAILURE:
      return {
        ...state,
        isUpdating: false,
        message: `${action.payload.data}`
      };
    default:
      return state;
  }
};

export default rootReducer;
