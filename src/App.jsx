// App.js
import React, { useEffect, useRef } from "react"
import { Route, Routes, useLocation } from "react-router-dom"
import { HashLink as Link } from "react-router-hash-link"
import Navbar from "./components/Navbar/Navbar"
import Home from "./components/Home/Home"
import TechStack from "./components/TechStack/TechStack"
import ProjectOverview from "./components/ProjectOverview/ProjectOverview"

const App = () => {
  return (
    <div>
      <Navbar />
      <Home containerId="section1" />
      <TechStack containerId="section2" />
      <ProjectOverview containerId="section3" />
    </div>
  )
}

export default App
