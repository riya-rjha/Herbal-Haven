/* eslint-disable no-unused-vars */
import { useState } from 'react'

import './App.css'
import Plant from './pages/plant'
import { BrowserRouter, Route, Routes, useNavigate} from 'react-router-dom'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import Navbar from './components/Navbar'
import Chat from './components/Chat'



function App() {
  return (
    <>
    <Navbar/>
    <Chat />
    </>
  )
}

export default App
