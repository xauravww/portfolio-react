import React from "react"

const AboutItem = ({ class: classNameSchool, school, time, marks }) => {
  return (
    <>
      <div className="info-wrapper">
        <div className="school-name">{school}</div>
        <div className="class-name-wrapper">
          <div className="class-name">{classNameSchool}</div>
        </div>
        <div className="time">{time}</div>
        <div className="marks">{marks}</div>
      </div>
    </>
  )
}

export default AboutItem