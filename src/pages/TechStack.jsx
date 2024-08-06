import { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import useSound from 'use-sound';
import hoverSound from '../../public/assets/pop.mp3';


import techStackData from '../../public/assets/techStackData.json';

const TechStack = ({ containerId }) => {
  const [isButtonHovered, setIsButtonHovered] = useState(false);
  const [play] = useSound(hoverSound, { volume: 0.8 });

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const element = document.querySelector(".box");
    gsap.set(element, { transformPerspective: 500 });
    gsap.to(".box", {
      duration: 4,
      rotationX: -20,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".container-tech",
        scroller: "body",
        scrub: 4,
        start: "top center",
      },
    });
  }, []);

  const techStackItemsCss = "tech-stack-item-img w-12 hover:scale-125 md:w-20 lg:w-24";

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
    <div
      className="container-tech h-[calc(100vh)] flex flex-col justify-center items-center relative z-1 overflow-hidden bg-[#46285a]"
      id={containerId}
    >
    
      <div className="pattern2 absolute top-0 left-0 right-0 h-full w-full bg-[url('../public/assets/pattern2.png')] z-[1] backdrop-blur bg-fixed bg-center bg-norepeat- bg-cover"></div>
     
      <div className="mask absolute top-0 left-0 h-full w-full bg-[rgba(0,0,0,0.6)] z-[2] "></div>
      <div
        className="box bg-[#000] border-[#46285a] shadow-[0px_0px_50px_-30px_rgba(255,255,255,.6)] p-8 grid gap-4 grid-cols-3 grid-rows-2 rounded-lg z-[5] md:grid-rows-1 md:grid-cols-4 lg:grid-cols-5"
        style={{
          perspective: "500px",
          transform: "rotateX(20deg)",
        }}
      >
        {techStackData.map((item, index) => (
          <div className="item flex justify-center items-center border border-white rounded-md p-2 bg-purple-200" key={index}>
            <img
              src={item.src}
              className={techStackItemsCss}
              alt={item.alt}
              onMouseEnter={handleHover}
              onMouseLeave={handleMouseLeave}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

TechStack.propTypes = {
  containerId: PropTypes.string.isRequired,
};

export default TechStack;
