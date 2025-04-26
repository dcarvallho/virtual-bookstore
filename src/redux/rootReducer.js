import { combineReducers } from 'redux';

import { reducerBooks } from './reducer/fetchBooks/fetchBooks';

const rootReducer = combineReducers({ reducerBooks });

export default rootReducer;
