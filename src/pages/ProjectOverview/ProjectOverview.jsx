import React, { useEffect, useState } from "react"
import "./projectoverview.css"

import { PROJECT_DETAILS, MINI_PROJECT_DETAILS } from "../../utils/data"
import ProjectItem from "../../components/ProjectItem/ProjectItem"

const ProjectOverview = ({ containerId }) => {
  const [isActive, setIsActive] = useState(true)

  const [bgImg, setbgImg] = useState(PROJECT_DETAILS[0].img)
  const [isSearchActive, setisSearchActive] = useState(false)
  return (
    <div className="ProjectOverview" id={containerId}>
      <div className="search-filter-toggle-wrapper">
        {!isSearchActive && (
          <div className="toggle-views-wrapper">
            <button
              className="toggle-btn active"
              onClick={() => setIsActive(!isActive)}
              style={
                isActive
                  ? {
                      backgroundColor: "rgb(243, 216, 0)"
                    }
                  : { backgroundColor: "white" }
              }
            >
              Projects
            </button>
            <button
              className="toggle-btn"
              onClick={() => setIsActive(!isActive)}
              style={
                isActive
                  ? { backgroundColor: "white" }
                  : { backgroundColor: "rgb(243, 216, 0)" }
              }
            >
              Blogs
            </button>
          </div>
        )}
        {isSearchActive && (
          <div className="input-wrapper">
            <input type="text" className="search-input" />
            <img
              src="https://res.cloudinary.com/drvntsbpo/image/upload/v1705565883/cross_twmgud.svg"
              alt="cross"
              onClick={() => setisSearchActive(!isSearchActive)}
            />
          </div>
        )}
        <div className="search-filter-wrapper">
          {!isSearchActive && (
            <img
              className="search"
              src="https://res.cloudinary.com/drvntsbpo/image/upload/v1705839155/search-alt-2-svgrepo-com_urftri.svg"
              alt=""
              onClick={() => setisSearchActive(!isSearchActive)}
            />
          )}
          <img
            className="filter"
            src="https://res.cloudinary.com/drvntsbpo/image/upload/v1705781444/filter-edit-svgrepo-com_ib6yzu.svg"
            alt=""
          />
        </div>
      </div>
      {isActive && (
        <div className="grid-container">
          {PROJECT_DETAILS.map((item) => (
            <ProjectItem
              key={item.id}
              img={item.img}
              description={item.description}
              techStacks={item.techStacks}
              url={item.url}
            />
          ))}
        </div>
      )}
      <div className="mask-projectoverview"></div>
      <div className="pattern-projectoverview"></div>
    </div>
  )
}

export default ProjectOverview
