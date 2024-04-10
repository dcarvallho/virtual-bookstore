import { combineReducers } from "redux";

import testeReducer from "./reducer/loginToggle/loginToggle";

const rootReducer = combineReducers({ testeReducer });

export default rootReducer;