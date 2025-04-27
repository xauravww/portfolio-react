import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import PropTypes from 'prop-types';
import { Link as ScrollLink } from "react-scroll";
import Typewriter from "typewriter-effect";

const Home = ({ containerId }) => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(".home-content-block",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".container-home",
          start: "top 70%",
        }
      }
    );
  }, []);

  return (
    <div
      className="container-home bg-gradient-to-r from-[#2a1836] to-[#150c1b] min-h-screen flex flex-col justify-center items-center relative z-1 py-16 md:py-24 overflow-hidden"
      id={containerId}
    >
      <div className="mask absolute top-0 left-0 h-full w-full bg-[rgba(0,0,0,0.6)] z-[2]"></div>
      <div className="pattern2 absolute top-0 left-0 right-0 h-full w-full bg-[url('/assets/pattern2.png')] z-[1] backdrop-blur bg-fixed bg-center bg-norepeat- bg-cover"></div>

      <div className="home-content-block flex flex-col items-center justify-center text-center z-[3] px-4 opacity-0">
        <p className="text-xl md:text-2xl lg:text-3xl font-medium text-[var(--text-medium)] mb-2">
          Hey, I&apos;m
        </p>
        <h1 className="font-['Cyborg'] text-6xl md:text-8xl lg:text-9xl font-bold text-[var(--text-light)] mb-4 md:mb-6">
          Saurav Maheshwari
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl text-[var(--text-medium)] max-w-xl md:max-w-2xl mb-8 md:mb-10">
          Turning ideas into interactive experiences where{" "}
          <span className="text-[#f3d800] font-semibold">
            <Typewriter
              options={{
                strings: ['innovation meets interaction'],
                autoStart: true,
                loop: false,
                delay: 75,
                deleteSpeed: Infinity,
                cursor: "|",
              }}
            />
          </span>
        </p>

        <ScrollLink
          to="section3"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          className="cta-button inline-block bg-[#f3d800] text-black font-semibold py-3 px-6 rounded-md text-lg md:text-xl hover:opacity-90 transition-opacity cursor-pointer"
        >
          View My Work
        </ScrollLink>
      </div>
    </div>
  );
};

Home.propTypes = {
    containerId: PropTypes.string.isRequired,
};

export default Home;
