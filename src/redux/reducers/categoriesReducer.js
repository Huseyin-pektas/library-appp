import actionTypes from "../actions/actionTypes";
import React from "react";

const initialState = {
    panding: true,
    success: false,
    categories: [],
    error: false,
    errorMessage: ""
}


const categoriesReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.categoryActions.GET_CATEGORIES_START:
            return {
                ...state,
                pending: true,
            };
        case actionTypes.categoryActions.GET_CATEGORIES_SUCCESS:
            return {
                ...state,
                pending: false,
                success: true,
                error: false,
                categories: action.payload

            };
        case actionTypes.categoryActions.GET_CATEGORIES_FAIL:
            return {
                ...state,
                pending: false,
                success: false,
                error: true,
                categories: action.payload

            };

        default:
            return state
    }
}

export default categoriesReducer