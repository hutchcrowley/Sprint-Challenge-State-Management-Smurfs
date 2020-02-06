import { deleteSmurf } from "../actions/index";

export default function deleteSmurfReducer() {
  switch (action.type) {
    case DELETE_SMURF_START:
      return {
        ...state,
        isDeleting: true,
        message: "BYE BYE SMURF!"
      };

    case DELETE_SMURF_SUCCESS:
      return {
        ...state,
        isDeleting: false,
        smurfs: action.payload,
        message: "SMURF DELETED!"
      };

    case DELETE_SMURF_FAILURE:
      return {
        ...state,
        isDeleting: false,
        message: `${action.payload.error}`
      };
    default:
      return state;
  }
}
