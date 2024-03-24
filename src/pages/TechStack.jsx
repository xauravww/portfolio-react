import React, { useEffect ,useState} from "react"

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
import reactnativeicon from '../../public/assets/react-native.png'
import tailwind from '../../public/assets/tailwind.png'
import postman from '../../public/assets/postman.png'
import useSound from 'use-sound';
import hoverSound from '../../public/assets/pop.mp3'
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
    const soundUrl = hoverSound;
    const [isButtonHovered, setIsButtonHovered] = useState(false);
  
    const [play] = useSound(soundUrl, { volume: 0.8 });
  
    const handleHover = () => {
      if (!isButtonHovered) {
        play();
        setIsButtonHovered(true);
      }
    };
  
    const handleMouseLeave = () => {
      setIsButtonHovered(false);
    };
  return (
    <>
      <div
        className="container-tech h-[calc(100vh)] flex flex-col justify-center items-center relative z-1 overflow-hidden bg-[#46285a]  "
        id={containerId}
      >
        <div className="pattern absolute top-0 left-0 h-full w-full   bg-[url('../public/assets/pattern2.png')] z-[1] backdrop-blur bg-cover bg-position-center"></div>
        <div className="mask absolute top-0 left-0 h-full w-full   bg-[rgba(0,0,0,0.6)] z-[2]"></div>
        <div
          className="box bg-[#000]   border-[#46285a] shadow-[0px_0px_50px_-30px_rgba(255,255,255,.6)] p-8  grid gap-4 grid-cols-3 grid-rows-2 rounded-lg z-[5] md:grid-rows-1 md:grid-cols-4 lg:grid-cols-5"
          style={{
            perspective: "500px",
            transform: "rotateX(20deg)"
          }}
        >
          {/* <div className="mask2"></div> */}
          {Array.from(document.querySelectorAll(".item-text")).forEach((el) =>
            el.remove()
          )}
          <div className="item"  >
            <img src={one} className={techStackItemsCss} alt="" onMouseEnter={handleHover}
        onMouseLeave={handleMouseLeave}/>
          </div>
          <div className="item" >
            <img src={two} className={techStackItemsCss} alt="" onMouseEnter={handleHover}
        onMouseLeave={handleMouseLeave} />
          </div>
          <div className="item"  >
            <img src={three} className={techStackItemsCss} alt="" onMouseEnter={handleHover}
        onMouseLeave={handleMouseLeave} />
          </div>
          <div className="item"  >
            <img src={four} className={techStackItemsCss} alt=""  onMouseEnter={handleHover}
        onMouseLeave={handleMouseLeave}/>
          </div>

          <div className="item"  >
            <img src={five} className={techStackItemsCss} alt=""  onMouseEnter={handleHover}
        onMouseLeave={handleMouseLeave}/>
          </div>
          <div className="item"  >
            <img src={six} className={techStackItemsCss} alt="" onMouseEnter={handleHover}
        onMouseLeave={handleMouseLeave}/>
          </div>
          <div className="item"  >
            <img src={seven} className={techStackItemsCss} style={{filter: "invert(98%) sepia(100%) saturate(0%) hue-rotate(153deg) brightness(101%) contrast(105%)"}} alt="" onMouseEnter={handleHover}
        onMouseLeave={handleMouseLeave} />
          </div>
          <div className="item"  >
            <img src={eight} className={techStackItemsCss} alt="" onMouseEnter={handleHover}
        onMouseLeave={handleMouseLeave} />
          </div>
          <div className="item"  >
            <img src={nine} className={techStackItemsCss} alt="" onMouseEnter={handleHover}
        onMouseLeave={handleMouseLeave} />
          </div>
          <div className="item"  >
            <img src={ten} className={techStackItemsCss} alt="" onMouseEnter={handleHover}
        onMouseLeave={handleMouseLeave} />
          </div>
          <div className="item"  >
            <img src={reactnativeicon} className={techStackItemsCss} alt="" onMouseEnter={handleHover}
        onMouseLeave={handleMouseLeave} />
          </div>
          <div className="item"  >
            <img src={tailwind} className={techStackItemsCss} alt="" onMouseEnter={handleHover}
        onMouseLeave={handleMouseLeave} />
          </div>
          <div className="item"  >
            <img src={postman} className={techStackItemsCss} alt="" onMouseEnter={handleHover}
        onMouseLeave={handleMouseLeave} />
          </div>
        </div>
      </div>
    </>
  )
}

export default TechStack
