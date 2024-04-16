import { LOGIN, LOGOUT } from "./acions-type";

const initialState = {
  loginToggle: false,
  userName: null,
};

const testeReducer = (state = initialState, action) => {
    switch(action.type) {
      case LOGIN:
        return { ...state, loginToggle: action.payload}
      case LOGOUT:
        return {...state, loginToggle: false}
        default:
          return state;
    }
};

export default testeReducer;