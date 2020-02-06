import { addSmurf } from "../actions/index";

switch (action.type) {
  case ADD_SMURF_START:
    return { ...state, isAdding: true, message: "ADDING SMURF..." };

  case ADD_SMURF_SUCCESS:
    return {
      ...state,
      isAdding: false,
      message: "Smurf added!",
      smurfs: action.payload
    };

  case ADD_SMURF_FAILURE:
    console.log(action.payload);
    return { ...state, isAdding: false, message: `${action.payload.error}` };
  default:
    return state;
}
