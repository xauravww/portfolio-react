import React, { useEffect } from "react"

import { gsap } from "gsap"

import { ScrollTrigger } from "gsap/ScrollTrigger"

import one from "../assets/techstack/1.png"
import two from "../assets/techstack/2.png"
import three from "../assets/techstack/3.png"
import four from "../assets/techstack/4.png"
import five from "../assets/techstack/5.png"
import six from "../assets/techstack/6.png"
import seven from "../assets/techstack/7.png"
import eight from "../assets/techstack/8.png"
import nine from "../assets/techstack/9.png"
import ten from "../assets/techstack/10.png"

const TechStack = ({ containerId }) => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const element = document.querySelector(".box")
    gsap.set(element, { transformPerspective: 500 })
    // Set up the scroll animation
    gsap.to(".box", {
      duration: 4,
      rotationX: -20, // Adjust the rotation angle here
      ease: "power2.out", // Experiment with different easing functions
      scrollTrigger: {
        trigger: ".container-tech",
        scroller: "body",
        scrub: 4,
        start: "top center"
        // markers: true
      }
    })
  }, [])

  const techStackItemsCss =
    "tech-stack-item-img w-12 hover:scale-125 md:w-20 lg:w-24"
  return (
    <>
      <div
        className="container-tech h-[calc(100vh)] flex flex-col justify-center items-center relative z-1 overflow-hidden bg-[#46285a]  "
        id={containerId}
      >
        <div className="pattern absolute top-0 left-0 h-full w-full   bg-[url('../public/assets/pattern2.png')] z-[1] backdrop-blur bg-cover bg-position-center"></div>
        <div className="mask absolute top-0 left-0 h-full w-full   bg-[rgba(0,0,0,0.8)] z-[2]"></div>
        <div
          className="box bg-[#46285a] p-8  grid gap-4 grid-cols-3 grid-rows-2 rounded-lg z-[5] md:grid-rows-1 md:grid-cols-4 lg:grid-cols-5"
          style={{
            perspective: "500px",
            transform: "rotateX(20deg)"
          }}
        >
          {/* <div className="mask2"></div> */}
          {Array.from(document.querySelectorAll(".item-text")).forEach((el) =>
            el.remove()
          )}
          <div className="item">
            <img src={one} className={techStackItemsCss} alt="" />
          </div>
          <div className="item">
            <img src={two} className={techStackItemsCss} alt="" />
          </div>
          <div className="item">
            <img src={three} className={techStackItemsCss} alt="" />
          </div>
          <div className="item">
            <img src={four} className={techStackItemsCss} alt="" />
          </div>

          <div className="item">
            <img src={five} className={techStackItemsCss} alt="" />
          </div>
          <div className="item">
            <img src={six} className={techStackItemsCss} alt="" />
          </div>
          <div className="item">
            <img src={seven} className={techStackItemsCss} alt="" />
          </div>
          <div className="item">
            <img src={eight} className={techStackItemsCss} alt="" />
          </div>
          <div className="item">
            <img src={nine} className={techStackItemsCss} alt="" />
          </div>
          <div className="item">
            <img src={ten} className={techStackItemsCss} alt="" />
          </div>
        </div>
      </div>
    </>
  )
}

export default TechStack
