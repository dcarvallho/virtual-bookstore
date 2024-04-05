const initialState = {
  loginToggle: 50,
  userName: null,
};

const testeReducer = (state = initialState, action) => {
    if(action.type === "LOGOUT") {
        return { ...state, loginToggle: "50"}
    }
    
    return state;
};

export default testeReducer;