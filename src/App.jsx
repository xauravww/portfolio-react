// App.js
import React from "react"

import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import TechStack from "./pages/TechStack"
import ProjectOverview from "./pages/ProjectOverview"
// import "./App.css"
import ProjectItem from "./components/ProjectItem"
const App = () => {
  return (
    <div className="App  bg-position-center relative ">
      <Navbar />
      <Home containerId="section1" />
      <TechStack containerId="section2" />
      <ProjectOverview containerId="section3" />
      {/* <ProjectItem /> */}
    </div>
  )
}

export default App
