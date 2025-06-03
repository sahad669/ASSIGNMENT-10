import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from './Pages/Productlist';
import Navbar from './Components/Navbar';
import './App.css'
const App = () => {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home/>}/>
    </Routes>
    </> 
  )
}

export default App