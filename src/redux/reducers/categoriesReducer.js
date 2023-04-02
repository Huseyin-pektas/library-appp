import actionType from "../actions/actionTypes";

const initialState = {
    panding: false,
    success: false,
    categories: [],
    error: false,
    errorMessage: ""
}


const categorieesReducer = (state = initialState, action) => {
    switch (actionType) {
        case actionType.categoriesActions.GET_CATEGORİES_START:
            return {
                ...state,
                pending: true,
            };
        case actionType.categoriesActions.GET_CATEGORİES_SUCCESS:
            return {
                ...state,
                pending: false,
                success: true,
                error: false,
                categoriees: action.payload

            };
        case actionType.categoriesActions.GET_CATEGORİES_FAIL:
            return {
                ...state,
                pending: false,
                success: false,
                error: true,
                categoriees: action.payload

            };

        default:
            return state
    }
}

export default categorieesReducer