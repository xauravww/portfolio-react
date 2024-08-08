import React, { useState, useEffect, useRef } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import hamburger from "/assets/arrow_down.png";
import { navbarContext } from "../context/navbarContext";

const Navbar = () => {
  const { navbarToggleState, setNavbarToggleState } = React.useContext(navbarContext);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const navOverlayRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setIsNavbarVisible(prevScrollPos > currentScrollPos);
      setPrevScrollPos(currentScrollPos);
    };

    const handleClickOutside = (event) => {
      if (navOverlayRef.current && !navOverlayRef.current.contains(event.target)) {
        setNavbarToggleState(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousedown", handleClickOutside);
    };
  }, [prevScrollPos, setNavbarToggleState]);

  return (
    <div
      className={`sticky nav-container bg-gradient-to-r from-[#2a1836] to-[#150c1b] z-[50] relative transition-opacity duration-300 ${isNavbarVisible ? 'opacity-100' : 'opacity-0'}`}
    >
      {navbarToggleState && (
        <div
          ref={navOverlayRef}
          className="fixed nav-overlay top-0 w-full bg-[#000] border-[#46285a] shadow-[0px_0px_50px_-30px_rgba(255,255,255,.6)] z-50 flex flex-col items-center py-16 text-3xl md:hidden transition-transform duration-300 transform translate-x-0"
        >
          <button
            className="absolute top-4 right-4 text-white text-2xl"
            onClick={() => setNavbarToggleState(false)}
          >
            &times;
          </button>
          {["Home", "TechStack", "Projects", "Blogs", "Education", "Contact"].map((section, index) => (
            <div key={section} className="overlay-item text-white">
              <Link
                activeClass="active"
                to={`section${index + 1}`}
                spy={true}
                smooth={true}
                offset={index === 0 ? -100 : 0}
                duration={500}
                onClick={() => setNavbarToggleState(false)}
              >
                {section}
              </Link>
            </div>
          ))}
        </div>
      )}
      <div className="fixed top-0 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-[#2a1836] to-[#150c1b] z-[12] navbar px-8 py-2 h-[4rem] max-w-fit flex justify-center items-center">
        <ul className="nav-items hidden md:flex gap-4 text-white px-4 py-2 cursor-pointer text-xl md:text-3xl">
          {["Home", "TechStack", "Projects", "Blogs", "Education", "Contact"].map((section, index) => (
            <li key={section} className="li-item relative after:absolute after:bg-[#fff] after:content-[''] after:h-1 after:w-0 after:left-0 after:bottom-[-10px] hover:after:w-full after:transition-all after:duration-300 after:ease-in-out">
              <Link
                activeClass="active"
                to={`section${index + 1}`}
                spy={true}
                smooth={true}
                offset={index === 0 ? -100 : 0}
                duration={500}
              >
                {section}
              </Link>
            </li>
          ))}
        </ul>
        <img
          className="hamburger cursor-pointer w-10 h-10 md:hidden"
          src={hamburger}
          alt="Menu"
          style={{
            filter: "invert(100%) sepia(0%) saturate(1%) hue-rotate(51deg) brightness(103%) contrast(101%)",
          }}
          onClick={() => setNavbarToggleState(!navbarToggleState)}
        />
      </div>
      <img
        src="/assets/arrow-up.svg"
        className="h-10 w-10 fixed bottom-10 right-10 z-[15] border-4 border-[#f3d800] rounded-full"
        onClick={() => scroll.scrollToTop()}
        alt="Scroll to top"
      />
    </div>
  );
};

export default Navbar;
