import { combineReducers } from "redux";
import { QuransReducer } from "./quransReducer";
const rootReducer = combineReducers({
  QuranState: QuransReducer,
});

export default rootReducer;
