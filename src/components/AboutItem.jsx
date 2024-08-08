import React from "react";

const AboutItem = ({ class: classNameSchool, school, time, marks }) => {
  return (
    <>
      <div className="flex flex-col justify-start items-start">
        <div className="text-2xl lg:text-4xl mb-4">{school}</div>
        <div className="flex items-center bg-[#f3d800] text-2xl text-black rounded-md py-1 px-4 mb-2">{classNameSchool}</div>
        <div className="text-xl lg:text-2xl text-white-700 mb-2">{time}</div>
        <div className="text-xl lg:text-2xl mb-4">{marks}</div>
      </div>
    </>
  );
};

export default AboutItem;
