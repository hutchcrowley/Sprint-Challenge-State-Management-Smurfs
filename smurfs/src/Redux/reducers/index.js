import { combineReducers } from "redux";
import getSmurfsReducer from "./get";
import addSmurfReducer from "./add";
import deleteSmurfReducer from "./delete";
import editSmurfReducer from "./edit";

const rootReducer = combineReducers({
  getSmurfsReducer,
  addSmurfReducer,
  deleteSmurfReducer,
  editSmurfReducer
});

export default rootReducer;
