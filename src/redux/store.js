import {combineReducers,createStore} from "redux";
import React from "react";
import booksReducer from "./reducers/booksReducer";
import categorieesReducer from "./reducers/categoriesReducer";

const rootReducer=combineReducers({
bookState:booksReducer,
categoriesState:categorieesReducer
})

const store=createStore(rootReducer);


export default store