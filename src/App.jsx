// App.js


import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import TechStack from "./pages/TechStack"
import ProjectOverview from "./pages/ProjectOverview"
// import "./App.css"

import About from "./pages/About"

const App = () => {
  return (
    <div className="App  bg-position-center relative ">
      <Navbar />
      <Home containerId="section1" />
      <TechStack containerId="section2" />
      <ProjectOverview containerId="section3" />
      <About containerId="section4" />

      {/* <ProjectItem /> */}
    </div>
  )
}

export default App
