import React from "react"
import "./style.css"
import X from "../../assets/X.jpeg"
import Linkedin from "../../assets/linkedin.png"
import Showwcase from "../../assets/showwcase.png"

const Home = ({containerId}) => {
  return (
    <div className="container" id={containerId}>
      <div className="mask"></div>
      <div className="sidebar">
        <div>
          <img src={X} alt="" />
        </div>
        <div>
          <img src={Linkedin} alt="" />
        </div>
        <div>
          <img src={Showwcase} alt="" />
        </div>
      </div>
      <h1 className="title item">HEY, I'M SAURAV MAHESHWARI</h1>
      <p className="title-desc item">
        A <span>Frontend</span> focused <span>Web Developer</span> building the
        Frontend of Websites and <span>Web Applications</span> that leads to the
        success of the overall product
      </p>
      <button className="btn item">PROJECTS</button>
    </div>
  )
}

export default Home
