// App.js


import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import TechStack from "./pages/TechStack"
import ProjectOverview from "./pages/ProjectOverview"
import Experience from "./pages/Experience"
import Blogs from "./pages/Blogs"
// import "./App.css"

import Education from "./pages/Education"
import ContactMe from "./pages/ContactMe.jsx"
import NavbarContextFunction from "./context/navbarContext.jsx"
import CursorGlow from "./components/CursorGlow"

const App = () => {
  return (
    <div className="App  bg-position-center relative ">
      <CursorGlow />
      <NavbarContextFunction>
        <Navbar />
        <Home containerId="section1" />
        <TechStack containerId="section2" />
        <ProjectOverview containerId="section3" />
        <Experience containerId="section4" />
        <Blogs containerId="section5" />
        <Education containerId="section6" />
        <ContactMe containerId="section7" />
      </NavbarContextFunction>
      {/* <ProjectItem /> */}
    </div>
  )
}

export default App
