import { getSmurfs } from "../actions/action_types";

export const initialState = {
  smurfs: [
    {
      name: "",
      age: "",
      height: "",
      id: null
    }
  ],
  isLoading: false,
  isAdding: false,
  isUpdating: false,
  isDeleting: false,
  message: ""
};

export default function getSmurfsReducer(state = initialState, action) {
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

    default:
      return state;
  }
}
