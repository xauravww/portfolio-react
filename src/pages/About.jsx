import { useState, useEffect } from "react"


import AboutItem from "../components/AboutItem"
import DATA from "../utils/itemdata"
import './AboutItem.css'
function About({ containerId }) {
  const [classArray, setclassArray] = useState([])
  const [showItem, setshowItem] = useState([])
  useEffect(() => {
    const uniqueClasses = [...new Set(DATA.map((data) => data.class))]
    setclassArray(uniqueClasses.reverse())
    // console.log("uniqueClasses", uniqueClasses)
    // console.log("classArray", classArray)
    setshowItem(uniqueClasses[0])
    // console.log("showItem", showItem)
  }, [])

  const handleClick = (e) => {
    // console.log(e.target.innerText)
    setshowItem(e.target.innerText)
  }
  return (
    <div className="About" id={containerId}>
      <header className="header">Education</header>
      <div className="grid-container">
        <div className="btn-wrAbouter">
          {classArray.map((item) => {
            return (
              <div
                key={item}
                className="experience-btn"
                onClick={handleClick}
                style={{
                  borderLeft: showItem === item ? "5px solid black" : "none"
                }}
              >
                {item}
              </div>
            )
          })}
        </div>
        <div className="info-wrAbouter">
          {showItem &&
            DATA.filter((data) => data.class === showItem).map((data) => {
              return (
                <AboutItem
                  key={data.id}
                  class={data.class}
                  school={data.school}
                  time={data.time}
                  marks={data.marks}
                />
              )
            })}
        </div>
      </div>
    </div>
  )
}

export default About