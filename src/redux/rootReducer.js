import { combineReducers } from "redux";

import testeReducer from "./reducer/testeReducer";

const rootReducer = combineReducers({ testeReducer });

export default rootReducer;