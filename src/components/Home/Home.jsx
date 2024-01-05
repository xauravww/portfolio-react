import React from "react"
import "./style.css"
import X from "../../assets/X.jpeg"
import Linkedin from "../../assets/linkedin.png"
import Showwcase from "../../assets/showwcase.png"
const Home = () => {
  return (
    <div className="container">
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
        A Frontend focused Web Developer building the Frontend of Websites and
        Web Applications that leads to the success of the overall product
      </p>
      <button className="btn item">PROJECTS</button>
    </div>
  )
}

export default Home
