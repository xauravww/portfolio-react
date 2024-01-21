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

const TechStack = ({ containerId }) => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const element = document.querySelector(".box")
    gsap.set(element, { transformPerspective: 500 })
    // Set up the scroll animation
    gsap.to(".box", {
      duration: 4,
      rotationX: -20,
      scrollTrigger: {
        trigger: ".container-tech",
        scroller: "body",
        scrub: 2,
        start: "top center"
        // markers: true
      }
    })
  }, [])

  return (
    <>
      <div className="container-tech utility" id={containerId}>
        <div className="pattern"></div>
        <div className="mask"></div>
        <div className="box">
          <div className="mask2"></div>
          {Array.from(document.querySelectorAll(".item-text")).forEach((el) =>
            el.remove()
          )}
          <div className="item">
            <img src={one} alt="" />
          </div>
          <div className="item">
            <img src={two} alt="" />
          </div>
          <div className="item">
            <img src={three} alt="" />
          </div>
          <div className="item">
            <img src={four} alt="" />
          </div>

          <div className="item">
            <img src={five} alt="" />
          </div>
          <div className="item">
            <img src={six} alt="" />
          </div>
          <div className="item">
            <img src={seven} alt="" />
          </div>
          <div className="item">
            <img src={eight} alt="" />
          </div>
          <div className="item">
            <img src={nine} alt="" />
          </div>
          <div className="item">
            <img src={ten} alt="" />
          </div>
        </div>
      </div>
    </>
  )
}

export default TechStack
