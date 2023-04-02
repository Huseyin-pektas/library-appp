
import React, { useEffect, useState } from "react";
import actionType from "./redux/actions/actionTypes";
import { useSelector } from "react-redux";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import axios from "axios";
import api from "./api/api";
import url from "./api/url";

function App() {

  // const allSelector=useSelector(state=>state)
  // const bookState=useSelector(state=>state.bookState)
  // const categoriesState=useSelector(state=>state.categoriesState)
  // const { categoriesState, bookState } = useSelector(state => state)

  // console.log(bookState)
  useEffect(()=>{
    // axios.get("http://localhost:3004")
    // axios ile aynı işi yapıyor.
    api.get(url.books)


  },[])


  return (
    <div className="App">
    <BrowserRouter>
    <Routes>

      <Route path="/" element={<Home/>}>
      </Route>

      <Route path="*" element={<NotFound/>}>
      </Route>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
