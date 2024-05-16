import { combineReducers } from "redux";

import testeReducer from "./reducer/loginToggle/loginToggle";
import { reducerBooks } from "./reducer/fetchBooks/fetchBooks";

const rootReducer = combineReducers({ testeReducer, reducerBooks });

export default rootReducer;