//Actions types
export const ACTION_TYPES = {
    FETCH_BOOKS_REQUEST: "FETCH_BOOKS_REQUEST",
    FETCH_BOOKS_SUCCESS: "FETCH_BOOKS_SUCCESS",
    FETCH_BOOKS_FAILURE: "FETCH_BOOKS_FAILURE"
}

const initialState = {}

export const reducert = (state = initialState, action) => {
    switch(action.type){
        case ACTION_TYPES.FETCH_BOOKS_FAILURE:
            return { ...state}
        case ACTION_TYPES.FETCH_BOOKS_REQUEST:
            return {...state, loading: true}
        case ACTION_TYPES.FETCH_BOOKS_SUCCESS:
            return {...state}
        default:
            return state;
    }
}

//Action creator
export const fetchUserRequest = () => {
    return {
        type: ACTION_TYPES.FETCH_BOOKS_REQUEST
    }
}

export const fetchUserFailure = (payload) => {
    return {
        type: ACTION_TYPES.FETCH_BOOKS_FAILURE,
        payload
    }
}

export const fetchUserSuccess = (payload) => {
    return {
        type: ACTION_TYPES.FETCH_BOOKS_SUCCESS,
        payload
    }
}
//TODO: instalar redux-thunk e finalizar o redux para integração com o back
//Redux thunk