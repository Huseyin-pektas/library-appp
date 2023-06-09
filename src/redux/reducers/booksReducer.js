import actionTypes from "../actions/actionTypes";


const initialState = {
    pending: true,
    success: false,
    books: [],
    error: false,
    errorMessage: "",
  };
  const booksReducer = (state = initialState, action) => {
    switch (action.type) {
      case actionTypes.bookActions.GET_BOOKS_START:
        return {
          ...state,
          pending: true,
        };
      case actionTypes.bookActions.GET_BOOKS_SUCCESS:
        return {
          ...state,
          pending: false,
          success: true,
          error: false,
          books: action.payload,
        };
      case actionTypes.bookActions.GET_BOOKS_FAIL:
        return {
          ...state,
          pending: false,
          success: false,
          error: true,
          errorMessage: action.payload,
        };

    default:
       return state
}
}
export default booksReducer
