// App.js


import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import TechStack from "./pages/TechStack"
import ProjectOverview from "./pages/ProjectOverview"
import Blogs from "./pages/Blogs"
// import "./App.css"

import Education from "./pages/Education"
import ContactMe from "./pages/ContactMe.jsx"
import NavbarContextFunction from "./context/navbarContext.jsx"

const App = () => {
  return (
    <div className="App  bg-position-center relative ">
    <NavbarContextFunction>

    
    <Navbar />
      <Home containerId="section1" />
      <TechStack containerId="section2" />
      <ProjectOverview containerId="section3" />
      <Blogs containerId="section4" />
      <Education containerId="section5" />
      <ContactMe containerId="section6" />
</NavbarContextFunction>
      {/* <ProjectItem /> */}
    </div>
  )
}

export default App
