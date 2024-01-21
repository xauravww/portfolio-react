import React, { useEffect } from "react"
import "./style.css"
import X from "../../assets/X.jpeg"
import Linkedin from "../../assets/linkedin.png"
import Showwcase from "../../assets/showwcase.png"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/all"

const Home = ({ containerId }) => {
  useEffect(() => {
    gsap.from(".container .title-desc", {
      duration: 1,
      x: -100,
      opacity: 0,
      ease: "power2.out"
    })

    gsap.to(".container .title-desc", {
      duration: 1,
      x: 0,
      opacity: 1,
      ease: "power2.in",
      scrollTrigger: {
        trigger: ".container",
        start: "top center"
      }
    })
  }, [])
  return (
    <div className="container" id={containerId}>
      <div className="mask"></div>
      <div className="pattern"></div>
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
        A <span>FullStack Web Developer</span> building the Websites and{" "}
        <span>Web Applications</span> that leads to the success of the overall
        product
      </p>
      {/* <button className="btn item">PROJECTS</button> */}
    </div>
  )
}

export default Home
