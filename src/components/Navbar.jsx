import React, { useState, useEffect, useRef } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import hamburger from "/assets/arrow_down.png";
import { navbarContext } from "../context/navbarContext";
import { gsap } from "gsap";

const Navbar = () => {
  const { navbarToggleState, setNavbarToggleState } = React.useContext(navbarContext);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const navOverlayRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setIsNavbarVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    const handleClickOutside = (event) => {
      const hamburgerButton = document.querySelector('.hamburger');
      if (
        navOverlayRef.current &&
        !navOverlayRef.current.contains(event.target) &&
        hamburgerButton &&
        !hamburgerButton.contains(event.target)
      ) {
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

  useEffect(() => {
    if (navbarToggleState) {
      gsap.fromTo(".overlay-item",
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.3, stagger: 0.07, ease: "power2.out" }
      );
    } else {
      gsap.set(".overlay-item", { opacity: 0 });
    }
  }, [navbarToggleState]);

  return (
    <div
      className={` sticky nav-container bg-[var(--bg-dark)] z-[50] relative transition-opacity duration-300 ${isNavbarVisible ? 'opacity-100' : 'opacity-0'}`}
    >
      {/* Mobile Overlay */}
      <div
        ref={navOverlayRef}
        className={`fixed nav-overlay inset-0 bg-[var(--bg-dark)]/90 backdrop-blur-lg z-50 flex flex-col items-center justify-center transition-opacity duration-300 md:hidden ${
          navbarToggleState ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <button
          className="absolute top-5 right-5 text-[var(--text-light)] text-3xl"
          onClick={() => setNavbarToggleState(false)}
          aria-label="Close menu"
        >
          &times;
        </button>
        <ul className="flex flex-col items-center w-full px-8">
          {["Home", "TechStack", "Projects", "Experience", "Blogs", "Education", "Contact"].map((section, index) => (
            <li key={section} className="overlay-item w-full text-center opacity-0">
              <Link
                activeClass="active-mobile-link"
                to={`section${index + 1}`}
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                onClick={() => setNavbarToggleState(false)}
                className="block py-4 text-2xl text-[var(--text-light)] hover:text-[var(--accent-blue)] transition-colors duration-200"
              >
                {section}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Desktop Navbar (Add blur and transparent background) */}
      <div className="fixed top-5 rounded-full left-1/2 transform -translate-x-1/2 bg-[var(--bg-dark)]/80 backdrop-blur-md border border-[var(--border-color)] z-[12] navbar px-8 py-2 h-[4rem] max-w-fit flex justify-center items-center">
        <ul className="nav-items hidden md:flex gap-4 text-white px-4 py-2 cursor-pointer text-xl md:text-3xl">
          {["Home", "TechStack", "Projects", "Experience", "Blogs", "Education", "Contact"].map((section, index) => (
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
        <button
          className="hamburger cursor-pointer w-8 h-8 md:hidden text-[var(--text-light)]"
          onClick={() => setNavbarToggleState(!navbarToggleState)}
          aria-label="Toggle menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-full w-full" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      <img
        src="/assets/arrow-up.svg"
        className="h-10 w-10 fixed bottom-10 right-10 z-[15] border-4 border-[var(--accent-blue)] rounded-full"
        onClick={() => scroll.scrollToTop()}
        alt="Scroll to top"
      />
    </div>
  );
};

export default Navbar;
