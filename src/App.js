
import React, { useState } from "react";
import actionType from "./redux/actions/actionTypes";
import { useSelector } from "react-redux";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

function App() {

  // const allSelector=useSelector(state=>state)
  // const bookState=useSelector(state=>state.bookState)
  // const categoriesState=useSelector(state=>state.categoriesState)
  const { categoriesState, bookState } = useSelector(state => state)

  console.log(bookState)


  return (
    <div className="App">
      <h1>Library App Uygulaması</h1>
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
