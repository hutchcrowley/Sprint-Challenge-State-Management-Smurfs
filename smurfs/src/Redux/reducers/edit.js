import { editSmurf } from "../actions/index";

export default function editSmurfReducer() {
  switch (action.type) {
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
}
