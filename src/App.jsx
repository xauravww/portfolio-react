// App.js
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import TechStack from "./pages/TechStack";
import ProjectOverview from "./pages/ProjectOverview";
import Experience from "./pages/Experience";
import Blogs from "./pages/Blogs";
import Education from "./pages/Education";
import ContactMe from "./pages/ContactMe";
import NavbarContextFunction from "./context/navbarContext";
import CursorGlow from "./components/CursorGlow";
import { gsap } from "gsap";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading assets
    const timer = setTimeout(() => {
      setIsLoading(false);
      
      // Fade out the loader
      gsap.to(".app-loader", {
        opacity: 0,
        duration: 0.5,
        onComplete: () => {
          document.body.classList.remove("loading");
        }
      });
    }, 1500);

    // Add loading class to body to prevent scrolling during load
    document.body.classList.add("loading");

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Loading screen */}
      {isLoading && (
        <div className="app-loader fixed inset-0 bg-[#1A1D24] z-[100] flex items-center justify-center">
          <div className="loader-content flex flex-col items-center">
            <div className="w-16 h-16 border-4 border-[#4A90E2] border-t-transparent rounded-full animate-spin mb-4"></div>
            <p className="text-[#F0F0F0] text-xl">Loading Portfolio...</p>
          </div>
        </div>
      )}

      <div className="App relative min-h-screen">
        <CursorGlow />
        <NavbarContextFunction>
          <Navbar />
          <main>
            <Home containerId="section1" />
            <TechStack containerId="section2" />
            <ProjectOverview containerId="section3" />
            <Experience containerId="section4" />
            <Blogs containerId="section5" />
            <Education containerId="section6" />
            <ContactMe containerId="section7" />
          </main>

        </NavbarContextFunction>
      </div>
    </>
  );
};

export default App;