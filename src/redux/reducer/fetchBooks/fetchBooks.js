//https://www.googleapis.com/books/v1/volumes?q=harrypotter
//Actions types
export const ACTION_TYPES = {
  FETCH_BOOKS_REQUEST: "FETCH_BOOKS_REQUEST",
  FETCH_BOOKS_SUCCESS: "FETCH_BOOKS_SUCCESS",
  FETCH_BOOKS_FAILURE: "FETCH_BOOKS_FAILURE",
  FETCH_BOOKS_CLEAR: "FETCH_BOOKS_CLEAR",
};

const initialState = {
  data: [],
  loading: false,
  error: null,
};

export const reducerBooks = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.FETCH_BOOKS_FAILURE:
      return { ...state, loading: false, error: action.payload };
    case ACTION_TYPES.FETCH_BOOKS_REQUEST:
      return { ...state, error: null, loading: true };
    case ACTION_TYPES.FETCH_BOOKS_SUCCESS:
      return { ...state, loading: false, error: null, data: action.payload };
    case ACTION_TYPES.FETCH_BOOKS_CLEAR:
      return {...state, loading: false, error: null}
    default:
      return state;
  }
};

//Actions creators
export const fetchUserRequest = () => {
  return {
    type: ACTION_TYPES.FETCH_BOOKS_REQUEST,
  };
};

export const fetchUserFailure = (payload) => {
  return {
    type: ACTION_TYPES.FETCH_BOOKS_FAILURE,
    payload,
  };
};

export const fetchUserSuccess = (payload) => {
  return {
    type: ACTION_TYPES.FETCH_BOOKS_SUCCESS,
    payload,
  };
};

export const fetchUserClear =() => {
  return {
    type: ACTION_TYPES.FETCH_BOOKS_CLEAR,
  }
}
//Redux thunk
export const fetchData = (book) => {
  return async (dispatch) => {
    dispatch(fetchUserRequest());
    try {
      const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${book}`
      );
      const data = await response.json();

      dispatch(fetchUserSuccess(data.items));
    } catch (error) {
      dispatch(fetchUserFailure(error.message));
    }
  };
};