/* eslint-disable no-unused-vars */
// import React from 'react'

import { useNavigate } from "react-router-dom";
import Card from "../components/Card";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <>
      <div className="bg-dark-blue">
        <div className="flex justify-evenly gap-5 md:gap-5 p-5  flex-wrap">
          <Card titles={"TITLE"} />
          <Card titles={"TITLE"} />
          <Card titles={"TITLE"} />
          <Card titles={"TITLE"} />
          <Card titles={"TITLE"} />
          <Card titles={"TITLE"} />
        </div>
        {/* <div className="flex space-x-6">
    <Card titles={"TITLE"}/>
    <Card titles={"TITLE"}/>
    <Card titles={"TITLE"}/>
    </div> */}
      </div>
    </>
  );
}

export default Home;
