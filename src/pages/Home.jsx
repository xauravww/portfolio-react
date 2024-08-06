import React, { useEffect } from "react";
import X from "/assets/X.jpeg";
import Linkedin from "/assets/linkedin.png";
import Showwcase from "/assets/showwcase.png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

const Home = ({ containerId }) => {
  useEffect(() => {
    gsap.from(".container-home .title-desc", {
      duration: 1,
      x: -100,
      opacity: 0,
      ease: "power2.out",
    });

    gsap.to(".container-home .title-desc", {
      duration: 1,
      x: 0,
      opacity: 1,
      ease: "power2.in",
      scrollTrigger: {
        trigger: ".container-home",
        start: "top center",
      },
    });
  }, []);

  const sidebarImgCSS = "sidebar-img w-10 hover:scale-125";
  const spanTextCSS = "text-purple-500 font-bold";

  return (
    <div
      className="container-home h-[calc(100vh-4rem)] flex flex-col justify-center items-center relative z-1"
      id={containerId}
    >
      <div className="bg absolute top-0 left-0 h-full w-full bg-[url('/assets/bg.webp')] z-4 bg-cover bg-center"></div>
      <div className="mask absolute top-0 left-0 h-full w-full bg-[rgba(0,0,0,0.7)] z-[2]"></div>
      <div className="pattern2 absolute top-0 left-0 right-0 h-full w-full bg-[url('/assets/pattern2.png')] z-[1] backdrop-blur bg-fixed bg-center bg-norepeat- bg-cover"></div>
      <div className="sidebar-wrapper absolute top-0 left-0 h-full w-1/6 z-50 flex flex-col justify-center items-center lg:w-[6vw]">
        <div className="sidebar flex flex-col justify-center items-center gap-1 border-2 border-black p-1 bg-black-opacity-50 backdrop-blur-sm bg-slate-400/50 rounded-md lg:gap-2 lg:p-2">
          <div onClick={() => window.open("https://x.com/savvyyww", "_blank")}>
            <img className={sidebarImgCSS} src={X} alt="X" />
          </div>
          <div onClick={() => window.open("https://www.linkedin.com/in/itsmesaurav", "_blank")}>
            <img className={sidebarImgCSS} src={Linkedin} alt="LinkedIn" />
          </div>
          <div onClick={() => window.open("https://www.showwcase.com/xauravww", "_blank")}>
            <img className={sidebarImgCSS} src={Showwcase} alt="Showwcase" />
          </div>
        </div>
      </div>
      <h1 className="title item px-2 text-4xl text-center text-slate-300 font-extrabold z-10 md:text-6xl md:px-10 md:py-4 lg:text-7xl w-5/6 md:w-4/6 lg:w-3/6">
        HEY, I'M SAURAV MAHESHWARI
      </h1>
      <p className="title-desc item text-center text-slate-300 my-1 px-10 text-4xl md:my-5 md:text-5xl lg:text-5xl lg:px-40 z-[5] w-5/6">
        Turning <span className={spanTextCSS}>ideas</span> into interactive <span className={spanTextCSS}>experiences</span> where innovation meets interaction
      </p>
      {/* <button className="btn item">PROJECTS</button> */}
    </div>
  );
};

export default Home;
