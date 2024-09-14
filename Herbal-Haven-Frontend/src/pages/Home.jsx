/* eslint-disable no-unused-vars */
// import React from 'react'

import { useNavigate } from "react-router-dom"
import Card from "../components/Card"
import Navbar from "../components/Navbar"


function Home() {
  
  return (
  <>
  <div className="bg-gray-400">
    <div className="flex space-x-6 m-auto">
    <Card titles={"TITLE"}/>
    <Card titles={"TITLE"}/>
    <Card titles={"TITLE"}/>
    </div>
    <div className="flex space-x-6">
    <Card titles={"TITLE"}/>
    <Card titles={"TITLE"}/>
    <Card titles={"TITLE"}/>
    </div>
  </div>

  </>
    
  )
}

export default Home