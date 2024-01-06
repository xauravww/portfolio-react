import React, { useEffect } from "react"
import "./style.css"

import { gsap } from "gsap"

import { ScrollTrigger } from "gsap/ScrollTrigger"

import one from "../../assets/techstack/1.png"
import two from "../../assets/techstack/2.png"
import three from "../../assets/techstack/3.png"
import four from "../../assets/techstack/4.png"
import five from "../../assets/techstack/5.png"
import six from "../../assets/techstack/6.png"
import seven from "../../assets/techstack/7.png"
import eight from "../../assets/techstack/8.png"
import nine from "../../assets/techstack/9.png"
import ten from "../../assets/techstack/10.png"

const TechStack = ({containerId}) => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const element = document.querySelector(".box")
    gsap.set(element, { transformPerspective: 500 })
    // Set up the scroll animation
    gsap.to(".box", {
      scrollTrigger: ".container-tech",
      duration: 1.3,
      rotationX: 0
    })
  }, [])
  return (
    <>
      <div className="container-tech" id={containerId}>
        <div className="pattern"></div>
        <div className="box">
          <div className="item">
            <img src={one} alt="" />
            HTML CSS
          </div>
          <div className="item">
            <img src={two} alt="" />
            JavaScript
          </div>
          <div className="item">
            <img src={three} alt="" />
            ReactJs
          </div>
          <div className="item">
            <img src={four} alt="" />
            Kotlin
          </div>

          <div className="item">
            <img src={five} alt="" />
            MongoDB
          </div>
          <div className="item">
            <img src={six} alt="" />
            NodeJs
          </div>
          <div className="item">
            <img src={seven} alt="" />
            NodeJs
          </div>
          <div className="item">
            <img src={eight} alt="" />
            C++
          </div>
          <div className="item">
            <img src={nine} alt="" />
            Android
          </div>
          <div className="item">
            <img src={ten} alt="" />
            XML
          </div>
        </div>
      </div>
    </>
  )
}

export default TechStack
