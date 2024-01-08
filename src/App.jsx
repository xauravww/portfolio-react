// App.js
import React from "react"

import Navbar from "./components/Navbar/Navbar"
import Home from "./pages/Home/Home"
import TechStack from "./pages/TechStack/TechStack"
import ProjectOverview from "./pages/ProjectOverview/ProjectOverview"

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
