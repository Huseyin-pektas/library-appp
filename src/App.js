
import React, { useEffect, useState } from "react";
import actionTypes from "./redux/actions/actionTypes";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import axios from "axios";
import api from "./api/api";
import url from "./api/url";
import Loading from "./component/Loading";
import Error from "./component/Error";


function App() {
  /* const booksState=useSelector(state=>state.booksState)
  const categoriesState=useSelector(state => state.categoriesState) */
  const { booksState, categoriesState } = useSelector( (state) => state  );

  const dispatch = useDispatch();

  useEffect(() => {
    /* get books */
    dispatch({ type: actionTypes.bookActions.GET_BOOKS_START });
    api
      .get(url.books)
      .then((res) => {
        setTimeout(() => {
          dispatch({
            type:actionTypes.bookActions.GET_BOOKS_SUCCESS,
            payload: res.data,
          });
        }, 2000);
      })
      .catch((err) => {
        dispatch({
          type: actionTypes.bookActions.GET_BOOKS_FAIL,
          payload: "Kitapları çekme işlemi esnasında bir hata oluştu",
        });
      });
    /* get categories */
    dispatch({ type: actionTypes.categoryActions.GET_CATEGORIES_START });
    api
      .get(url.categories)
      .then((res) => {
        setTimeout(() => {
          dispatch({
            type: actionTypes.categoryActions.GET_CATEGORIES_SUCCESS,
            payload: res.data,
          });
        }, 2000);
      })
      .catch((err) => {
        dispatch({
          type: actionTypes.categoryActions.GET_CATEGORIES_FAIL,
          payload: "Kategori bilgilerini çekerken bir hata oluştu.",
        });
      });
  }, []);
  if(booksState.pending === true  || categoriesState.pending === true ) return <Loading/>
  if(booksState.err === true  || categoriesState.err === true ) return <Error/>

    return (
    <div className="App">
      <BrowserRouter>
        <Routes>

          <Route
            path="/" element={<Home />}>
          </Route>


          <Route
            path="*" element={<NotFound />}>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
