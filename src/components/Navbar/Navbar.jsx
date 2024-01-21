import React from "react"
// import { Link } from "react-router-dom"
// import { HashLink as Link } from "react-router-hash-link"
import { Link, animateScroll as scroll } from "react-scroll"
import "./style.css"
import saurav from "../../assets/saurav_professional.png"

const Navbar = () => {
  return (
    <>
      <div className="navbar utility">
        <div className="circle">
          <img src={saurav} alt="" />
        </div>
        <ul className="nav-items">
          <li className="li-item">
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
          <li className="li-item">
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
          <li className="li-item">
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
        </ul>
      </div>
    </>
  )
}

export default Navbar
