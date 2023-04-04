import { act } from "@testing-library/react";
import actionType from "../actions/actionTypes";


const initialState ={
    pending:true,
    success:false,
    books:[],
    error:false,
    errorMessage:""
};
const booksReducer = (state =initialState,action)=>{
switch (actionType) {
    case actionType.bookActions.GET_BOOXS_START:
        
        return{
            ...state,
            panding:true
        };
 case actionType.bookActions.GET_BOOXS_SUCCESS:
    return{
        ...state,
        panding:false,
        success:true,
        error:false,
        books:action.payload

    };

    case actionType.bookActions.GET_BOOXS_FAIL:
        return{
            ...state,
        panding:false,
        success:false,
        error:true,
        errorMessage:action.payload
        };

    default:
       return state
}
}
export default booksReducer
