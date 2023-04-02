import React from 'react'
import Header from '../component/Header'
import { Link } from "react-router-dom";
import Loading from '../component/Loading';


const Home = () => {
  return (
    <div>
      <Header />
      <Loading/>
    </div>
    
  )
}

export default Home
