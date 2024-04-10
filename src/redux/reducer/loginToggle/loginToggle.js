import { LOGIN, LOGOUT } from "./acions-type";

const initialState = {
  loginToggle: false,
  userName: null,
};

const testeReducer = (state = initialState, action) => {
    switch(action.type) {
      case LOGOUT:
        return { ...state, loginToggle: action.payload}
        default:
          return state;
    }
};

export default testeReducer;