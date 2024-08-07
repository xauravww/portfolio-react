import { useState, useEffect } from "react";
import AboutItem from "../components/AboutItem";
import DATA from "../utils/itemdata";
import PropTypes from 'prop-types';

function Education({ containerId }) {
  const [classArray, setClassArray] = useState([]);
  const [showItem, setShowItem] = useState([]);

  useEffect(() => {
    const uniqueClasses = [...new Set(DATA.map((data) => data.class))];
    setClassArray(uniqueClasses.reverse());
    setShowItem(uniqueClasses[0]);
  }, []);

  const handleClick = (e) => {
    setShowItem(e.target.innerText);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[rgb(70,40,90)] relative" id={containerId}>
      <div className="pattern2 absolute top-0 left-0 right-0 h-full w-full bg-[url('/assets/pattern2.png')] z-[1] backdrop-blur bg-fixed bg-center bg-norepeat- bg-cover"></div>
      <div className="mask absolute top-0 left-0 h-full w-full bg-[rgba(0,0,0,0.6)] z-[2]"></div>
      <header className="text-3xl md:text-5xl text-white font-bold relative z-[3] text-center px-4">
        Education
        <div className="underline-below-header absolute w-3/5 h-1 bg-white bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
      </header>
      <div className="mt-8 md:mt-16 mx-4 md:mx-8 p-4 text-white grid grid-cols-1 md:grid-cols-2 gap-4 z-[3] bg-[#000] border-[#46285a] shadow-[0px_0px_50px_-30px_rgba(255,255,255,.6)]">
        <div className="m-2 md:m-4">
          {classArray.map((item) => (
            <div
              key={item}
              className={`py-2 md:py-4 px-4 md:px-12 text-xl md:text-2xl font-bold mt-2 md:mt-4 cursor-pointer ${showItem === item ? "border-l-4 border-white" : ""}`}
              onClick={handleClick}
            >
              {item}
            </div>
          ))}
        </div>
        <div className="flex flex-col justify-start mt-4 md:mt-7">
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

Education.propTypes = {
  containerId: PropTypes.string.isRequired,
};

export default Education;
