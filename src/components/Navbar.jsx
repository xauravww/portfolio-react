import  { useState } from "react"
// import { Link } from "react-router-dom"
// import { HashLink as Link } from "react-router-hash-link"
import { Link} from "react-scroll"
// import "./style.css"
// import saurav from "../assets/saurav_professional.webp"
import hamburger from "../../public/assets/arrow_down.png"
const Navbar = () => {
  const [HamburgerActive, setHamburgerActive] = useState(false)
  const navItemAfterHoverCSS =
    "after:absolute after:bg-[#fff] after:content-[''] after:h-1 after:w-0 after:left-0 after:bottom-[-10px] hover:after:w-full after:transition-all after:duration-300 after:ease-in-out"
  return (
    <div className="nav-container  relative">
      {HamburgerActive && (
        <div className="nav-overlay absolute  top-0  w-full   bg-black  z-50 flex flex-col items-center py-16 text-3xl  md:hidden">
          <div className="overlay-item text-white">
            <Link
              activeClass="active"
              to="section1"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              onClick={() => setHamburgerActive(false)}
            >
              Home
            </Link>
          </div>
          <div className="overlay-item text-white ">
            <Link
              activeClass="active"
              to="section2"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              onClick={() => setHamburgerActive(false)}
            >
              TechStack
            </Link>
          </div>
          <div className="overlay-item text-white ">
            <Link
              activeClass="active"
              to="section3"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              onClick={() => setHamburgerActive(false)}
            >
              Project
            </Link>
          </div>
          <div className="overlay-item text-white ">
            <Link
              activeClass="active"
              to="section4"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              onClick={() => setHamburgerActive(false)}
            >
              About
            </Link>
          </div>
        </div>
      )}
      <div className="navbar px-8  py-2 h-[4rem]   flex justify-center items-center bg-[rgb(71,36,95)] w-full ">
      {/* commented out navbar logo img*/}
        {/* <div className="circle h-[3.5em] w-[3.5em] border-2 border-white rounded-full relative md:h-[3.9em] md:w-[3.9em]">
          <img
            className="nav-img w-full h-full object-cover rounded-full"
            src={saurav}
            alt=""
            draggable="false"
          />
        </div> */}
        <ul className="nav-items hidden md:flex gap-4 text-white px-4 py-2 cursor-pointer relative text-xl md:text-2xl ">
          <li className={`li-item relative ${navItemAfterHoverCSS}`}>
            <Link
              activeClass="active"
              to="section1"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              Home
            </Link>
          </li>
          <li className={`li-item relative ${navItemAfterHoverCSS}`}>
            <Link
              activeClass="active"
              to="section2"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              TechStack
            </Link>
          </li>
          <li className={`li-item relative ${navItemAfterHoverCSS}`}>
            <Link
              activeClass="active"
              to="section3"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              Project
            </Link>
          </li>
          <li className={`li-item relative ${navItemAfterHoverCSS}`}>
            <Link
              activeClass="active"
              to="section4"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              About
            </Link>
          </li>
        </ul>
        <img
          className="hamburger cursor-pointer w-10 h-10 md:hidden "
          src={hamburger}
          alt=""
          style={{
            filter:
              "invert(100%) sepia(0%) saturate(1%) hue-rotate(51deg) brightness(103%) contrast(101%)"
          }}
          onClick={() => setHamburgerActive(!HamburgerActive)}
        />
      </div>
    </div>
  )
}

export default Navbar
