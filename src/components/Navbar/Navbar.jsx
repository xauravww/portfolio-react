import React from "react"
import "./style.css"
import saurav from "../../assets/saurav_professional.png"
const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <img src={saurav} alt="" />
        <ul className="nav-items">
          <a href="" className="li-item">
            <li>Home</li>
          </a>
          <a href="" className="li-item">
            <li>About</li>
          </a>
          <a href="" className="li-item">
            <li>Contact</li>
          </a>
        </ul>
      </div>
    </>
  )
}

export default Navbar
