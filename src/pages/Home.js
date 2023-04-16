import React from 'react'
import Header from '../component/Header'
import { Link, useNavigate } from "react-router-dom";
import Loading from '../component/Loading';
import ListBooks from '../component/ListBooks';
import Button from '../component/Button';


const Home = () => {
  const navigate = useNavigate()
  return (
    <div>
      <Header />
      <div className=" container my-5">
       <div className=" d-flex justify-content-end"> 
       <Button style={{backgroundColor:"green"}} text='Kitap Ekle' onClick={() => navigate("/add-book")}/></div>
       <ListBooks />
      </div>
     
    </div>
    
  )
}

export default Home
