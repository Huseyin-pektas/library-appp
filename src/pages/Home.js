import React from 'react'
import Header from '../component/Header'
import { Link } from "react-router-dom";
import Loading from '../component/Loading';
import ListBooks from '../component/ListBooks';


const Home = () => {
  return (
    <div>
      <Header />
      <ListBooks />
    </div>
    
  )
}

export default Home
