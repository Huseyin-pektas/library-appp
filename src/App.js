
import React, { useEffect, useState } from "react";
import actionType from "./redux/actions/actionTypes";
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
  const dispatch= useDispatch();

  // const allSelector=useSelector(state=>state)
  // const bookState=useSelector(state=>state.bookState)
  // const categoriesState=useSelector(state=>state.categoriesState)
  const { categoriesState, bookState } = useSelector(state => state)

 
  useEffect(() => {
    dispatch ({type:actionType.bookActions.GET_BOOXS_START});
    // axios.get("http://localhost:3004")
    // axios ile aynı işi yapıyor.
    api.get(url.books)
      .then(res => {dispatch( {type:actionType.bookActions.GET_BOOXS_SUCCESS ,
        payload :res.data}) })

      .catch(err => {dispatch( {type:actionType.bookActions.GET_BOOXS_FAIL ,
        payload :"Kitaplar çekilirken bir hata oluştu"})
        })

        dispatch ({type:actionType.categoriesActions.GET_CATEGORİES_START});
       
        api.get(url.categories)
          .then(res => {dispatch( {type:actionType.categoriesActions.GET_CATEGORİES_SUCCESS,
            payload :res.data}) })
          .catch(err => {dispatch( {type:actionType.categoriesActions.GET_CATEGORİES_FAIL ,
            payload :"Kategori bilgileri çekilirken bir hata oluştu",})
            })
  }, [])

  // if(bookState.pending===true || categoriesState.console.pending===true)
  //   return <Loading/>
    // if(bookState.error===true || categoriesState.console.error===true)
    // return <Error/>
  
  

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
