import { useState, useEffect } from "react";
import AboutItem from "../components/AboutItem";
import DATA from "../utils/itemdata";


function About({ containerId }) {
  const [classArray, setclassArray] = useState([]);
  const [showItem, setshowItem] = useState([]);

  useEffect(() => {
    const uniqueClasses = [...new Set(DATA.map((data) => data.class))];
    setclassArray(uniqueClasses.reverse());
    setshowItem(uniqueClasses[0]);
  }, []);

  const handleClick = (e) => {
    setshowItem(e.target.innerText);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#46285a] relative" id={containerId}>
       <div className="pattern absolute top-0 left-0 h-full w-full   bg-[url('../public/assets/pattern2.png')] z-[1] backdrop-blur bg-cover bg-position-center"></div>
        <div className="mask absolute top-0 left-0 h-full w-full   bg-[rgba(0,0,0,0.6)] z-[2]"></div>
      <header className="text-5xl text-white font-bold relative z-[3]" >
        Education
        <div className="underline-below-header absolute w-3/5 h-1 bg-white bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
      </header>
      <div className="mt-16 text-white grid grid-cols-2 w-full z-[3]">
        <div className="m-4">
          {classArray.map((item) => (
            <div
              key={item}
              className={`py-4 px-12 text-4xl font-bold mt-4 ${showItem === item ? "border-l-4 border-white" : ""}`}
              onClick={handleClick}
            >
              {item}
            </div>
          ))}
        </div>
        <div className="flex flex-col justify-start mt-7">
          {showItem &&
            DATA.filter((data) => data.class === showItem).map((data) => (
              <AboutItem
                key={data.id}
                class={data.class}
                school={data.school}
                time={data.time}
                marks={data.marks}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default About;
